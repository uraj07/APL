// import SideNav from "@/app/ui/dashboard/sidenav";
// export default function Layout({ children }) {
//   return (
//     <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
//       <div className="w-full flex-none md:w-64">
//         <div>
//           <SideNav />
//         </div>
//       </div>
//       <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
//     </div>
//   );
// }
"use client";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import DashboardIcon from "@mui/icons-material/SpaceDashboard";
import Link from "next/link";
import Image from "next/image";
import DeviceIcon from "@mui/icons-material/Phonelink";
import UserIcon from "@mui/icons-material/ManageAccounts";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { Suspense } from "react";
// import BG from "bg1.jpg";

const links = [
  { name: "Dashboard", href: "/dashboard", icon: DashboardIcon },
  {
    name: "Products",
    href: "/dashboard/products",
    icon: DeviceIcon,
  },
  { name: "Users", href: "/dashboard/users", icon: UserIcon },
];

const drawerWidth = 319;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  marginTop: "15px",
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: "100vw",
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

export default function Layout({ children }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const pathname = usePathname();
  return (
    <>
      <Box style={{ display: "flex" }} className="max-w-[1200px]">
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-64">
            <CssBaseline />
            <AppBar position="fixed" open={open}>
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={!open ? handleDrawerOpen : handleDrawerClose}
                  edge="start"
                  size="large"
                  sx={[
                    {
                      marginRight: 5,
                      position: "fixed",
                      left: "19px",
                      color: "#444",
                    },
                  ]}
                >
                  {!open ? <MenuIcon /> : <MenuOpenIcon />}
                </IconButton>
                <div
                  style={{
                    marginLeft: "37px",
                    position: "fixed",
                    left: "27px",
                  }}
                  className="w-32 text-white md:w-40"
                >
                  <Image
                    src="/apl-logo.png"
                    width={100}
                    height={100}
                    className="hidden md:block"
                    alt="APL logo"
                  />
                </div>
                {/* <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  style={{
                    position: "fixed",
                    left: "70px",
                    color: "#444",
                  }}
                >
                  ioTX
                </Typography> */}
              </Toolbar>
            </AppBar>
          </div>
        </div>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader></DrawerHeader>
          {/* <Divider /> */}
          <div className={open ? "openedMainTitel" : "closedMainTitel"}>
            Primary
          </div>
          {/* <NavLinks /> */}
          <List>
            {links.map((link, index) => {
              const LinkIcon = link.icon;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={clsx(
                    "flex h-[48px] grow items-center text-gray-500 justify-flex-start gap-2 rounded-md  p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-900 md:flex-none md:justify-start md:p-2 md:px-3",
                    {
                      "bg-sky-100 [&&]:text-blue-900": pathname === link.href,
                    }
                  )}
                  onClick={handleDrawerOpen}
                >
                  <LinkIcon
                    className="w-6"
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: "center",
                        // color: "#757575",
                      },
                      open
                        ? {
                            mr: 3,
                          }
                        : {
                            mr: "auto",
                          },
                    ]}
                  />
                  <p
                    // className="hidden md:block"
                    style={
                      open
                        ? {
                            opacity: 1,
                            fontWeight: 400,
                            fontSize: "1rem",
                            color: "#333",
                          }
                        : {
                            opacity: 0,
                          }
                    }
                  >
                    {link.name}
                  </p>
                </Link>
              );
            })}
          </List>
          <Divider
            sx={{ borderWidth: " 0 0 2px !important", margin: "0 10px" }}
          />
          <div className={open ? "openedMainTitel" : "closedMainTitel"}>
            Secondary
          </div>
          <List>
            {["About", "Contact", "Help"].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={[
                    {
                      minHeight: 48,
                      px: 2.5,
                    },
                    open
                      ? {
                          justifyContent: "initial",
                        }
                      : {
                          justifyContent: "center",
                        },
                  ]}
                >
                  <ListItemIcon
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: "center",
                      },
                      open
                        ? {
                            mr: 3,
                          }
                        : {
                            mr: "auto",
                          },
                    ]}
                  >
                    {index % 2 === 0 ? <DashboardIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    sx={[
                      open
                        ? {
                            opacity: 1,
                          }
                        : {
                            opacity: 0,
                          },
                    ]}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        {/* <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div> */}
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 1 }}
          className={open ? "mainOpened" : "mainClosed"}
        >
          <DrawerHeader />

          {children}
        </Box>
      </Box>
    </>
  );
}
