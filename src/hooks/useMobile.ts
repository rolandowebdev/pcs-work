import { useLayoutEffect, useState } from 'react'

export const useMobile = () => {
	const [isMobile, setIsMobile] = useState(
		typeof window !== 'undefined' ? window.innerWidth < 640 : false
	)

	useLayoutEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		let resizeTimer: any

		const updateSize = () => {
			clearTimeout(resizeTimer)
			resizeTimer = setTimeout(() => {
				setIsMobile(window.innerWidth < 768)
			}, 250)
		}

		window.addEventListener('resize', updateSize)

		return () => {
			window.removeEventListener('resize', updateSize)
		}
	}, [])

	return { isMobile }
}
