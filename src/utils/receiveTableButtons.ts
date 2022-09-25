import React from "react";
import Button from "../components/Button";

const tableButtons = {
	edit: {
		className: "btn-edit",
		icon: "pencil",
	},
	archive: {
		className: "btn-archive",
		icon: "archive",
	},
	delete: {
		className: "btn-delete",
		icon: "trash",
	},
};

let buttonEntity = Button;

export default function receiveTableButtons(arr: string[]) {
	let result: React.ReactNode[] = [];

	arr.forEach((el) => {
		if (el in tableButtons) {
			let props: {} = {};
			switch (el) {
				case "edit":
					props = tableButtons.edit;
					break;
				case "archive":
					props = tableButtons.archive;
					break;
				case "delete":
					props = tableButtons.delete;
					break;
				default:
					break;
			}
			let button = buttonEntity(props);
			result.push(button);
		} else return false;
	});

	return result;
}
