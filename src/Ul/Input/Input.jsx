import "./Input.css";
export const Input = ({ type, style, el, placeholder,  }) => {
	return (
		<input
			className={style}
			type={type}
			placeholder={placeholder}
			ref={el}
		/>
	);
};
