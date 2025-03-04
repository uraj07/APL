export default async function Test() {
  let val = "";
  setTimeout(() => {
    val = "newVal";
  }, 3000);
  return <div>val : {val}</div>;
}
