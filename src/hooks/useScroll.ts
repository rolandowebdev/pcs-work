import { useEffect, useState } from 'react'

export const useScroll = () => {
	const [isScrolled, setIsScrolled] = useState(false)

	const handleScroll = () => {
		window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false)
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return { isScrolled }
}
