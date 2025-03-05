import ProductCard from "@/app/ui/products/card";
export default async function Page() {
  return (
    // <div className="card-parent ">
    <div className="flex justify-flex-start ml-[-20px] flex-wrap ">
      <ProductCard name="p1" pName="Methanol" sName="CH₃OH" />
      <ProductCard name="p2" pName="Formalin" sName="CH₂O" />
    </div>
    // </div>
  );
}
