import dynamic from 'next/dynamic'
import Loading from '@/components/Loading'

const HomePage = dynamic(() => import('./../components/HomePage'), {
	loading: () => <Loading />,
	ssr: true
})

interface Post {
	id: number
	title: string
	body: string
	reactions: number
	tags: string[]
	views: number
	userId: number
}

export interface Posts {
	posts: Post[]
	total: number
	skip: number
	limit: number
}

async function getPosts(): Promise<Posts> {
	const res = await fetch('https://dummyjson.com/posts', {
		next: { revalidate: 60 }
	})
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}
	return res.json()
}

const Home = async () => {
	const data = await getPosts()

	return <HomePage data={data} />
}

export default Home
