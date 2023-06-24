import { useState } from "react";
import PropTypes from "prop-types";

NewTodoForm.propTypes = {
	addTodos: PropTypes.func.isRequired
}

export default function NewTodoForm({ addTodos }) {

	const [item, setNewItem] = useState("");

	function handelSubmit(e) {
		e.preventDefault();
		addTodos(item);
		setNewItem("");
	}

	return (
		<form className="new-item-form" onSubmit={handelSubmit}>
			<div className="form-row">
				<label htmlFor="item">New Item</label>
				<input
					value={item}
					onChange={e => setNewItem(e.target.value)}
					type="text"
					id="item"
				/>
			</div>
			<button className="btn">Add</button>
		</form>
	)
}