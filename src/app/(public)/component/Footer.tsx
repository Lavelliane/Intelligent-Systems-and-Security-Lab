import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import Image from "next/image";
import { DM_Sans, Kumbh_Sans } from "next/font/google";

const Footer = () => {
  return (
    <div className="w-full h-fit">
      <div className="w-full flex flex-col p-4 pl-24 pr-16 bg-white text-dm-sans-default  text-custom-gray-50  font-DM_Sans py-11 gap-2">
        <div className="w-full flex flex-row item-start justify-between p-2 pb-14 ">
          <div className="w-full flex flex-col ">
            <Image className="w-[69px] h-[54px]" src={""} alt={""}></Image>
            <span className="font-dm-sans-semi text-custom-gray-50 flex items-center py-1 ">
              Lorem ipsum dolor sit amet<br></br> consectetur adipiscing elit
              aliquam
            </span>
          </div>
          <div className="flex flex-row justify-around items-start gap-20 text-nowrap">
            <div className="items-center font-dm-sans-semi text-custom-gray-50 ">
              <h1 className="font-dm-sans-bold text-dm-sans-custom-1 h-[54px] text-black  ">
                About
              </h1>
              <div>
                <p className="py-1">Research</p>
                <p className="py-1">Partners</p>
                <p className="py-1">Lab Members</p>
              </div>
            </div>
            <div className="items-center font-dm-sans-semi">
              <h1 className="font-dm-sans-bold text-dm-sans-custom-1 text-black h-[54px]">
                Legal
              </h1>
              <p className="py-1">Privacy Policy</p>
              <p className="py-1">Terms & Conditions</p>
            </div>
            <div>
              <h1 className="font-dm-sans-bold text-dm-sans-custom-1 text-black h-[54px]">
                Contact us
              </h1>
              <p className="flex flex-nowrap items-center">
                <span className="p-2 text-black">
                  <MdOutlineMail />
                </span>
                iss@company.com
              </p>
              <p className="flex flex-nowrap items-center">
                <span className="p-2  text-black">
                  <LuPhone />
                </span>
                (414)687-5892
              </p>
              <p className="flex flex-nowrap items-center">
                <span className="p-2  text-black">
                  <GrLocation />
                </span>
                9W27+RBR,Sitio Nasipit,Brgy, Cebu City
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#6F6C90] w-full h-[1px] opacity-50"></div>
        <div className="flex flex-row justify-between py-3">
          <div className="pl-11">Copyright © 2024 ISS LAB</div>
          <div>
            All Rights Reserved |{" "}
            <a className="text-[#4A3AFF] underline" href="#">
              Terms and Conditions
            </a>{" "}
            |{" "}
            <a className="text-[#4A3AFF] underline" href="#">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
