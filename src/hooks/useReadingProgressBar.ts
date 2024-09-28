import { useEffect, useState } from 'react'

export const useReadingProgressBar = () => {
	const [completion, setCompletion] = useState(0)
	useEffect(() => {
		const updateScrollCompletion = () => {
			const actualPosition = window.scrollY
			const scrollHeight = document.body.scrollHeight - window.innerHeight
			const persentage = (actualPosition / scrollHeight) * 100
			setCompletion(persentage)
		}
		window.addEventListener('scroll', updateScrollCompletion)
		return () => {
			window.removeEventListener('scroll', updateScrollCompletion)
		}
	}, [])
	return completion
}
