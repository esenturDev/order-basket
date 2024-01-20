
import { Button } from "../../Ul/button/Button";
import { Expense } from "../Expense/Expense";
import "./ExpenseList.css";
import { useState } from "react";

export const ExpenseList = ({ expenses, setExpenses }) => {
	const [state, setState] = useState("");
	const removeCard = (id) => {
		const deleteCard = [...expenses, state];
		deleteCard.splice(id);	
		setExpenses(deleteCard);
	};
	return (
		<div className="listContainer">
			{expenses.map(({ name, photo, gh, id }) => {
				return (
					<Expense
						key={id}
						name={name}
						photo={photo}
						gh={gh}
					/>
				);
			})}
			<Button style='delete' onClick={removeCard} text='Удалить все'/>
		</div>
	);
};
