import React from "react";
import Image from "next/image";
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

function Contact() {
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
            Contact
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
                  className="poppins text-[14px] sm:text-[16px] "
                >
                  Contact
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <div className="w-full h-auto">
        <div className="flex flex-col justify-center items-center mt-20 poppins">
          <h1 className="font-semibold text-[36px] ">Get In Touch With Us</h1>
          <p className="w-[644px] h-[48px] mt-2 text-[#9F9F9F] text-center">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>
        <div className="w-[1058px] h-[923px] flex m-auto">
          <div className="w-[393px] h-[537px] flex flex-col gap-12 justify-center poppins ">
            <div>
              <div className="flex items-center gap-5">
                <Image
                  src="/Vector (1).png"
                  alt="social-icon"
                  width={22}
                  height={28}
                />
                <span className="font-medium text-[24px]">Address</span>
              </div>
              <address className="w-[212px] h-[72px] ml-10 ">
                236 5th SE Avenue, New York NY10000, United States
              </address>
            </div>
            <div>
              <div className="flex items-center gap-5">
                <Image
                  src="/Vector (4).png"
                  alt="social-icon"
                  width={22}
                  height={28}
                />
                <span className="font-medium text-[24px]">Phone</span>
              </div>
              <p className="w-[212px] h-[72px] ml-10 ">
                Mobile: +(84) 546-6789 Hotline: +(84) 456-6789
              </p>
            </div>
            <div>
              <div className="flex items-center gap-5">
                <Image
                  src="/Vector (3).png"
                  alt="social-icon"
                  width={22}
                  height={28}
                />
                <span className="font-medium text-[24px]">Working Time</span>
              </div>
              <p className="w-[212px] h-[72px] ml-10 ">
                Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>
          <div className="max-w-[635px] w-full mx-auto p-5">
            <div className="max-w-[531px] w-full mx-auto mt-16 flex flex-col gap-10 poppins">
              <label htmlFor="name" className="block font-medium ">
                Your Name
                <input
                  id="name"
                  type="text"
                  placeholder="ABC"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md  "
                />
              </label>
              <label htmlFor="name" className="block  font-medium ">
                Email address
                <input
                  id="name"
                  type="text"
                  placeholder="Abc@def.com"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md  "
                />
              </label>
              <label htmlFor="name" className="block  font-medium ">
                Subject
                <input
                  id="Subject"
                  type="text"
                  placeholder="This is an optional"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md  "
                />
              </label>

              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Message
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Hi! i’d like to ask about"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md  "
                />
              </label>
              <button className="w-[237px] h-[48px] border-2 rounded-lg poppins">Submit</button>
            </div>
          </div>
          
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

      </div>
    </>
  );
}

export default Contact;
