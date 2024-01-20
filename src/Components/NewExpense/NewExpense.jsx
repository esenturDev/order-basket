import { useRef } from "react";
import { Input } from "../../Ul/Input/Input";
import { Button } from "../../Ul/button/Button";
import "./NewExpense.css";

export const NewExpense = ({ expenses, setExpenses }) => {
	const expenseName = useRef(null);
	const expensePhoto = useRef(null);
	const expenseG = useRef(null);
	function valueInputsRender() {
		const NewExpenseObj = {
			name: expenseName.current.value,
			photo: expensePhoto.current.value,
			gh: expenseG.current.value,
			id: Math.random(),
		};
		setExpenses([...expenses, NewExpenseObj]);
		expenseName.current.value = ""
		expensePhoto.current.value = ""
		expenseG.current.value = ""
	}
	return (
		<div className="form"
			>
			<Input
				text="name"
				type="text"
				style="inputs"
				placeholder="название кино"
				el={expenseName}
			/>
			<Input
				text="photo is url"
				type="url"
				style="inputs"
				placeholder="Photos is url"
				el={expensePhoto}
				
			/>
			<Input
				text="G"
				type="text"
				style="inputs"
				placeholder="название жанры"
				el={expenseG}
				
			/>
			<Button style='add' onClick={valueInputsRender} text="Add" />
		</div>
	);
};

// Почему данные здесь не выводятся в console.log()?
