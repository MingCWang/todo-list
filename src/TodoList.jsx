/* eslint-disable react/prop-types */

import TodoItem from "./TodoItem";

export default function TodoList({ todoItems, toggleTodos, deleteTodos }) {
	return (
		<ul className="list">
			{todoItems.map(todo => {
				return (
					<TodoItem key={todo.id} toggleTodos={toggleTodos} deleteTodos={deleteTodos} todo={todo} />
				)
			})}
		</ul>
	)

}