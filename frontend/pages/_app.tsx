import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { UserProvider } from "../Context/UserContext";
// import { AppContext, AppInitialProps, AppLayoutProps } from "next/app";
// import type { NextComponentType } from "next";
// import { ReactNode } from "react";
// import "tailwindcss/tailwind.css";
// import "../styles/globals.css";

// const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
// 	Component,
// 	pageProps,
// }: AppLayoutProps) => {
// 	const getLayout = Component.getLayout || ((page: ReactNode) => page);
// 	return getLayout(<Component {...pageProps} />);
// };

// export default MyApp;

const httpLink = createHttpLink({
	uri: "http://localhost:8000/graphql",
});

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem("auth_token");
	console.log("running");
	return {
		headers: {
			...headers,
			Huthorization: token ? `Bearer ${token}` : "",
		},
	};
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={client}>
			<UserProvider>
				<Component {...pageProps} />
			</UserProvider>
		</ApolloProvider>
	);
}

export default MyApp;
