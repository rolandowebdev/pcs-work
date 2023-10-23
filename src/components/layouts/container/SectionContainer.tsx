type SectionContainerProps = {
	title: string
	children: React.ReactNode
}

export const SectionContainer = ({
	title,
	children
}: SectionContainerProps) => {
	return (
		<section className='flex flex-col gap-3'>
			<h2 className='text-lg font-semibold'>{title}</h2>
			{children}
		</section>
	)
}
