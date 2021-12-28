import { profile } from "console";
import { NextComponentType } from "next";
import React, { Fragment } from "react";
import * as Profile from "./Profile";

const contacts = [
	{
		username: "Person Name",
		profile: Profile.BlueDp,
		lastMessage: "Haha! same",
	},
	{
		username: "Person Name",
		profile: Profile.BlueDp,
		lastMessage: "Haha! same",
	},
	{
		username: "Person Name",
		profile: Profile.BlueDp,
		lastMessage: "Haha! same",
	},
	{
		username: "Person Name",
		profile: Profile.BlueDp,
		lastMessage: "Haha! same",
	},
	{
		username: "Person Name",
		profile: Profile.BlueDp,
		lastMessage: "Haha! same",
	},
	{
		username: "Person Name",
		profile: Profile.BlueDp,
		lastMessage: "Haha! same",
	},
	{
		username: "Person Name",
		profile: Profile.BlueDp,
		lastMessage: "Haha! same",
	},
	{
		username: "Person Name",
		profile: Profile.BlueDp,
		lastMessage: "Haha! same",
	},
	{
		username: "Person Name",
		profile: Profile.BlueDp,
		lastMessage: "Haha! same",
	},
];

const Sidebar: NextComponentType = () => {
	const renderContacts = () => {
		return contacts.map((contact) => (
			<div className="border-y flex p-4 cursor-pointer hover:bg-[#E7E9FE]">
				<div>{contact.profile}</div>
				<div className="flex-col">
					<p className="text-xl font-semibold">{contact.username}</p>
					<p className="text-gray-400 text-sm">{contact.lastMessage}</p>
				</div>
			</div>
		));
	};
	const renderSearchbar = () => {
		return (
			<div className="p-3">
				<input
					className="bg-gray-200 rounded-lg p-2 w-full"
					placeholder="Search.."
				/>
			</div>
		);
	};

	return (
		<Fragment>
			<div
				className="rounded-lg w-96 ml-4 bg-white overflow-y-scroll shadow-[-1px_-62px_30px_-50px_rgb(158,158,158)_inset]"
				style={{ height: "40rem" }}
			>
				{renderSearchbar()}
				{renderContacts()}
			</div>
		</Fragment>
	);
};

export default Sidebar;
