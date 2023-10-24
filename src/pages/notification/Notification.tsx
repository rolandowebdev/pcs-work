import {
	Badge,
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
	Navbar,
	PageContainer,
	buttonVariants
} from '@/components'
import { listNotification } from '@/data'
import { useScroll } from '@/hooks'
import { cn, formatDate } from '@/lib'
import { Status } from '@/types'
import { ArrowLeft, ArrowRight, Check, X } from 'lucide-react'
import { Link } from 'react-router-dom'

export const Notification = () => {
	const { isScrolled } = useScroll()

	const iconBaseProps = {
		size: 12,
		strokeWidth: 4,
		className: 'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
	}

	const getNotificationInfo = (notificationStatus: Status) => {
		let className, icon

		switch (notificationStatus) {
			case Status.Approved:
				className = 'bg-green-600 text-white'
				icon = <Check {...iconBaseProps} />
				break
			case Status.Rejected:
				className = 'bg-rose-600 text-white'
				icon = <X {...iconBaseProps} />
				break
			case Status.Processed:
				className = 'bg-sky-600 text-white'
				icon = <ArrowRight {...iconBaseProps} />
				break
			default:
				console.log('Unknown notification status')
				break
		}

		return { className, icon }
	}

	return (
		<>
			<Navbar
				className={cn('gap-2 rounded-b-md', isScrolled ? 'shadow-sm' : '')}>
				<Link
					to='/'
					className={buttonVariants({ variant: 'ghost', size: 'icon' })}>
					<ArrowLeft size={24} strokeWidth={2.5} className='stroke-rose-600' />
				</Link>

				<h1 className='text-rose-600 font-bold text-xl tracking-wide'>
					Notification
				</h1>
			</Navbar>

			<PageContainer className='flex flex-col gap-3 mb-8'>
				{listNotification.map((notification) => (
					<Card
						key={notification.id}
						className='flex items-center gap-3 p-4 shadow-md cursor-default transition-all duration-300 hover:bg-gray-100 active:bg-gray-100 focus:bg-gray-100'>
						<CardHeader>
							<Card className='relative bg-gradient-to-tl from-fuchsia-600 to-red-600 text-white p-4'>
								{notification.icon}
								<Badge
									variant='rounded'
									className={cn(
										'rounded-full shadow-md w-5 aspect-square absolute -bottom-1 -right-1',
										getNotificationInfo(notification.status).className
									)}>
									{getNotificationInfo(notification.status).icon}
								</Badge>
							</Card>
						</CardHeader>

						<CardContent className='flex flex-col gap-1 '>
							<CardTitle className='text-base'>{notification.status}</CardTitle>
							<CardDescription className='text-xs text-gray-500'>
								{notification.description}
							</CardDescription>
						</CardContent>

						<CardFooter className='ml-auto self-start'>
							<Badge variant='default' className='py-2'>
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
