import Link from 'next/link'

export function SimpleHeader() {
	return (
		<header className='bg-gray-900 py-4 fixed w-full top-0'>
			<div className='mx-auto px-4'>
				<nav className='flex items-center justify-between'>
					<Link href='/'>
						<div className='text-white text-2xl font-bold'>Your logo</div>
					</Link>

					<ul className='flex space-x-4'>
						<Link className='text-white hover:text-blue-300' href='/'>
							Home
						</Link>

						<Link className='text-white hover:text-blue-300' href='/todos'>
							Todos
						</Link>
						<Link className='text-white hover:text-blue-300' href='/about'>
							About
						</Link>
						<Link className='text-white hover:text-blue-300' href='/services'>
							Services
						</Link>
					</ul>
				</nav>
			</div>
		</header>
	)
}
