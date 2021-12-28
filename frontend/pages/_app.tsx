import { AppContext, AppInitialProps, AppLayoutProps } from "next/app";
import type { NextComponentType } from "next";
import { ReactNode } from "react";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";

const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
	Component,
	pageProps,
}: AppLayoutProps) => {
	const getLayout = Component.getLayout || ((page: ReactNode) => page);
	return getLayout(<Component {...pageProps} />);
};

export default MyApp;

// import "../styles/globals.css";
// import "tailwindcss/tailwind.css";
// import type { AppProps } from "next/app";

// function MyApp({ Component, pageProps }: AppProps) {
// 	return <Component {...pageProps} />;
// }

// export default MyApp;
