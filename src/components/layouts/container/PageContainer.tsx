import { cn } from '@/lib'

type PageContainerProps = {
	children: React.ReactNode
	className?: string
}

export const PageContainer = ({ children, className }: PageContainerProps) => {
	return (
		<main
			className={cn(
				'mx-auto mt-4 mb-14 lg:mb-12 w-full max-w-lg px-4 sm:px-0',
				className
			)}>
			{children}
		</main>
	)
}
