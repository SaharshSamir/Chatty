import { NextPage } from "next";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import ChatWindow from "../../components/ChatWindow";

const Home: NextPage = () => {
	return (
		<html>
			<body className="h-full bg-gray-200">
				<Navbar />
				<div id="content" className="mt-8 flex">
					<div className="w-full">
						<Sidebar />
					</div>
					<ChatWindow />
				</div>
			</body>
		</html>
	);
};

export default Home;
