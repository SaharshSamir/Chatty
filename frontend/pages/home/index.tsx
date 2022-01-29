import { NextPage } from "next";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import ChatWindow from "../../components/ChatWindow";

const Home: NextPage = () => {
	return (
		<html className="h-screen">
			<body className="h-full bg-gray-200">
				<Navbar />
				<div className="flex">
					<Sidebar />
					<ChatWindow />
				</div>
			</body>
		</html>
	);
};

export default Home;
