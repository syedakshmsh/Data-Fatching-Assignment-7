import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"


function Hero() {
  return (
    <main className='h-screen w-full bg-black '>
        <div className='md:w-[300px] w-auto '>
        <h1 className='md:text-3xl text-3xl font-bold  pt-6 md:ml-10 md:pt-12  text-white '>Welcome To The Data Fetching Application</h1>
    </div>
    <div className='md:w-full w-auto pt-10 flex justify-center gap-6 md:flex-row flex-col md:mx-0 mx-16'>
        <Link href={"ClientSide"}>
        <Button className='bg-yellow-500 md:w-[300px] md:h-[300px] w-[200px] h-[200px] rounded-lg md:text-3xl text-xl'>Client side Redering</Button>
        </Link>
        <Link href={"ServerSide"}>
        <Button className='bg-yellow-500 md:w-[300px] md:h-[300px] w-[200px] h-[200px] rounded-lg hover:bg-black md:text-3xl text-xl'>Server side Redering</Button>
        </Link>
    </div>
    

    
    </main>
  )
}

export default Hero