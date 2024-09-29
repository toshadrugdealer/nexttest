import Link from 'next/link'

export default function notFound() {
	return (
		<div className='mt-20 flex items-center flex-col'>
			<p>not found page</p>
			<Link href={'/'}>go home</Link>
		</div>
	)
}
