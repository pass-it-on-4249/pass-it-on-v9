import React from "react";

export default function SearchButton({handleSearchButtonClick} : {handleSearchButtonClick:any}) {
    return (
        <button 
            className="bg-amber-300 hover:bg-amber-400 text-gray-900 font-semibold py-2 px-4 rounded-full ml-3 h-10"
            onClick={handleSearchButtonClick}>
            Search
        </button>
    )
}