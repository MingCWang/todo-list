import { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";
export default function App() {


	const [todoItem, setTodoItem] = useState([]);

	function addTodos(item) {
		setTodoItem((currentToDo) => {
			return [
				...currentToDo,
				{ id: crypto.randomUUID(), title: item, completed: false }
			];
		});
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
			<NewTodoForm addTodos={addTodos} />
			<h1 className="header">To Do List</h1>
			<TodoList />
		</>
	);
}
