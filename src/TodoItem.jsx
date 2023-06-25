/* eslint-disable react/prop-types */
export default function TodoItem({ toggleTodos, deleteTodos, todo }) {
	return (
		<li>
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
}