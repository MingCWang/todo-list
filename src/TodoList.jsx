export default function TodoList() {
	return (
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
	)

}