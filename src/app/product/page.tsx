"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { FaFacebook, FaLinkedin, FaStar } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

function Product() {
  const [count, setCount] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<string>("");

  function increment() {
    setCount(prevCount => prevCount + 1);  // Use previous count
  }
  
  function decrement() {
    setCount(prevCount => (prevCount > 1 ? prevCount - 1 : prevCount));  // Use previous count with condition
  }
  

  const handleClick = (tab: string) => {
    setActiveTab(tab);
  };
  
  return (
    <>
      <div className="w-auto h-auto flex flex-wrap ml-4 sm:ml-[99px] items-center poppins text-[14px] sm:text-[16px]">
        <Breadcrumb>
          <BreadcrumbList className="flex flex-wrap gap-1 sm:gap-2">
            <BreadcrumbItem>
              <BreadcrumbLink>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>
                <Link href="/shop">shop</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage> | </BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbPage>Asgaard sofa</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* fist */}
      <div className="w-full h-auto p-4 sm:p-10">
        <div className="w-full h-auto">
          <div className="flex flex-col lg:flex-row justify-evenly">
            {/* left */}
            <div className="w-full lg:w-[553px] h-auto lg:h-[500px] mb-6 lg:mb-0">
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                {/* Thumbnail Section */}
                <div className="w-full lg:w-[76px] flex flex-row lg:flex-col gap-4 lg:gap-5 overflow-auto">
                  {[
                    { src: "/Outdoor sofa set 2.png", alt: "Outdoor sofa set" },
                    {
                      src: "/Outdoor sofa set_2 1.png",
                      alt: "Outdoor sofa set 2",
                    },
                    { src: "/Stuart sofa 1.png", alt: "Stuart sofa" },
                    {
                      src: "/Maya sofa three seater (1) 1.png",
                      alt: "Maya sofa three-seater",
                    },
                  ].map((image, index) => (
                    <div
                      key={index}
                      className="w-[76px] h-[80px] bg-[#FFF9E5] rounded-lg cursor-pointer flex justify-center items-center overflow-hidden"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={76}
                        height={80}
                        className="rounded-lg object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Large Image Section */}
                <div className="w-full lg:w-[481px] h-[300px] lg:h-[500px] bg-[#FFF9E5] rounded-lg shadow-xl flex justify-center items-center overflow-hidden">
                  <Image
                    src="/Asgaard sofa 3.png"
                    alt="Asgaard sofa"
                    width={1000}
                    height={1000}
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>

            {/* right */}
            <div className="w-full lg:w-[606px] h-auto flex flex-col gap-3">
              <h1 className="text-[28px] lg:text-[42px]">Asgaard sofa</h1>
              <span className="text-[18px] lg:text-[24px] font-medium text-[#9F9F9F]">
                Rs. 250,000.00
              </span>

              <div className="flex items-center gap-3 lg:gap-5">
                <div className="flex gap-1 lg:gap-2 items-center text-[#FFDA5B]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <Image
                    src="/Vector (5).png"
                    alt="Outdoor bar table"
                    width={9}
                    height={17.5}
                    objectFit="cover"
                    className="rounded-lg mb-4"
                  />
                </div>
                <div className="flex items-center text-[13px] text-[#9F9F9F]">
                  5 Customer Review
                </div>
              </div>

              <p className="text-[13px]">
                Setting the bar as one of the loudest speakers in its class, the
                Kilburn is a compact, stout-hearted hero with a well-balanced
                audio which boasts a clear midrange and extended highs for a
                sound.
              </p>

              <div className="flex flex-col gap-2">
                <span className="text-[#9F9F9F] text-[14px]">Size</span>
                <div className="flex gap-4 text-[13px]">
                  {["L", "XL", "XS"].map((tab) => (
                    <p
                      key={tab}
                      className={`bg-[#FAF4F4] w-[30px] h-[30px] flex justify-center items-center rounded-lg cursor-pointer ${
                        activeTab === tab ? "bg-[#FBEBB5]" : ""
                      } `}
                      onClick={() => handleClick(tab)}
                    >
                      {tab}
                    </p>
                  ))}
                </div>
              </div>

              <span className="text-[#9F9F9F]">Color</span>
              <div className="flex gap-4 text-[13px]">
                {["#816DFA", "#000000", "#CDBA7B"].map((color, index) => (
                  <p
                    key={index}
                    className={`w-[30px] h-[30px] rounded-full cursor-pointer`}
                    style={{ backgroundColor: color }}
                  ></p>
                ))}
              </div>

              <div className="flex flex-col md:flex-row gap-5">
                <div className="w-[123px] h-[64px] border-[1px] rounded-[10px] flex justify-around items-center">
                  <button onClick={decrement}>-</button>
                  {count}
                  <button onClick={increment}>+</button>
                </div>
                <button id="" className="w-full md:w-[215px] h-[64px] border-[1px] rounded-[10px] flex justify-center items-center hover:border-2 border-black">
                  Add To Cart
                </button>
              </div>

              <hr className="mt-14" />

              <div className="flex flex-col gap-4 mt-10">
                {[
                  { label: "SKU", value: "SS001" },
                  { label: "Category", value: "Sofas" },
                  { label: "Tags", value: "Sofa, Chair, Home, Shop" },
                  {
                    label: "Share",
                    value: (
                      <div className="flex items-center gap-3 text-xl text-black">
                        <FaFacebook />
                        <FaLinkedin />
                        <AiFillTwitterCircle />
                      </div>
                    ),
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-center text-[#9F9F9F]">
                    <p className="w-[100px] font-medium">{item.label}</p>
                    <p className="w-[25px] text-center">:</p>
                    <div className="flex-1">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2nd */}

      <div className="w-auto h-auto p-4 sm:p-10 flex flex-col gap-8 items-center poppins text-[#9F9F9F]">
        <ul className="w-full sm:w-[649px] h-[36px] flex justify-between text-[14px] sm:text-[18px] md:text-[24px]">
          {["Description", "Additional Information", "Reviews [5]"].map(
            (tab) => (
              <li
                key={tab}
                className={`cursor-pointer ${
                  activeTab === tab ? "text-black" : ""
                }`}
                onClick={() => handleClick(tab)}
              >
                {tab}
              </li>
            )
          )}
        </ul>
        <div className="w-full sm:w-[1026px] h-auto flex flex-col gap-8">
          <p>
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p>
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-8">
          <div className="w-full lg:w-[605px] h-[200px] sm:h-[348px] bg-[#FFF9E5] rounded-[10px]">
            <Image
              src="/Cloud sofa three seater + ottoman_2 1.png"
              alt="Outdoor bar table"
              width={605}
              height={348}
              objectFit="cover"
              className=""
            />
          </div>
          <div className="w-full lg:w-[605px] h-[200px] sm:h-[348px] bg-[#FFF9E5] rounded-[10px]">
            <Image
              src="/Cloud sofa three seater + ottoman_1 1.png"
              alt="Outdoor bar table"
              width={605}
              height={348}
              objectFit="cover"
              className=""
            />
          </div>
        </div>
      </div>

      {/* 3rd */}
      <div className="w-full h-auto  flex flex-col items-center p-10 poppins gap-10">
        <h1 className="text-[36px] font-medium">Related Products</h1>

        <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* Card 1 */}
          <div className="bg-white hover:bg-slate-50 rounded-lg shadow-md p-4 flex flex-col items-center">
            <Image
              src="/card-1.png"
              alt="Trenton modular sofa_3"
              width={500}
              height={150}
              objectFit="cover"
              className="rounded-lg mb-4"
            />
            <span className="poppins mt-auto">Trenton modular sofa_3</span>
            <p className="poppins font-medium text-[24px] ">Rs. 25,000.00</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white hover:bg-slate-50 rounded-lg shadow-md p-4 flex flex-col items-center">
            <Image
              src="/card-2.png"
              alt="Granite dining table"
              width={500}
              height={500}
              objectFit="cover"
              className="rounded-lg mb-4"
            />
            <span className="poppins mt-auto">
              Granite dining table with dining chair
            </span>
            <p className="poppins font-medium text-[24px] ">Rs. 25,000.00</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white hover:bg-slate-50 rounded-lg shadow-md p-4 flex flex-col items-center">
            <Image
              src="/card-3.png"
              alt="Outdoor bar table"
              width={500}
              height={150}
              objectFit="cover"
              className="rounded-lg mb-4"
            />
            <span className="poppins  mt-auto">
              Outdoor bar table and stool
            </span>
            <p className="poppins font-medium text-[24px] ">Rs. 25,000.00</p>
          </div>
          {/* Card 4 */}
          <div className="bg-white hover:bg-slate-50 rounded-lg shadow-md p-4 flex flex-col items-center">
            <Image
              src="/card-4.png"
              alt="Plain console"
              width={500}
              height={150}
              objectFit="cover"
              className="rounded-lg mb-4"
            />
            <span className="poppins mt-auto ">
              Plain console with teak mirror
            </span>
            <p className="poppins font-medium text-[24px] ">Rs. 25,000.00</p>
          </div>
        </div>
        <div className="w-full text-center mt-10">
          <h2 className="poppins font-medium text-[24px]">View More</h2>
          <p className="w-[121px] h-1 border-b-2 border-black mx-auto mt-4"></p>
        </div>
      </div>
    </>
  );
}

export default Product;
