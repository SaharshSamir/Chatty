import { GreenDp } from "./Profile";

interface Props {
	name: string;
}

const ChatWindowHeader = (props: Props) => {
	return (
		<div className="border-b  flex p-3">
			<div className="mr-4 w-fit">{GreenDp({ size: "40px" })}</div>
			{/* {GreenDp({ size: "40px" })} */}
			<p className="self-center ml-5 font-sans text-xl">{props.name}</p>
		</div>
	);
};

export default ChatWindowHeader;
