import React from 'react';
import bed_1 from "@/public/130741.png";
import chair_1 from "@/public/130724.png";
import dining_chairs_1 from "@/public/130714.png";
import shoes_1 from "@/public/130713.png";
import toys_1 from "@/public/130720.png";
import toys_2 from "@/public/130721.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About Us",
        hash: "#about-us",
    },
    {
        name: "Grant A Wish",
        hash: "#grant-aw",
    },
    {
        name: "VWO List",
        hash: "#vwo-list",
    },
    {
        name: "Item List",
        hash: "#item-list",
    },
    {
        name: "FAQ",
        hash: "#faq",
    },
    {
        name: "Contact Us",
        hash: "#contact-us",
    },
] as const;

export const itemsData = [
    {
        id: 130741,
        imageURL: bed_1,
        title: "Queen Size Bed & Mattress",
        description: "Queen size bed frame & mattress",
        location: ["Alexandra", "Queenstown", "Redhill", "Tiong Bahru"],
        delivery: true,
    },
    {
        id: 130724,
        imageURL: chair_1,
        title: "Leather Chair",
        description: "This is a comfortable & relaxing chair",
        location: ["Alexandra", "Queenstown", "Redhill", "Tiong Bahru"],
        delivery: true,
    },
    {
        id: 130714,
        imageURL: dining_chairs_1,
        title: "6 Dining Table Chairs",
        description: "6 chairs. Stable and comfortable. 3 of them have a taped patches on...",
        location: ["Bayshore", "Bedok", "Chai Chee", "Eastwood"],
        delivery: true,
    },
    {
        id: 130713,
        imageURL: shoes_1,
        title: "Size 36 female shoes",
        description: "these are worn but still usable, just require some cleaning up.",
        location: ["Boon Lay", "Jurong", "Tuas"],
        delivery: true,
    },
    {
        id: 130720,
        imageURL: toys_1,
        title: "Pokemon Ga Ole Disks",
        description: "This is a play disk for pokemon ga ole machine.",
        location: ["Bayshore", "Bedok", "Chai Chee", "Eastwood"],
        delivery: true,
    },
    {
        id: 130721,
        imageURL: toys_2,
        title: "Assorted Toys",
        description: "Random toys for children.",
        location: ["Bayshore", "Bedok", "Chai Chee", "Eastwood"],
        delivery: true,
    },
] as const;