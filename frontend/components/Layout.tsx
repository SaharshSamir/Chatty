import Navbar from "./Navbar";
import { NextComponentType, NextPage } from "next";
import { Fragment, ReactChildren } from "react";

const Layout = ({ children }: { children: ReactChildren | NextPage }) => {
	return (
		<Fragment>
			<Navbar />
			{children}
		</Fragment>
	);
};
