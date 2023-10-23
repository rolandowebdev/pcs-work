import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
	Navbar,
	Badge,
	PageContainer,
	buttonVariants
} from '@/components'
import { listNotification } from '@/data'
import { useScroll } from '@/hooks'
import { cn, formatDate } from '@/lib'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export const Notification = () => {
	const { isScrolled } = useScroll()

	return (
		<>
			<Navbar
				className={cn('gap-2 rounded-b-md', isScrolled ? 'shadow-sm' : '')}>
				<Link to='/' className={buttonVariants({ variant: 'ghost' })}>
					<ArrowLeft size={24} />
				</Link>
				<h1 className='text-rose-600 font-bold text-2xl tracking-wide'>
					Notification
				</h1>
			</Navbar>

			<PageContainer className='flex flex-col gap-3 mb-8'>
				{listNotification.map((notification) => (
					<Card
						key={notification.id}
						className='flex items-start gap-3 p-4 shadow-md cursor-default transition-all duration-300 hover:bg-gray-100'>
						<CardHeader>
							<Card className='bg-gradient-to-tl from-fuchsia-600 to-red-600 text-white p-4'>
								{notification.icon}
							</Card>
						</CardHeader>

						<CardContent className='flex flex-col gap-1 '>
							<CardTitle className='text-base'>{notification.status}</CardTitle>
							<CardDescription className='text-xs text-gray-500'>
								{notification.description}
							</CardDescription>
						</CardContent>

						<CardFooter className='ml-auto'>
							<Badge className='py-2'>
								<time
									className='font-semibold leading-none text-[10px]'
									dateTime={formatDate(notification.date)}>
									{formatDate(notification.date)}
								</time>
							</Badge>
						</CardFooter>
					</Card>
				))}
			</PageContainer>
		</>
	)
}
