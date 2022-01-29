import { useRouter } from "next/router";
import { createContext, useContext } from "react";
import { UserContext } from "../Context/UserContext";
import ChatWindowHeader from "./ChatWindowHeader";
import ChatWindowInput from "./ChatWindowInput";
const conversation = {};

// const GlobalContext = createContext();

const ChatWindow = () => {
	const Router = useRouter();
	const what = useContext(UserContext);
	if (what == undefined) {
		Router.push("/auth");
	}
	console.log(what);
	return (
		<div
			className="bg-white w-3/5 ml-14 flex flex-col justify-between rounded-lg"
			style={{ height: "40rem" }}
		>
			<ChatWindowHeader name="Saharsh Samir" />
			<ChatWindowInput />
		</div>
	);
};

export default ChatWindow;
