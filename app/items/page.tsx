"use client";

import Image from "next/image";
import React from "react";
import Dropdown from "@/components/dropdowns";
import SearchBar from "@/components/searchBar";
import Category from "@/components/category";
import SearchButton from "@/components/searchButton";
import ResetButton from "@/components/resetButton";
import PageNav from "@/components/pageNav";

export default function ItemList() {
  return (
    <main className="flex flex-col width: auto">
      <div className="flex flex-row justify-center items-start width:990px">
        <div style={{ float: "left", paddingTop: 5 }}>
          <a href="https://www.passiton.org.sg/">
            <Image 
              className="ive_eobj_left ive_clickable" 
              src="/logo.png" 
              alt="Passiton Logo"
              width={150}
              height={80}
            />
          </a>
        </div>
        <div className="flex flex-col justify-end pl-20">
          <div className="flex justify-end">
            <Image
              src = "/login_bar.png"
              alt = "Login Bar"
              width = {608}
              height = {35}
            />
          </div>
          <div
            className="flex flex-row items-center justify-end pt-3">
            <a href="/..">
              <Image
                className="ive_eobj_left ive_clickable padding-right: 2px padding-left: 2px"
                src="/home.png"
                alt="Home"
                width={73}
                height={61}
              />
            </a>{" "}
            <a href="https://www.passiton.org.sg/about-us">
              <Image
                className="ive_eobj_left ive_clickable padding-right: 2px padding-left: 2px"
                src="/about_us.png"
                alt="About Us"
                width={73}
                height={61}
              />
            </a>{" "}
            <a href="https://www.passiton.org.sg/grant-a-wish">
              <Image
                className="ive_eobj_left ive_clickable padding-right: 2px padding-left: 2px"
                src="/grant_wish.png"
                alt="Grant a Wish"
                width={73}
                height={61}
              />
            </a>{" "}
            <a href="https://www.passiton.org.sg/vwo-list">
              <Image
                className="ive_eobj_left ive_clickable padding-right: 2px padding-left: 2px"
                src="/vwo_list.png"
                alt="VWO List"
                width={73}
                height={61}
              />
            </a>{" "}
            <a href="/items">
              <Image
                className="ive_eobj_left ive_clickable padding-right: 2px padding-left: 2px"
                src="/item_list.png"
                alt="Item List"
                width={73}
                height={61}
              />
            </a>{" "}
            <a href="https://www.passiton.org.sg/faq">
              <Image
                className="ive_eobj_left ive_clickable padding-right: 2px padding-left: 2px"
                src="/faq.png"
                alt="FAQ"
                width={73}
                height={61}
              />
            </a>{" "}
            <a href="https://www.passiton.org.sg/contact-us">
              <Image
                className="ive_eobj_left ive_clickable padding-right: 2px padding-left: 2px"
                src="/contact.png"
                alt="Contact Us"
                width={73}
                height={61}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center mt-10">
        <Dropdown />
        <SearchBar />
        <Category />
        <SearchButton />
        <ResetButton />
      </div>
      <div className="flex flex-row justify-center items-center mt-7">
        <div className="flex flex-row items-center pr-20"> 
          <div className="text-[#2BA41D] font-semibold pr-2">My Cart</div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2BA41D" className="w-5 h-5 items-center">
              <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
            </svg>
          </div>
        </div>
        <div className="pl-20">
          <PageNav />
        </div>  
      </div>
    </main>
  );
}
