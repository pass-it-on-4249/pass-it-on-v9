import React, { useEffect, useState } from "react";

export default function SearchButton({handleSearchButtonClick, updateData} : {handleSearchButtonClick:any, updateData:any}) {
    
    // Ensures hook's state is updated before calling updateData()
    const [search, setSearch] = useState(false);
    useEffect(() => {
        if (search) {
            updateData();
            setSearch(false);
        }
    }, [search]);
    
    return (
        <button 
            id = "search-button"
            className="bg-amber-300 hover:bg-amber-400 text-gray-900 font-semibold py-2 px-4 rounded-full ml-3 h-10"
            onClick={() => {
                handleSearchButtonClick();
                setSearch(true);
            }}>
            Search
        </button>
    )
}