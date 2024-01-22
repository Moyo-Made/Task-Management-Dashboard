"use client";

import React, { useState } from "react";
import logo from "@/public/images/logo.svg";
import Image from "next/image";
import iconDown from "@/public/images/icon-chevron-down.svg";
import iconUp from "@/public/images/icon-chevron-up.svg";
import ellipsis from "@/public/images/icon-vertical-ellipsis.svg";
import HeaderDropdown from "./HeaderDropdown";
import AddEditBoardModal from "./modals/AddEditBoardModal";
import { useDispatch, useSelector } from "react-redux";
import AddEditTaskModal from "./modals/AddEditTaskModal";
import ElipsisMenu from "./ElipsisMenu";
import DeleteModal from "./modals/DeleteModal";
import boardsSlice from "../redux/boardsSlice";

function Header({ setBoardModalOpen, boardModalOpen }) {
	const dispatch = useDispatch();

	const [openDropdown, setOpenDropdown] = useState(false);
	const [openAddEditTask, setOpenAddEditTask] = useState(false);
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	const [isElipsisOpen, setIsElipsisOpen] = useState(false);
	const [boardType, setBoardType] = useState("add");

	const boards = useSelector((state) => state.boards);
	const board = boards.find((board) => board.isActive);

	const setOpenEditModal = () => {
		setBoardModalOpen(true);
		setIsElipsisOpen(false);
	};

	const setOpenDeleteModal = () => {
		setIsDeleteModalOpen(true);
		setIsElipsisOpen(false);
	};

	const onDeleteBtnClick = () => {
		dispatch(boardsSlice.actions.deleteBoard());
		dispatch(boardsSlice.actions.setBoardActive({ index: 0 }));
		setIsDeleteModalOpen(false);
	};

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
							{board.name}
						</h3>
						<Image
							src={openDropdown ? iconUp : iconDown}
							alt="dropdown icon"
							className="w-2 h-1 ml-3 mt-2 cursor-pointer md:hidden"
							onClick={() => {
								setOpenDropdown((state) => !state);
								setIsElipsisOpen(false);
								setBoardType("add");
							}}
						/>
					</div>
				</div>

				{/* Right side */}
				<div className="flex space-x-4 items-center md:space-x-6">
					<button className="hidden md:block button">+ Add New Task</button>
					<button
						className="button py-1 px-3 md:hidden"
						onClick={() => {
							setOpenAddEditTask((state) => !state);
						}}
					>
						+
					</button>
					<Image
						onClick={() => {
							setBoardType("edit");
							setOpenDropdown(false);
							setIsElipsisOpen((state) => !state);
						}}
						src={ellipsis}
						alt="ellipsis"
						className="cursor-pointer h-6 w-auto"
					/>
					{isElipsisOpen && (
						<ElipsisMenu
							setOpenEditModal={setOpenEditModal}
							setOpenDeleteModal={setOpenDeleteModal}
							type="Boards"
						/>
					)}
				</div>
			</header>

			{openDropdown && (
				<HeaderDropdown
					setBoardModalOpen={setBoardModalOpen}
					setOpenDropdown={setOpenDropdown}
				/>
			)}

			{boardModalOpen && (
				<AddEditBoardModal
					type={boardType}
					setBoardModalOpen={setBoardModalOpen}
				/>
			)}

			{openAddEditTask && (
				<AddEditTaskModal
					setOpenAddEditTask={setOpenAddEditTask}
					device="mobile"
					type="add"
				/>
			)}

			{isDeleteModalOpen && (
				<DeleteModal
					onDeleteBtnClick={onDeleteBtnClick}
					setIsDeleteModalOpen={setIsDeleteModalOpen}
					title={board.name}
					type="board"
				/>
			)}
		</div>
	);
}

export default Header;
