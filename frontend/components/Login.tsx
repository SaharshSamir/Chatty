import { useRouter } from "next/router";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";
import { useLoginQuery, LoginQueryVariables } from "../__generated__/graphql";
import TextInput from "./TextInput";

// interface Props {
// 	isLogin: boolean;
// 	(isLogin: boolean): boolean;
// }

interface FormValues {
	email: string;
	password: string;
}

const Login = (props) => {
	const [_user, setUser] = useContext(UserContext) ?? [];
	const [isAuth, setIsAuth] = useState<boolean>(false);
	const [formValues, setFormValues] = useState<FormValues>({} as FormValues);
	const [runLogin, setRunLogin] = useState<boolean>(false);

	const Router = useRouter();

	const { data, loading, error, client } = useLoginQuery({
		variables: {
			email: formValues.email,
			password: formValues.password,
		},
		skip: !runLogin,
	});
	if (data) {
		console.log(`token: ${data}`);
		const token = data?.login || "";
		localStorage.setItem("auth_token", token);
		Router.push("/home");
		client.resetStore();
	}

	const loginUser = (values: FormValues) => {
		setFormValues(values);
		setRunLogin(true);
	};

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		onSubmit: (values) => {
			console.log("in onSubmit");
			loginUser(values);
		},
	});

	const handleClick = (e) => {
		props.setIsLogin(false);
	};

	return (
		<div className="p-9 flex flex-col justify-center justify-items-center items-center content-center align-middle rounded-lg shadow-[0_0px_50px_-3px_rgba(0,0,0,0.3)] w-2/6 self-center">
			<p className="text-4xl font-bold text-center w-full mb-8">Sign In</p>
			<form
				onSubmit={formik.handleSubmit}
				className="flex flex-col justify-center justify-items-center items-center content-center align-middle"
			>
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
					label="Password"
					placeholder="iLoveMars123"
					onChange={formik.handleChange}
					value={formik.values.password}
					type="password"
				/>
				<button
					type="submit"
					className="bg-[#6770C1] m p-2 rounded-md text-white"
				>
					submit
				</button>
				<p>
					Don't have an account?{" "}
					<span onClick={handleClick} className="text-blue-500 cursor-pointer">
						Sign Up
					</span>
				</p>
			</form>
		</div>
	);
};

export default Login;
