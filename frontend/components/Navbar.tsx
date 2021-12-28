import { NextComponentType } from "next";
import { ReactNode, ReactChild, ReactElement, useEffect } from "react";
import { NextPage } from "next";
import styled from "styled-components";
import { BsDoorOpenFill, BsBellFill } from "react-icons/bs";
import { GreenDp } from "./Profile";
// import WebFont from "webfontloader";

const Navbar: NextComponentType = () => {
	// useEffect(() => {
	// 	(async () => {
	// 		const WebFont = await import("webfontloader");
	// 		WebFont.load({
	// 			google: {
	// 				families: ["Yellowtail"],
	// 			},
	// 		});
	// 	})();
	// }, [])
	const isAuth = false;

	const renderAuthedContent = () => {
		return (
			<div className="flex mt-2">
				<div className="mr-8 cursor-pointer">
					<BsBellFill color="#6770C1" size={"1.5rem"} />
				</div>
				<div className="mx-4 cursor-pointer">
					<BsDoorOpenFill color="#6770C1" size={"1.5rem"} />
				</div>
				<div className="ml-8 flex">
					<p className="text-xl">Saharsh Samir</p>
					<p className="mx-1"> ⏐ </p>
					<div className="cursor-pointer">
						<GreenDp size="1.7rem" />
					</div>
				</div>
			</div>
		);
	};
	const renderUnAuthedContent = () => {
		return (
			<button className="p-5 bg-blue-400 from-neutral-50">
				<a href="localhost:8000/auth/google">Login with Google</a>
			</button>
		);
	};
	return (
		<div className="px-7 py-4 w-full h-fit flex justify-between">
			<div>
				<Logo className="text-7xl">Chatty</Logo>
			</div>
			{isAuth ? renderAuthedContent() : renderUnAuthedContent()}
		</div>
	);
	// return (
	// 	<div className="px-7 py-4 w-full h-fit flex justify-between">
	// 		<div>
	// 			<Logo className="text-7xl">Chatty</Logo>
	// 		</div>
	// 		<div className="flex mt-2">
	// 			<div className="mr-8 cursor-pointer">
	// 				<BsBellFill color="#6770C1" size={"1.5rem"} />
	// 			</div>
	// 			<div className="mx-4 cursor-pointer">
	// 				<BsDoorOpenFill color="#6770C1" size={"1.5rem"} />
	// 			</div>
	// 			<div className="ml-8 flex">
	// 				<p className="text-xl">Saharsh Samir</p>
	// 				<p className="mx-1"> ⏐ </p>
	// 				<div className="cursor-pointer">
	// 					<GreenDp size="1.7rem" />
	// 				</div>
	// 			</div>
	// 		</div>
	// 	</div>
	// );
};

const Logo = styled.p`
	/* font-family: "Yellowtail"; */
	font-size: 2.8rem;
`;

export default Navbar;
