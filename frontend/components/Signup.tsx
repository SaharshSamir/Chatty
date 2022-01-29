import { useFormik } from "formik";
import TextInput from "./TextInput";
import {
	SignUpMutationVariables,
	SignUpMutation,
	useSignUpMutation,
} from "../__generated__/graphql";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { SIGN_UP } from "../graphql/mutations/signUp";
import { load } from "webfontloader";

interface IformValues {
	username: string;
	email: string;
	password: string;
}

const Signup = (props) => {
	// const [username, setUsernmame] = useState("");
	// const [email, setEmail] = useState("");
	// const [password, setPassword] = useState("");
	const [formValues, setFormValues] = useState({} as IformValues);
	// const [mutateFunction, {data, loading, error}] = useMutation<
	// 	SignUpMutation,
	// 	SignUpMutationVariables
	// >(SIGN_UP, {
	// 	variables: {
	// 		email: formValues.email,
	// 		password: formValues.password,
	// 		username: formValues.username,
	// 	},
	// });
	// const [signUp, {loading, error, data}] = useMutation<SignUpMutation>(SIGN_UP);
	// const [signUp, { loading, error, data }] = useMutation<
	// 	SignUpMutation,
	// 	SignUpMutationVariables
	// >(SIGN_UP);

	const [signUp, { data, loading, error }] = useSignUpMutation();

	console.log(`from useQuery: ${JSON.stringify(data)}`);
	const formik = useFormik({
		initialValues: {
			username: "",
			email: "",
			password: "",
		},
		onSubmit: (values) => {
			signUp({
				variables: {
					email: values.email,
					password: values.password,
					username: values.password,
				},
			});
			console.log(values);
		},
	});

	const handleClick = (e) => {
		props.setIsLogin(true);
	};
	if (loading) {
		return <p>loading...</p>;
	}
	if (error) {
		return <p>There seems to be an error: {error}</p>;
	}
	if (data) {
		const token = data.signUp || "";
		localStorage.setItem("auth_token", token);
	}

	return (
		<div className="p-9 flex flex-col justify-center justify-items-center items-center content-center align-middle rounded-lg shadow-[0_0px_50px_-3px_rgba(0,0,0,0.3)] w-2/6 self-center">
			<p className="text-4xl font-bold text-center w-full mb-8">
				Create An Account
			</p>
			<form
				onSubmit={formik.handleSubmit}
				className="flex flex-col justify-center justify-items-center items-center content-center align-middle"
			>
				<TextInput
					id="username"
					name="username"
					label="Username"
					placeholder="Elon Musk"
					onChange={formik.handleChange}
					value={formik.values.username}
				/>
				<TextInput
					id="email"
					name="email"
					label="Email"
					placeholder="elon@musk.com"
					onChange={formik.handleChange}
					value={formik.values.email}
				/>
				<TextInput
					id="password"
					name="password"
					label="password"
					placeholder="iLoveMars123"
					onChange={formik.handleChange}
					value={formik.values.password}
				/>
				<button className="bg-[#6770C1] m p-2 rounded-md text-white">
					submit
				</button>
				<p>
					Already have an account?{" "}
					<span onClick={handleClick} className="text-blue-500 cursor-pointer">
						Login
					</span>
				</p>
			</form>
		</div>
	);
};

export default Signup;
