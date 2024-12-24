"use client"
import React, { useEffect, useState } from "react";
interface Iproducts {
  title: string;
  id: number;
  image: string;
  price: number;
}

const Page = () => {
  const [loading, setLoading] = useState(false);
   const [products, setProducts] = useState<Iproducts[]>([]);
    [];
  
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      console.log("this is running before component load");
      setLoading(false);
    }, 30000);
  }, []);
  return <div>{loading ? "Loading....." : "This is my page"}
  <div className="min-h-screen bg-black p-6">
      <header className=" bg-yellow-500 shadow p-4 flex justify-between">
        <h1 className="text-xl font-bold text-white">
          Client-Side Data Fetching
        </h1>
      </header>
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-yellow-500 shadow rounded-lg p-4 hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-32 object-contain"
            />
            <h2 className="font-semibold text-lg mt-2">{product.title}</h2>
            <p className="text-gray-600">${product.price}</p>
          </div>
        ))}
      </main>
    </div>




  </div>;
};

export default Page;