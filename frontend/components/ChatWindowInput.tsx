import { IoSend } from "react-icons/io5";

const ChatWindowInput = () => {
	return (
		<div className="p-5">
			<div className="relative flex w-full flex-wrap items-stretch mb-3">
				<input
					type="text"
					placeholder="Enter your message..."
					className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full pr-10"
				/>
				<span className="z-10 h-full leading-snug font-normal text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3 cursor-pointer ">
					{/* <i className="fas fa-user"></i> */}
					<IoSend color="#999999" className="hover:fill-gray-500" />
				</span>
			</div>
		</div>
	);
	return (
		<div className="p-6">
			<div className="relative flex w-full flex-wrap items-stretch mb-3">
				<input
					type="text"
					placeholder="Placeholder"
					className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"
				/>
				<span className="z-10 h-full leading-snug font-normal text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
					<IoSend color="#999999" />
				</span>
			</div>
		</div>
	);
};

export default ChatWindowInput;
