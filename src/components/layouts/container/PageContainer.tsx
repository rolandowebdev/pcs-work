import { cn } from '@/lib'

type PageContainerProps = {
	children: React.ReactNode
	className?: string
}

export const PageContainer = ({ children, className }: PageContainerProps) => {
	return (
		<main
			className={cn(
				'mx-auto mt-8 mb-28 w-full max-w-lg px-4 sm:px-0',
				className
			)}>
			{children}
		</main>
	)
}
