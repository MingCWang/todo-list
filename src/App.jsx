import { useState } from "react";

export default function App() {

	const [item, setNewItem] = useState("");
	const [todoItem, setTodoItem] = useState([]);

	function handelSubmit(e) {
		e.preventDefault();
		setTodoItem((currentToDo) => {
			return [
				...currentToDo,
				{ id: crypto.randomUUID(), title: item, completed: false }
			];
		});
		setNewItem("");
		console.log(todoItem)
	}

	function toggleTodos(id, checked) {
		setTodoItem(currentToDo => {
			return currentToDo.map(
				todo => todo.id === id ? { ...todo, completed: checked } : todo
			)
		})
	}

	function deleteTodos(id) {
		setTodoItem(currentToDo => {
			return currentToDo.filter(todo => todo.id !== id)
		})
	}
	return (
		<>
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
			<h1 className="header">To Do List</h1>
			<ul className="list">
				{todoItem.map(todo => {
					return (
						<li key={todo.id}>
							<label>
								<input
									type="checkbox"
									checked={todo.completed}
									onChange={e => toggleTodos(todo.id, e.target.checked)}
								/>
								{todo.title}
							</label>

							<button className="btn btn-danger" onClick={() => deleteTodos(todo.id)}>Delete</button>
						</li>
					)
				})}
			</ul>
		</>
	);
}
