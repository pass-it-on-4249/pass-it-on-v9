import TitleDropdown from "./titleDropdown";
import SearchBar from "./searchBar";
import MainCategory from "./mainCategory";
import SearchButton from "./searchButton";
import ResetButton from "./resetButton";
import productData from "@/public/script/scraped_data.json";
import { useState } from "react";


export default function SearchNavMainCat({setDataFunction}) {
    
    // Search bar input
    const [query, setQuery] = useState("");

    const handleSearchBarInputChange = event => {
        setQuery(event.target.value)
    };

    const getFilteredData = (query, data) => {
        if (!query) {
        return data;
        }
        
        // Filter data regardless of order of words in query
        const words = query.toLocaleLowerCase().split(" ");
        return data.filter(product => {
            return words.every(word => product.title.toLocaleLowerCase().includes(word))
        });
    }

    const updateData = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setDataFunction(getFilteredData(query, productData));
    }
    
    return (
        <div className="flex flex-row justify-center items-center mt-10">
        <TitleDropdown />
        <SearchBar query={query} handleSearchBarInputChange={handleSearchBarInputChange} handleFormSubmit={updateData}/>
        <MainCategory />
        <SearchButton />
        <ResetButton />
      </div>
    )
}