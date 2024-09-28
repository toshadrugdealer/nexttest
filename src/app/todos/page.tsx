interface Todos {
	todos: Todo[]
}
interface Todo {
	id: number
	todo: string
	completed: boolean
	userId: number
}
async function getTodos(): Promise<Todos> {
	const res = await fetch('https://dummyjson.com/todos')
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}
	return res.json()
}
export default async function Todos() {
	const todos = await getTodos()
	return (
		<div className='mt-[70px] p-3 flex flex-col items-center'>
			<section>
				{todos.todos.map(todo => (
					<article className='flex flex-row gap-2 justify-center' key={todo.id}>
						<p>{todo.todo}</p>
						<p>{String(todo.completed)}</p>
					</article>
				))}
			</section>
		</div>
	)
}
