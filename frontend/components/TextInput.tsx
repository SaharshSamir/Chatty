import { ChangeEvent } from "react";

interface Props {
	id: string;
	name: string;
	label: string;
	placeholder: string;
	type?: string;
	value?: string;
	onChange?: any;
}

const TextInput = (props: Props) => {
	const { label, placeholder, id, name, type, value, onChange } = props;
	return (
		<div className="my-1 w-full">
			<p>{label}</p>
			<input
				className="p-2 rounded-lg w-full border-2"
				id={id}
				name={name}
				type={type}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
			></input>
		</div>
	);
};

export default TextInput;
