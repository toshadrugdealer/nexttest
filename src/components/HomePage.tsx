import { Posts } from '@/app/page'
import ReadingProgress from './ReadingProgress'

const HomePage = ({ data }: { data: Posts }) => {
	return (
		<main className='mt-12 p-3'>
			<ReadingProgress />
			<section className='grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3'>
				{data.posts.map(post => (
					<article
						key={post.id}
						className='flex flex-col items-center justify-center'
					>
						<h2 className='my-4 text-2xl'>{post.title}</h2>
						<p>{post.body}</p>
					</article>
				))}
			</section>
		</main>
	)
}

export default HomePage
