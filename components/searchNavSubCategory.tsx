import TitleDropdown from "./titleDropdown";
import SearchBar from "./searchBar";
import SearchButton from "./searchButton";
import ResetButton from "./resetButton";
import productData from "@/public/script/scraped_data.json";
import { useEffect, useState } from "react";
import SubCategories from "./subCategories";
import { tree } from "next/dist/build/templates/app-page";


export default function SearchNavSubCategory(
    {handleUpdateData, handleNoItemsFound, handleLogImplementation}: 
    {handleUpdateData:any, handleNoItemsFound:any, handleLogImplementation:any}) {

    // Search Bar Input
    const [searchInput, setSearchInput] = useState("");
    const handleSearchBarInputChange = (event:any) => {
        setSearchInput(event.target.value)
    };

    // Main Category
    const [selectedMainCategory, setSelectedMainCategory] = useState('Category');
    const handleMainCategoryClick = (option: React.SetStateAction<string>) => {
        setSelectedMainCategory(option);
        setSelectedSubCategory('');
    };

    // Sub Category
    const [selectedSubCategory, setSelectedSubCategory] = useState('');
    const handleSubCategoryClick = (option: React.SetStateAction<string>) => {
        setSelectedSubCategory(option);
    };

    // Filters product data based on search bar input, main and sub category
    const getFilteredData = (data:any) => {
        console.log("original data length " + data.length);
        if (searchInput) {
            console.log("search input " + searchInput);
           // Filter data regardless of order of words in input
            const words = searchInput.toLocaleLowerCase().split(" ");
            data = data.filter((product:any) => {
                return words.every((word:any) => product.title.toLocaleLowerCase().includes(word))
            }); 
            console.log("data length after input filter " + data.length);
        }

        if (selectedMainCategory != 'Category') {
            console.log("selectedMainCategory " + selectedMainCategory);
            data = data.filter((product:any) => {
                return product.mainCategory == selectedMainCategory;
            })
            console.log("data length after main category filter " + data.length);
        }

        if (selectedSubCategory != '') {
            console.log("selectedSubCategory " + selectedSubCategory);
            data = data.filter((product:any) => {
                return product.subCategory == selectedSubCategory;
            })
            console.log("data length after main category filter " + data.length);
        }

        return data;
    }

    const handleSearchButtonClick = () => {
        handleLogImplementation(null, "searchButtonClick", {
            eventName: "searchButtonClick",
            info: {"searchInput" : searchInput, "mainCategory": selectedMainCategory, "subCategory": selectedSubCategory}
        })
    }

    const updateData = () => {
        let filteredData = getFilteredData(productData);
        
        if (filteredData.length == 0) {
            handleNoItemsFound(true);
        } else {
            handleNoItemsFound(false);
        }

        handleUpdateData(filteredData);
    }

    const handleResetButtonClick = () => {      
        setSearchInput("");
        setSelectedMainCategory('Category');
        setSelectedSubCategory('');
    } 
    
    return (
        <div className="flex flex-row justify-center items-center mt-10">
            <TitleDropdown />
            <SearchBar searchInput={searchInput} handleSearchBarInputChange={handleSearchBarInputChange} />
            <SubCategories 
                selectedMainCategory={selectedMainCategory} handleMainCategoryClick={handleMainCategoryClick}
                selectedSubCategory={selectedSubCategory} handleSubCategoryClick={handleSubCategoryClick}/>
            <SearchButton handleSearchButtonClick={handleSearchButtonClick} updateData={updateData}/>
            <ResetButton handleResetButtonClick={handleResetButtonClick} updateData={updateData}/>
      </div>
    )
}