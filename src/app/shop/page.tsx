import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

function Shop() {
  return (
    <>
      <div className="w-full h-[316px] relative flex flex-col items-center">
  <Image
    src="/shop.jpeg"
    alt="shop-entry"
    width={1440}
    height={450}
    className="object-cover w-full h-full blur-[2px] opacity-50"
  />

  <div className="absolute top-1/2 transform -translate-y-1/2 flex flex-col justify-center items-center gap-3 px-4">
    <div className="w-[60px] h-[60px] sm:w-[77px] sm:h-[77px]">
      <Image
        src="/shop-logo.png"
        alt="shop-entry"
        width={1000}
        height={1000}
        className="object-contain"
      />
    </div>

    <h1 className="poppins font-medium text-[28px] sm:text-[36px] md:text-[48px] -mt-2">Shop</h1>

    <Breadcrumb>
      <BreadcrumbList className="flex gap-2 text-center">
        <BreadcrumbItem>
          <BreadcrumbLink
            href="/"
            className="poppins font-medium text-[14px] sm:text-[16px] text-black"
          >
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-black text-[14px] sm:text-[16px]" />
        <BreadcrumbItem>
          <BreadcrumbLink
            href="/shop"
            className="poppins text-[14px] sm:text-[16px] text-gray-700"
          >
            Shop
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  </div>
</div>

<div className="w-full h-auto bg-[#FAF4F4] mt-12 flex flex-wrap items-center justify-between px-5 py-4 md:px-20 md:h-[100px]">
  <div className="flex flex-wrap items-center gap-4 md:gap-5">
    <div className="flex items-center gap-2">
      <Image
        src="/shop-Voulm.png"
        alt="shop-entry"
        width={25}
        height={25}
        className="w-[19px] h-[17px]"
      />
      <p className="poppins text-[16px] md:text-[20px]">Filter</p>
    </div>

    <div className="flex items-center gap-3">
      <Image
        src="/Vector (2).png"
        alt="shop-entry"
        width={17}
        height={17}
        className="w-[16px] h-[16px]"
      />
      <Image
        src="/Vector.png"
        alt="shop-entry"
        width={17}
        height={17}
        className="w-[16px] h-[16px]"
      />
    </div>

    <div className="w-[1px] h-8 bg-[#9F9F9F] hidden md:block"></div>

    <span className="poppins text-[14px] md:text-[16px]">
      Showing 1–16 of 32 results
    </span>
  </div>

  <div className="flex flex-wrap items-center gap-4 md:gap-5">
    <div className="flex items-center gap-2">
      <p className="text-[14px] md:text-[16px]">Show</p>
      <input
        type="number"
        placeholder="16"
        className="w-[55px] h-[40px] bg-white p-2 text-center border border-gray-300 rounded"
      />
    </div>

    <div className="flex items-center gap-2">
      <p className="text-[14px] md:text-[16px]">Sort by</p>
      <input
        type="text"
        placeholder="Default"
        className="w-[120px] md:w-[188px] h-[40px] bg-white p-2 border border-gray-300 rounded"
      />
    </div>
  </div>
</div>
      <div className="w-full h-auto ">
        <div className="w-full max-w-[1200px] mx-auto mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
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
            <span className="poppins  mt-auto">Outdoor bar table and stool</span>
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
        <div className="w-full max-w-[1200px] mx-auto mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* Card 2 2 */}
          <div className="bg-white hover:bg-slate-50 rounded-lg shadow-md p-4 flex flex-col items-center">
            <Image
              src="/shop-5.png"
              alt="Trenton modular sofa_3"
              width={500}
              height={150}
              objectFit="cover"
              className="rounded-lg mb-4"
            />
            <span className="poppins mt-auto">Grain coffee table</span>
            <p className="poppins font-medium text-[24px] ">Rs. 15,000.00</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white hover:bg-slate-50 rounded-lg shadow-md p-4 flex flex-col items-center">
            <Image
              src="/shop-6.png"
              alt="Granite dining table"
              width={500}
              height={500}
              objectFit="cover"
              className="rounded-lg mb-4"
            />
            <span className="poppins mt-auto">Kent coffee table</span>
            <p className="poppins font-medium text-[24px] ">Rs. 225,000.00</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white hover:bg-slate-50 rounded-lg shadow-md p-4 flex flex-col items-center">
            <Image
              src="/shop-7.png"
              alt="Outdoor bar table"
              width={500}
              height={150}
              objectFit="cover"
              className="rounded-lg mb-10 "
            />
            <span className="poppins mt-auto">Round coffee table_color 2</span>
            <p className="poppins font-medium text-[24px] ">Rs. 251,000.00</p>
          </div>
          {/* Card 4 */}
          <div className="bg-white hover:bg-slate-50 rounded-lg shadow-md p-4 flex flex-col items-center">
            <Image
              src="/shop-8.png"
              alt="Plain console"
              width={500}
              height={150}
              objectFit="cover"
              className="rounded-lg mb-4"
            />
            <span className="poppins mt-auto">Reclaimed teak coffee table</span>
            <p className="poppins font-medium text-[24px] ">Rs. 25,200.00</p>
          </div>
        </div>
        <div className="w-full max-w-[1200px] mx-auto mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* Card 1 */}
          <div className="bg-white hover:bg-slate-50 rounded-lg shadow-md p-4 flex flex-col items-center">
            <Image
              src="/shop-9.png"
              alt="Trenton modular sofa_3"
              width={500}
              height={150}
              objectFit="cover"
              className="rounded-lg mb-4"
            />
            <span className="poppins mt-auto ">Plain console_</span>
            <p className="poppins font-medium text-[24px] ">Rs. 258,200.00</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white hover:bg-slate-50 rounded-lg shadow-md p-4 flex flex-col items-center">
            <Image
              src="/shop-10.png"
              alt="Granite dining table"
              width={500}
              height={500}
              objectFit="cover"
              className="rounded-lg mb-4"
            />
            <span className="poppins mt-auto">Reclaimed teak Sideboard</span>
            <p className="poppins font-medium text-[24px] ">Rs. 20,000.00</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white hover:bg-slate-50 rounded-lg shadow-md p-4 flex flex-col items-center">
            <Image
              src="/shop-11.png"
              alt="Outdoor bar table"
              width={500}
              height={150}
              objectFit="cover"
              className="rounded-lg mb-4"
            />
            <span className="poppins mt-auto">SJP_0825 </span>
            <p className="poppins font-medium text-[24px] ">Rs. 200,000.00</p>
          </div>
          {/* Card 4 */}
          <div className="bg-white hover:bg-slate-50 rounded-lg shadow-md p-4 flex flex-col items-center">
            <Image
              src="/shop-12.png"
              alt="Plain console"
              width={500}
              height={150}
              objectFit="cover"
              className="rounded-lg mb-4"
            />
            <span className="poppins mt-auto">Bella chair and table</span>
            <p className="poppins font-medium text-[24px] ">Rs. 100,000.00</p>
          </div>
        </div>
        <div className="w-full max-w-[1200px] mx-auto mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* Card 1 */}
          <div className="bg-white hover:bg-slate-50 rounded-lg shadow-md p-4 flex flex-col items-center">
            <Image
              src="/shop-13.png"
              alt="Trenton modular sofa_3"
              width={500}
              height={150}
              objectFit="cover"
              className="rounded-lg mb-4"
            />
            <span className="poppins mt-auto">Granite square side table</span>
            <p className="poppins font-medium text-[24px] ">Rs. 258,800.00</p>
          </div>
          {/* Card 2 */}
          <Link className="bg-white hover:bg-slate-50 rounded-lg shadow-md p-4 flex flex-col items-center" href={"../../components/product/product1.tsx"}>
          
            <Image
              src="/shop-14.png"
              alt="Granite dining table"
              width={500}
              height={500}
              objectFit="cover"
              className="rounded-lg mb-4"
            />
            <span className="poppins mt-auto">Asgaard sofa</span>
            <p className="poppins font-medium text-[24px] ">Rs. 250,000.00</p>
          
          </Link>
          {/* Card 3 */}
          <div className="bg-white hover:bg-slate-50 rounded-lg shadow-md p-4 flex flex-col items-center">
            <Image
              src="/shop-15.png"
              alt="Outdoor bar table"
              width={500}
              height={150}
              objectFit="cover"
              className="rounded-lg mb-4"
            />
            <span className="poppins  mt-auto">Maya sofa three seater</span>
            <p className="poppins font-medium text-[24px] ">Rs. 115,000.00</p>
          </div>
          {/* Card 4 */}
          <div className="bg-white hover:bg-slate-50 rounded-lg shadow-md p-4 flex flex-col items-center">
            <Image
              src="/shop-16.png"
              alt="Plain console"
              width={500}
              height={150}
              objectFit="cover"
              className="rounded-lg mb-4 "
            />
            <span className="poppins mt-auto ">Outdoor sofa set</span>
            <p className="poppins font-medium text-[24px] ">Rs. 244,000.00</p>
          </div>
        </div>
      </div>
      <div className="w-[392px] h-[60px] m-auto mt-20 ">
        <Pagination>
          <PaginationContent>
            <PaginationItem >
              <PaginationLink className="bg-[#FFF9E5] rounded-[10px] p-6 hover:bg-[#FBEBB5]" href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink className="bg-[#FFF9E5] rounded-[10px] p-6 hover:bg-[#FBEBB5]" href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink className="bg-[#FFF9E5] rounded-[10px] p-6 hover:bg-[#FBEBB5]" href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext className="bg-[#FFF9E5] rounded-[10px] p-6 hover:bg-[#FBEBB5]" href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      <div className="mt-20 w-full h-auto bg-[#FAF4F4] flex flex-wrap justify-center gap-8 py-8 poppins">
  {/* Free Delivery */}
  <div className="w-full sm:w-[376px] h-auto text-center sm:text-left">
    <h1 className="font-medium text-[24px] sm:text-[32px]">Free Delivery</h1>
    <p className="text-[16px] sm:text-[20px] text-[#9F9F9F] mt-2">
      For all orders over $50, consectetur adipiscing elit.
    </p>
  </div>

  {/* 90 Days Return */}
  <div className="w-full sm:w-[376px] h-auto text-center sm:text-left">
    <h1 className="font-medium text-[24px] sm:text-[32px]">90 Days Return</h1>
    <p className="text-[16px] sm:text-[20px] text-[#9F9F9F] mt-2">
      If goods have problems, consectetur adipiscing elit.
    </p>
  </div>

  {/* Secure Payment */}
  <div className="w-full sm:w-[376px] h-auto text-center sm:text-left">
    <h1 className="font-medium text-[24px] sm:text-[32px]">Secure Payment</h1>
    <p className="text-[16px] sm:text-[20px] text-[#9F9F9F] mt-2">
      100% secure payment, consectetur adipiscing elit.
    </p>
  </div>
</div>

    </>
  );
}

export default Shop;
