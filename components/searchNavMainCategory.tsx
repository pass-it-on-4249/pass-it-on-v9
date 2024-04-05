import TitleDropdown from "./titleDropdown";
import SearchBar from "./searchBar";
import MainCategory from "./mainCategory";
import SearchButton from "./searchButton";
import ResetButton from "./resetButton";
import productData from "@/public/script/scraped_data.json";
import { useState } from "react";


export default function SearchNavMainCategory(
    {handleUpdateData, handleNoItemsFound, handleLogImplementation}: 
    {handleUpdateData:any, handleNoItemsFound:any, handleLogImplementation:any}) {

    // Search Bar Input
    const [searchInput, setSearchInput] = useState("");
    const handleSearchBarInputChange = (event:any) => {
        setSearchInput(event.target.value)
    };

    // Main Category
    const [selectedMainCategory, setSelectedMainCategory] = useState('Category');
    const handleMainCategoryOptionClick = (option: React.SetStateAction<string>) => {
        setSelectedMainCategory(option);
    };

    // Filters product data based on search bar input and main category
    const getFilteredData = (data:any) => {
        console.log("original data length " + data.length);
        if (searchInput) {
           // Filter data regardless of order of words in input
            const words = searchInput.toLocaleLowerCase().split(" ");
            data = data.filter((product:any) => {
                return words.every((word:any) => product.title.toLocaleLowerCase().includes(word))
            }); 
            console.log("data length after input filter " + data.length);
        }

        if (selectedMainCategory != 'Category') {
            data = data.filter((product:any) => {
                return product.mainCategory == selectedMainCategory;
            })
            console.log("data length after main category filter " + data.length);
        }

        return data;
    }

    const handleSearchButtonClick = () => {
        handleLogImplementation(null, "searchButtonClick", {
            eventName: "searchButtonClick",
            info: {"searchInput" : searchInput, "mainCategory": selectedMainCategory}
        })
        updateData();
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
    }
    
    return (
        <div className="flex flex-row justify-center items-center mt-10">
            

        <TitleDropdown />
        <SearchBar searchInput={searchInput} handleSearchBarInputChange={handleSearchBarInputChange} />
        <MainCategory selectedMainCategory={selectedMainCategory} handleMainCategoryOptionClick={handleMainCategoryOptionClick} />
        <SearchButton handleSearchButtonClick={handleSearchButtonClick}/>
        <ResetButton handleResetButtonClick={handleResetButtonClick}/>
      </div>
    )
}