import React from "react";

export default function ResetButton({handleResetButtonClick} : {handleResetButtonClick:any}) {
    return (
        <button 
            className="bg-neutral-300 hover:bg-neutral-400 text-neutral-500 font-semibold py-2 px-4 rounded-full ml-3 h-10"
            onClick={handleResetButtonClick}>
            Reset
        </button>
    )
}