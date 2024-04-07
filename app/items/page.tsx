"use client";

import Image from "next/image";
import React from "react";
import { useState } from "react";
import PageNav from "@/components/pageNav";
import ProductCard from "@/components/productCard";
import ProductCardStaggered from "@/components/productCardStaggered";
import { ShoppingCartIcon } from '@heroicons/react/20/solid';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchNavMainCategory from "@/components/searchNavMainCategory";
import productData from "@/public/script/scraped_data.json";
import SearchNavSubCategory from "@/components/searchNavSubCategory";
import * as Logging from "@/public/logging/logging";


const staggeredWidths = ['240px', '230px', '250px'];

export default function ItemList() {
  
  // Product Data
  const [data, setData] = useState(productData);
  const handleUpdateData = (data:any) => {
    setData(data);
  }

  // Log Implementation
  const handleLogImplementation = (event: { type: string; }, customName: string, customInfo: any) => {
    if (event) {
      console.log("log " + event.type);
    } else {
        console.log("log " + customName);
    }
    Logging.default(event, customName, customInfo);
  }

  // If there is no results from search
  const handleNoItemsFound = (isVisible:boolean) => {
    const noItemsFound = document.getElementById("no-items-found-text")!
    if (isVisible) {
      noItemsFound.style.display = "block";
      noItemsFound.style.color = "#000000";
    } else {
      noItemsFound.style.display = "none";
    }
  }

  const styles = {
    container: {
      marginTop: 40,
      marginLeft: 290,
      padding: 0,
      width: '60vw',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, 260px)',
      gridAutoRows: '10px',
      position: 'relative' as 'relative',
      justifyContent: 'center',
    }
}

  function getCardSize(index: number): 'small' | 'medium' | 'large' {
      // Define the sizes in the sequence: small, medium, large
      const sizes: ('small' | 'medium' | 'large')[] = ['small', 'medium', 'large', 'small'];

      // Return the size based on the index using modular arithmetic
      return sizes[index % sizes.length];
  }

  return (
    <main className="flex flex-col bg-white text-stone-900 mb-20">
      <div className="flex flex-row justify-center items-start width:990px">
        <div style={{ float: "left", paddingTop: 5 }}>
          <Image 
              className="ive_eobj_left ive_clickable" 
              src="/logo.png" 
              alt="Passiton Logo"
              width={150}
              height={80}
          />
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
                id="items-page-home-button"
                className="ive_eobj_left ive_clickable padding-right: 2px padding-left: 2px"
                src="/home.png"
                alt="Home"
                width={73}
                height={61}
              />
            </a>{" "}
            <Image
                className="ive_eobj_left ive_clickable padding-right: 2px padding-left: 2px"
                src="/about_us.png"
                alt="About Us"
                width={73}
                height={61}
            />{" "}
            <Image
                className="ive_eobj_left ive_clickable padding-right: 2px padding-left: 2px"
                src="/grant_wish.png"
                alt="Grant a Wish"
                width={73}
                height={61}
            />{" "}
            <Image
                className="ive_eobj_left ive_clickable padding-right: 2px padding-left: 2px"
                src="/vwo_list.png"
                alt="VWO List"
                width={73}
                height={61}
            />{" "}
            <a href="/items">
              <Image
                id="items-page-item-list-button"
                className="ive_eobj_left ive_clickable padding-right: 2px padding-left: 2px"
                src="/item_list.png"
                alt="Item List"
                width={73}
                height={61}
              />
            </a>{" "}
            <Image
                className="ive_eobj_left ive_clickable padding-right: 2px padding-left: 2px"
                src="/faq.png"
                alt="FAQ"
                width={73}
                height={61}
            />{" "}
            <Image
                className="ive_eobj_left ive_clickable padding-right: 2px padding-left: 2px"
                src="/contact.png"
                alt="Contact Us"
                width={73}
                height={61}
            />
          </div>
        </div>
      </div>
      <ToastContainer />

      {/* SearchNav with only main category filter */}
      <SearchNavMainCategory 
        handleUpdateData={handleUpdateData} 
        handleNoItemsFound={handleNoItemsFound}
        handleLogImplementation={handleLogImplementation}/>

      {/* SearchNav with both main and sub category filter */}
      {/* <SearchNavSubCategory 
        handleUpdateData={handleUpdateData} 
        handleNoItemsFound={handleNoItemsFound}
        handleLogImplementation={handleLogImplementation}/> */}
      
      <div className="flex flex-row justify-center items-center mt-7">
        <div className="flex flex-row items-center mr-52 ml-4"> 
          <div className="text-[#2BA41D] font-semibold pr-2">My Cart</div>
          <ShoppingCartIcon className="h-5 w-5" fill="#2BA41D" aria-hidden="true" />
        </div>
        <div className="ml-56 pl-10">
          <PageNav />
        </div>
      </div>

      <div style={styles.container}>
        {data.map((product, index) => (
            <ProductCard key={product.id} product={product} cardSize={getCardSize(index)} />
        ))}
      </div>
      
      {/* Shows up when filtered data's length is zero */}
      <div className="flex flex-col items-center mr-57 ml-4"> 
          <h2 id="no-items-found-text" className="text-sm font-semibold mb-1 text-[#FFFFFF]">
              There is no item found.</h2>
      </div>
    </main>    
  );
}