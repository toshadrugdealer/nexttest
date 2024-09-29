import Link from 'next/link'

const notFound = () => {
	return (
		<div className='w-full h-screen flex flex-col items-center justify-center'>
			<p>not found page</p>
			<Link href={'/'}>go home</Link>
		</div>
	)
}
export default notFound
