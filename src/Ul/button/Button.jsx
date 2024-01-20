import "./Button.css";

export const Button = ({ text, style, type, onClick  }) => {
	return (
		<button onClick={onClick} type={type} className={style}>
			{text}
		</button>
	);
};
