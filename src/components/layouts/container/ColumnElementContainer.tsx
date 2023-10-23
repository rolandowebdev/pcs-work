import { cn } from '@/lib'

type ColumnElementContainerProps = {
	children: React.ReactNode
	className?: string
}

export const ColumnElementContainer = ({
	children,
	className
}: ColumnElementContainerProps) => {
	return <div className={cn('flex flex-col', className)}>{children}</div>
}
