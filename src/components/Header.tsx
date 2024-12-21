"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="w-full h-[100px] flex items-center justify-between  px-5 md:px-20 sticky top-0 z-10 ">
      <button
        className="block md:hidden"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        aria-label="Toggle Menu"
      >
        <div className="w-6 h-0.5 bg-black mb-1"></div>
        <div className="w-6 h-0.5 bg-black mb-1"></div>
        <div className="w-6 h-0.5 bg-black mb-1"></div>
      </button>

      <div className="hidden md:block">
        <ul className="flex gap-5 md:gap-10 lg:gap-20 ">
          <li>
            <Link
              href="/"
              className="font-medium text-sm md:text-base hover:bg-slate-100 p-2 hover:rounded-full"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/shop"
              className="font-medium text-sm md:text-base hover:bg-slate-100 p-2 hover:rounded-full"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="font-medium text-sm md:text-base hover:bg-slate-100 p-2 hover:rounded-full"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="font-medium text-sm md:text-base hover:bg-slate-100 p-2 hover:rounded-full"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex gap-3 sm:gap-5 items-center">
        <Link href={"/myAccount"}>
          <div className="w-6 h-6">
            <Image src="/1.png" alt="social-icon" width={28} height={28} />
          </div>
        </Link>
        <div className="w-6 h-6">
          <Image src="/2.png" alt="social-icon" width={28} height={28} />
        </div>
        <div className="w-6 h-6">
         { <Image src="/3.png" alt="social-icon" width={28} height={28} />}
          
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">
              <div className="w-6 h-6">
                <Image src="/4.png" alt="social-icon" width={28} height={28} />
              </div>
            </Button>
          </SheetTrigger>
          <SheetContent className="p-6 md:p-10 lg:w-[500px] sm:w-full">
            <SheetHeader>
              <SheetTitle className="text-lg sm:text-xl font-bold">
                Shopping Cart
              </SheetTitle>
              <br />
              <hr className="border-[1px]" />
              <br />
              <SheetDescription>
                <div className="flex flex-col md:flex-row gap-4 md:gap-10 items-center">
                  {/* Image Container */}
                  <div className="w-[108px] h-[105px] bg-[#FBEBB5] rounded-[10px] flex items-center justify-center">
                    <Image
                      src="/Asgaard sofa 5.png"
                      alt="social-icon"
                      width={111}
                      height={90}
                      className="object-cover"
                    />
                  </div>

                  {/* Item Details */}
                  <div className="flex-grow">
                    <h1 className="text-[16px] md:text-[18px] font-medium">
                      Asgaard sofa
                    </h1>
                    <div className="mt-3 flex items-center gap-3">
                      <span className="text-[16px]">1</span>
                      <span className="text-[12px]">x</span>
                      <span className="text-[14px] font-semibold text-[#B88E2F]">
                        Rs. 250,000.00
                      </span>
                    </div>
                  </div>
                </div>
                <br />

                {/* Subtotal */}
                <div className="flex justify-between mt-10">
                  <span className="text-[16px]">Subtotal</span>
                  <span className="text-[16px] font-semibold text-[#B88E2F]">
                    Rs. 250,000.00
                  </span>
                </div>

                <br />
                <hr className="border-[1px]" />
              </SheetDescription>
            </SheetHeader>

            {/* Footer Buttons */}
            <SheetFooter className="flex flex-col sm:flex-row justify-center sm:justify-between mt-6">
              <Link
                href={"/cart"}
                className="w-full sm:w-[131px] h-[40px] mb-3 sm:mb-0 border-2 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-100"
              >
                View Cart
              </Link>
              <Link
                href={"/check-out"}
                className="w-full sm:w-[131px] h-[40px] mb-3 sm:mb-0 border-2 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-100"
              >
                Checkout
              </Link>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {isSidebarOpen && (
        <div className="fixed top-0 left-0 w-64 h-full  shadow-lg z-50">
          <button
            className="absolute top-5 right-5 text-2xl font-bold"
            onClick={() => setIsSidebarOpen(false)}
          >
            &times;
          </button>
          <ul className="mt-20 space-y-5 px-5">
            <li>
              <Link
                href="/"
                className="font-medium text-lg"
                onClick={() => setIsSidebarOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className="font-medium text-lg"
                onClick={() => setIsSidebarOpen(false)}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="font-medium text-lg"
                onClick={() => setIsSidebarOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="font-medium text-lg"
                onClick={() => setIsSidebarOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
