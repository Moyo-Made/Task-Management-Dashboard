"use client";

import React, { useState } from "react";
import logo from "@/public/images/logo.svg";
import Image from "next/image";
import iconDown from "@/public/images/icon-chevron-down.svg";
import iconUp from "@/public/images/icon-chevron-up.svg";
import ellipsis from "@/public/images/icon-vertical-ellipsis.svg";

function Header() {
	const [openDropdown, setOpenDropdown] = useState(false);
	return (
		<div className="p-4 fixed left-0 bg-white dark:bg-[#2b2c37] z-50 right-0">
			<header className="flex justify-between dark:text-white items-center">
				{/* Left Side */}
				<div className="flex items-center space-x-2 md:space-x-4">
					<Image src={logo} alt="logo" className="h-6 w-6" />
					<h3 className="hidden md:inline-block font-bold font-sans md:text-2xl">
						TechMateAI
					</h3>
					<div className="flex items-center">
						<h3 className="truncate max-w-[200px] md:text-2xl text-xl font-bold md:ml-20 font-sans">
							Board Name
						</h3>
						<Image
							src={openDropdown ? iconUp : iconDown}
							alt="dropdown icon"
							className="w-2 ml-3 cursor-pointer md:hidden"
							onClick={() => setOpenDropdown((state) => !state)}
						/>
					</div>
				</div>

				{/* Right side */}
				<div className="flex space-x-4 items-center md:space-x-6">
					<button className="button">+ Add New Task</button>
					<button className="button py-1 px-3 md:hidden">+</button>
					<Image src={ellipsis} alt="ellipsis" className="cursor-pointer h-6" />
				</div>
			</header>
		</div>
	);
}

export default Header;