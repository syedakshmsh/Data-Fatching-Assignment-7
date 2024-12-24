import React from 'react'
import Link from 'next/link'


import "bootstrap-icons/font/bootstrap-icons.css";
import { SheetSide } from '@/components/Sheet';

function Header() {
  return (
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
  )
}

export default Header