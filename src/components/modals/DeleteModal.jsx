import React from "react";

function DeleteModal({ type, title, onDeleteBtnClick, setIsDeleteModalOpen }) {
	return (
		//ModalContainer
		<div
			onClick={(e) => {
				if (e.target != e.currentTarget) {
					return;
				}
				setIsDeleteModalOpen(false);
			}}
			className="fixed bottom-0 right-0 top-0 left-0 px-2 py-4 overflow-scroll scrollbar-hide
	 				z-50 justify-center items-center flex bg-[#00000080]"
		>
			{/* Delete Modal */}
			<div className="scrollbar-hide overflow-y-scroll max-h-[95vh] max-w-md my-auto bg-white dark:bg-[#2b2c37] text-black dark:text-white w-full px-8 py-8 rounded-xl">
				<h3 className="font-bold text-red-500 text-xl">Delete this {type} ?</h3>
				{type === "task" ? (
					<p className="text-gray-500 font-semibold tracking-wide text-sm pt-6">
						Are you sure you want to delete the `{title}` task and its subtasks?
						This action cannot be undone.
					</p>
				) : (
					<p className="text-gray-500 font-semibold tracking-wide text-sm pt-6">
						Are you sure you want to delete the `{title}` board? This action
						will remove all columns and tasks and cannot be undone.
					</p>
				)}

				<div className="flex w-full mt-3 items-center justify-center space-x-4">
					<button
						onClick={onDeleteBtnClick}
						className="w-full items-center text-white hover:opacity-75 font-semibold bg-red-500 py-2 rounded-full"
					>
						Delete
					</button>
					<button
						onClick={() => setIsDeleteModalOpen}
						className="w-full items-center text-[#635fc7] hover:opacity-75 font-semibold bg-[#635fc71a] py-2 rounded-full"
					>
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
}

export default DeleteModal;
