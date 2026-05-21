import ProductList from "@/components/ProductList";
import Image from "next/image";


export default async function HomePage({searchParams}: {searchParams: Promise<{category: string }>}) {

const category = (await searchParams).category
  return (
    <div>
      {/* aspect-3/1 ->  width-3 and height-1 of the width */}
      <div className="relative aspect-3/1 mb-12">
        {/* using Image the parent container must have the position relative not static and must give the size while using the fill property */}
        <Image src='/featured.png' alt="Product banner photo" fill />
      </div>
      <ProductList  category={category}/>

    </div>
  );
}