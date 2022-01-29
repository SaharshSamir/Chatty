import { createContext, Dispatch, SetStateAction, useState } from "react";
import {
	MeQueryResult,
	useMeQuery,
	MeQueryHookResult,
	MeQuery,
} from "../__generated__/graphql";

type UserContextShape = MeQuery | undefined;

// interface ContextValueShape {
//     user: UserContextShape;
//     setUser: Dispatch<SetStateAction<UserContextShape>>;
// }

type ContextValueShape =
	| (UserContextShape | Dispatch<SetStateAction<UserContextShape>>)[]
	| [];

export const UserContext = createContext<ContextValueShape | undefined>(
	undefined
);

export const UserProvider = (props) => {
	const defaultUserValue: UserContextShape = undefined;
	const [user, setUser] = useState<UserContextShape>(undefined);
	const { data, loading, error } = useMeQuery();
	console.log(typeof data);
	if (data?.me) {
		setUser(data);
	}
	const test = [user, setUser];
	type testt = typeof test;
	return (
		<UserContext.Provider value={[user, setUser]}>
			{props.children}
		</UserContext.Provider>
	);
};
