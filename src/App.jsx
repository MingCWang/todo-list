import { useState, useEffect } from "react";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";
export default function App() {


	const [todoItems, setTodoItems] = useState(() => {
		const saved = localStorage.getItem("ITEMS");
		if (saved == null) return []
		console.log(saved)
		return JSON.parse(saved)
	});


	useEffect(() => {
		localStorage.setItem(
			"ITEMS", JSON.stringify(todoItems)
		)
	}, [todoItems])
	function addTodos(item) {
		setTodoItems((currentToDo) => {
			return [
				...currentToDo,
				{ id: crypto.randomUUID(), title: item, completed: false }
			];
		});
	}

	function toggleTodos(id, checked) {
		setTodoItems(currentToDo => {
			return currentToDo.map(
				todo => todo.id === id ? { ...todo, completed: checked } : todo
			)
		})
	}

	function deleteTodos(id) {
		setTodoItems(currentToDo => {
			return currentToDo.filter(todo => todo.id !== id)
		})
	}
	return (
		<>
			<NewTodoForm addTodos={addTodos} />
			<h1 className="header">To Do List</h1>
			<TodoList todoItems={todoItems} deleteTodos={deleteTodos} toggleTodos={toggleTodos} />
		</>
	);
}
