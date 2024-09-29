import { ITodos } from '@/app/todos/page'
import Link from 'next/link'

const TodosPage = ({ todos }: { todos: ITodos }) => {
	return (
		<div className='mt-[70px] p-3 flex flex-col items-center'>
			<Link href={'/todos/aboba'}>aboba</Link>
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
export default TodosPage
