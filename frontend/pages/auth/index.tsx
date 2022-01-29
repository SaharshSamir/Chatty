import Signup from "../../components/Signup";
import Login from "../../components/Login";
import { useEffect, useState } from "react";
import { NextPage } from "next";

const Auth: NextPage = () => {
	const [isLogin, setIsLogin] = useState(true);

	const returnLogin = () => <Login isLogin setIsLogin={setIsLogin} />;
	const returnSignup = () => <Signup isLogin setIsLogin={setIsLogin} />;

	useEffect(() => {}, [isLogin]);

	return (
		<div className="h-screen w-full flex justify-center justify-items-center items-center content-center align-middle">
			{isLogin ? returnLogin() : returnSignup()}
		</div>
	);
};

export default Auth;
