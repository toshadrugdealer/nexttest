import Link from 'next/link'

const Aboba = () => {
	return (
		<div className='mt-[70px] p-3 flex flex-col items-center'>
			aboba
			<Link href={'/todos'}>Назад</Link>
		</div>
	)
}
export default Aboba
