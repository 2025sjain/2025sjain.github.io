import { useState } from 'react'
import Image from "next/image"
import cat2 from "../public/images/Black_background.jpeg"
import cat23 from "../public/images/Screen Shot 2022-04-23 at 10.03.41 AM.png"
import d from "../public/images/Screen Shot 2022-04-23 at 11.04.38 AM.png"
import c from "../public/images/Black_background.jpeg"
import b from "../public/images/1145359.webp"
import a from "../public/images/mEBa4or.png"
import e from "../public/images/1552756305626.jpeg"
import social from "../public/images/Screen Shot 2022-04-23 at 12.08.50 PM.png"

export default function officers() {
    
    return (
        <div className = "h-screen bg-black">
          <h1 className = "text-center text-6xl font-bold py-24 text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-green-500">
            Meet Our Team!
          </h1>
          <div className = "flex flex-row">
      <div className = "transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-105 duration-300 pl-24 pr-6 pb-12">
      <div className=" bg-gradient-to-r from-slate-600 to-slate-900 hover:bg-gradient-to-r hover:from-slate-700 hover:to-black rounded-xl shadow-md overflow-hidden ">
    <div className="md:flex">
      <div className="">
        <Image className=" object-cover h-12 w-12" src={c} alt="">
      </Image>
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-red-400 font-semibold">Self-Driving Cars</div>
        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-yellow-200 hover:underline">Our Team</a>
        <p className="mt-2 text-white">
          *More Information Coming Soon*
        </p>
      </div>
    </div>
  </div>
  </div>
    </div>
  
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
      <Image class="h-48 w-full object-cover md:h-full md:w-48" src="/img/store.jpg" alt="Man looking at item at a store"></Image>
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
      <p class="mt-2 text-slate-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
    </div>
  </div>
</div>

    <div className = "transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-105 duration-300 pl-6 pr-24 pb-12">
      <div className="bg-gradient-to-r from-slate-600 to-slate-900 hover:bg-gradient-to-r hover:from-slate-700 hover:to-black  rounded-xl shadow-md overflow-hidden ">
    <div className="md:flex">
      <div className="">
        <Image className=" object-cofillver md:h-full md:w-full" src={c} alt="">
      </Image>
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-red-400 font-semibold">Self-Driving Cars</div>
        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-yellow-200 hover:underline">Our Team</a>
        <p className="mt-2 text-white">
        *More Information Coming Soon*
  </p>
  </div>
  
    </div>
    
  </div>
  </div>
    </div>
  
    </div>
        </div>
      )
  }