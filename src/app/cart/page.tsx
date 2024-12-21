import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

function Cart() {
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

          <h1 className="poppins font-medium text-[28px] sm:text-[36px] md:text-[48px] -mt-2">
            Cart
          </h1>

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
                  Cart
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      {/* body */}
      <div className="w-full h-auto sm:h-[525px] flex justify-center items-center poppins p-4 sm:p-8">
        <div className="w-full sm:w-[1240px] h-auto sm:h-[390px] flex flex-col sm:flex-row justify-between">
          {/* Left Section */}
          <div className="w-full sm:w-[817px] h-auto flex flex-col gap-6 sm:gap-14">
            {/* Header with Product Info */}
            <div className="w-full h-[55px] bg-[#FFF9E5] flex justify-center items-center">
              <ul className="flex flex-wrap justify-between gap-6 sm:gap-24 text-[12px] sm:text-[16px] font-medium">
                <li>Product</li>
                <li>Price</li>
                <li>Quantity</li>
                <li>Subtotal</li>
              </ul>
            </div>

            {/* Product Row */}
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-14 items-center sm:items-start">
              {/* Image */}
              <div className="w-[106px] h-[106px] flex justify-center items-center bg-[#fbebb5] rounded-[10px]">
                <Image
                  src="/Asgaard sofa 4.png"
                  alt="shop-entry"
                  width={122}
                  height={92}
                  className="object-cover"
                />
              </div>

              {/* Product Details */}
              <div className="w-full m-auto sm:w-[573px] h-auto flex flex-col sm:flex-row gap-4 sm:gap-14 items-center sm:items-start text-[#9F9F9F]">
                <span className="text-sm sm:text-base">Asgaard sofa</span>
                <span className="text-sm sm:text-base">Rs. 250,000.00</span>
                <span className="border-2 px-3 rounded-[5px] text-black text-sm sm:text-base">
                  1
                </span>
                <span className="text-sm sm:text-base text-black">
                  Asgaard sofa
                </span>
              </div>

              {/* Remove Icon */}
              <div className="w-[21px] h-[21px] m-auto flex justify-center items-center cursor-pointer">
                <Image
                  src="/Vector (6).png"
                  alt="shop-entry"
                  width={28}
                  height={28}
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Section (Cart Totals) */}
          <div className="w-full sm:w-[393px] h-auto sm:h-[390px] bg-[#FFF9E5] flex flex-col justify-center items-center gap-8 sm:gap-14 p-4 sm:p-6">
            <h1 className="text-[24px] sm:text-[32px] font-semibold text-center sm:text-left">
              Cart Totals
            </h1>

            {/* Totals */}
            <div className="flex flex-col gap-6 sm:gap-8 w-full text-center sm:text-left">
              <div className="flex justify-between gap-6 sm:gap-10 text-sm sm:text-base">
                <span className="font-medium">Subtotal</span>
                <span className="text-[#9F9F9F]">Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between gap-6 sm:gap-10 text-sm sm:text-base">
                <span className="font-medium">Total</span>
                <span className="text-[18px] sm:text-[20px] text-[#B88E2F]">
                  Rs. 250,000.00
                </span>
              </div>
            </div>

            {/* Checkout Button */}
            <button className="w-full sm:w-[222px] h-[48px] sm:h-[58.95px] border-2 border-black rounded-[15px] text-[16px] sm:text-[20px] hover:bg-[#f6efd6]">
              <Link href={"/check-out"}>Check Out</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-20 w-full h-auto bg-[#FAF4F4] flex flex-wrap justify-center gap-8 py-8 poppins">
        {/* Free Delivery */}
        <div className="w-full sm:w-[376px] h-auto text-center sm:text-left">
          <h1 className="font-medium text-[24px] sm:text-[32px]">
            Free Delivery
          </h1>
          <p className="text-[16px] sm:text-[20px] text-[#9F9F9F] mt-2">
            For all orders over $50, consectetur adipiscing elit.
          </p>
        </div>

        {/* 90 Days Return */}
        <div className="w-full sm:w-[376px] h-auto text-center sm:text-left">
          <h1 className="font-medium text-[24px] sm:text-[32px]">
            90 Days Return
          </h1>
          <p className="text-[16px] sm:text-[20px] text-[#9F9F9F] mt-2">
            If goods have problems, consectetur adipiscing elit.
          </p>
        </div>

        {/* Secure Payment */}
        <div className="w-full sm:w-[376px] h-auto text-center sm:text-left">
          <h1 className="font-medium text-[24px] sm:text-[32px]">
            Secure Payment
          </h1>
          <p className="text-[16px] sm:text-[20px] text-[#9F9F9F] mt-2">
            100% secure payment, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </>
  );
}

export default Cart;
