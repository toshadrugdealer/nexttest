import Loading from '@/components/Loading'
import dynamic from 'next/dynamic'

const TodosPage = dynamic(() => import('./../../components/TodosPage'), {
	loading: () => <Loading />,
	ssr: true
})

export interface ITodos {
	todos: ITodo[]
}
interface ITodo {
	id: number
	todo: string
	completed: boolean
	userId: number
}
async function getTodos(): Promise<ITodos> {
	const res = await fetch('https://dummyjson.com/todos', {
		next: { revalidate: 60 }
	})
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}
	return res.json()
}
const Todos = async () => {
	const todos = await getTodos()
	return <TodosPage todos={todos} />
}
export default Todos
