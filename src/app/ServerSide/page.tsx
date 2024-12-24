import React from "react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { SheetSide } from '@/components/Sheet';
import "bootstrap-icons/font/bootstrap-icons.css";
interface Book {
  name:string,
  id: number;
  image: string;
  author: number;
}


export default async function ServerSide() {
    const res = await fetch("https://simple-books-api.glitch.me/books");
    const books = await res.json();
  
    return (
        <div>
            <div>
            <main className=' w-[full] bg-yellow-500 h-[44px] flex justify-between items-center'>
    <div className='flex '>
        
    <SheetSide />
        <h1 className=' ml-0 md:ml-3 text-xl sm:text-4xl font-bold'>Data Fetching</h1>
        </div>
        <ul className=" sm:flex lg:flex justify-between items-center gap-4 hidden md:block">
            <li>
              <Link href="#">
             
             
              
              </Link>
            </li>
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="ClientSide">ClientSide</Link>
            </li>
            <li>
              <Link href="ServerSide">ServerSide</Link>
            </li>
          </ul>
          
             <div className='hidden md:block'>
             <div className='w-[330px]  h[40px] flex justify-start items-center bg-[#f0f0f0] gap-2 rounded-lg'>
             <i className="bi bi-search"></i>
                <input placeholder='serach item...' className='w-full h-full outline-none bg-[#F0F0F0]' />
             </div>
             </div>
          <div className='mr-10  space-x-2 hidden md:block'>
          <i className="bi bi-search"></i>
          <i className="bi bi-cart"></i>
          <i className="bi bi-controller"></i>
          </div>

         

  
    </main>

            </div>

       
      <div className="min-h-screen bg-black p-6">
        <header className="bg-yellow-500 shadow p-4 flex justify-between">
          <h1 className="text-xl font-bold text-white">Server-Side Data Fetching</h1>
        </header>
        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {books.map((book: { id: number; name: string; author: string }) => (
            <div
              key={book.id}
              className="bg-yellow-500 shadow rounded-lg p-4 hover:shadow-lg transition"
            >
              <h2 className="font-semibold text-lg">{book.name}</h2>
              <p className="text-gray-600">Author: {book.author}</p>
            </div>
          ))}
        </main>
      </div>
      </div>
    );
  }




