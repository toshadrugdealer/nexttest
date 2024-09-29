'use client'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const SimpleHeader = () => {
	const path = usePathname()
	return (
		<header className='bg-gray-900 py-4 fixed w-full top-0'>
			<div className='mx-auto px-4'>
				<nav className='flex items-center justify-between'>
					<Link href='/'>
						<div className='text-white text-2xl font-bold'>Your logo</div>
					</Link>

					<ul className='flex space-x-4'>
						<Link
							className={clsx(
								'text-white hover:text-blue-300' +
									(path === '/' ? ' text-blue-400' : '')
							)}
							href='/'
						>
							Home
						</Link>

						<Link
							className={clsx(
								'text-white hover:text-blue-300' +
									(path === '/todos' ? ' text-blue-400' : '')
							)}
							href='/todos'
						>
							Todos
						</Link>
						<Link
							className={clsx(
								'text-white hover:text-blue-300' +
									(path === '/about' ? ' text-blue-400' : '')
							)}
							href='/about'
						>
							About
						</Link>
						<Link
							className={clsx(
								'text-white hover:text-blue-300' +
									(path === '/services' ? ' text-blue-400' : '')
							)}
							href='/services'
						>
							Services
						</Link>
					</ul>
				</nav>
			</div>
		</header>
	)
}
export default SimpleHeader
