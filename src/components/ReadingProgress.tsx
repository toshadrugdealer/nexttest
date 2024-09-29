'use client'
import { useReadingProgressBar } from '@/hooks/useReadingProgressBar'
import { Progress } from 'antd'
const ReadingProgress = () => {
	const completion = useReadingProgressBar()
	return (
		<div className='fixed w-full left-0 top-[54px]'>
			<Progress showInfo={false} percent={completion} strokeColor='#7b87f0' />
		</div>
	)
}
export default ReadingProgress
