import ProductList from "@/components/ProductList";
import Image from "next/image";


export default function HomePage() {
  return (
    <div>
      {/* aspect-3/1 ->  width-3 and height-1 of the width */}
      <div className="relative aspect-3/1 mb-12">
        {/* using Image the parent container must have the position relative not static and must give the size while using the fill property */}
        <Image src='/featured.png' alt="Product banner photo" fill />
      </div>
      <ProductList />

    </div>
  );
}