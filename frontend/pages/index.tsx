import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import { useRouter } from "next/router";
// import { Html } from "next/document";
// import ChattyLogoWhite from "../public/ChattyLogoWhite.svg";
import AuthModal from "../components/AuthModal";
import {} from "../__generated__/graphql";

const Landing: NextPage = () => {
	// const [showModal, setShowModal] = useState(false);
	// const { data } = useGetMessageQuery();
	// console.log(data);
	const Router = useRouter();
	return (
		<Fragment>
			<Head>
				{/* Yellowtail font */}
				<link rel="preconnect" href="https://fonts.googleapis.com"></link>
				<link rel="preconnect" href="https://fonts.gstatic.com"></link>
				<link
					href="https://fonts.googleapis.com/css2?family=Yellowtail&display=swap"
					rel="stylesheet"
				></link>

				{/* DM sans font */}
				<link rel="preconnect" href="https://fonts.googleapis.com"></link>
				<link rel="preconnect" href="https://fonts.gstatic.com"></link>
				<link
					href="https://fonts.googleapis.com/css2?family=Yellowtail&display=swap"
					rel="stylesheet"
				></link>
			</Head>
			<div className="h-screen w-full bg-[#6770C1] flex justify-center justify-items-center items-center content-center align-middle">
				<div
					id="content"
					className="mb-32 flex flex-col items-center justify-items-center"
				>
					<div id="Logo" className="mb-8">
						<Image
							src="/../public/ChattyLogoWhite.svg"
							height={100}
							width={100}
						></Image>
					</div>
					<div id="Title">
						<p
							className="text-zinc-100 text-9xl"
							style={{ fontFamily: "Yellowtail" }}
						>
							Chatty
						</p>
					</div>
					<div
						id="Description"
						className="mt-8 flex items-center justify-items-center text-center"
					>
						<p
							className="text-3xl font-light text-zinc-100"
							style={{ fontFamily: "DM Sans" }}
						>
							A cute, fun way to keep up with your <br />
							friends over the internet
						</p>
					</div>
					<div
						className="rounded-lg p-2 px-4 mt-11 text-zinc-100 bg-red-400 hover:bg-red-300"
						style={{ fontFamily: "DM Sans" }}
					>
						<button
							type="button"
							data-modal-toggle="auth-modal"
							onClick={() => Router.push("/auth")}
						>
							<p className="text-2xl">Get Started</p>
						</button>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Landing;
