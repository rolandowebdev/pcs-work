import { cn } from '@/lib'

type NavbarProps = {
	children: React.ReactNode
	className?: string
}

export const Navbar = ({ children, className }: NavbarProps) => {
	return (
		<nav
			className={cn(
				'flex items-center w-full max-w-lg px-4 sm:px-0 mx-auto h-16 sticky inset-x-0 top-0 z-30 bg-white/75 backdrop-blur-lg transition-all duration-300',
				className
			)}>
			{children}
		</nav>
	)
}
