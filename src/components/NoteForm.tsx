import React from "react";

export default function NoteForm() {
	return (
		<form id={"create_note_form"} action={"#"} className={"create_note"}>
			<label htmlFor={"create_note_name"}>Enter your note name</label>
			<input
				type={"text"}
				id={"create_note_name"}
				placeholder={"Type here..."}
				required
			/>
			<label htmlFor={"create_note_category"}>
				Choose a category of your note
			</label>
			<select
				name={"create_note_category"}
				id={"create_note_category"}
				value={"Task"}
			>
				<option value={"Task"}>Task</option>
				<option value={"Random thought"}>Random thought</option>
				<option value={"Idea"}>Idea</option>
				<option value={"Quote"}>Quote</option>
			</select>
			<label htmlFor={"create_note_content"}>
				Enter your note content here...
			</label>
			<input
				type={"textarea"}
				id={"create_note_content"}
				placeholder={"Type here..."}
				required
			/>
			<label htmlFor={"create_note_submit"}>
				If it`s all right, press submit button below
			</label>
			<input
				type={"submit"}
				id={"create_note_submit"}
				placeholder={""}
				value={"Create a note"}
			/>
		</form>
	);
}
