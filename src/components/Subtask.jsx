import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Subtask({ index, taskIndex, colIndex }) {
	const dispatch = useDispatch();
	const boards = useSelector((state) => state.boards);
	const board = boards.find((board) => board.isActive);
	const columns = board.columns;
	const col = columns.find((column, i) => colIndex === i);
	const task = col.tasks.find((col, i) => taskIndex === i);
	const subtasks = task.subtasks.find((subtask, i) => i === index);
	const checked = subtasks.isCompleted;

	return (
		<div>
			<input
				type="checkbox"
				className="w-4 h-4 accent-[#635fc7]"
				checked={checked}
			/>
			<p className={checked && "line-through opacity-30"}>{subtask[0]}</p>
		</div>
	);
}

export default Subtask;
