import AliceCarousel from 'react-alice-carousel'
import { Activity, MapPin } from 'lucide-react'
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
	BottomNavbar,
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
	ColumnElementContainer,
	Navbar,
	PageContainer,
	SectionContainer,
	Separator,
	buttonVariants
} from '@/components'
import { activities, listNews, listPeople } from '@/data'
import { cn, formatDate, formatDay } from '@/lib'
import { useMobile, useScroll } from '@/hooks'
import { Link } from 'react-router-dom'

export const Dashboard = () => {
	const { isMobile } = useMobile()
	const { isScrolled } = useScroll()

	const responsive = {
		0: { items: 1 },
		568: { items: 2 },
		1024: { items: 3 }
	}

	const newsItems = listNews.map((news) => {
		return (
			<Card key={news.id} className='shadow-md mb-[2px] mr-4 p-4'>
				<CardHeader>
					<div className='flex items-center gap-2'>
						<Avatar className='h-14 w-14'>
							<AvatarImage src={news.image} />
							<AvatarFallback>{news.name}</AvatarFallback>
						</Avatar>
						<ColumnElementContainer className='gap-1'>
							<CardTitle className='text-sm lg:text-lg'>{news.name}</CardTitle>
						</ColumnElementContainer>
					</div>

					<ColumnElementContainer className='gap-2'>
						<span className='text-sm'>{formatDay(news.date)},</span>
						<time
							className='font-bold leading-none text-sm lg:text-lg'
							dateTime={formatDate(news.date)}>
							{formatDate(news.date)}
						</time>
					</ColumnElementContainer>
				</CardHeader>

				<Separator className='my-4' />

				<CardContent>
					<CardDescription className='text-gray-500'>
						{news.description}
					</CardDescription>
				</CardContent>
			</Card>
		)
	})

	return (
		<>
			<Navbar className={cn('justify-between', isScrolled ? 'shadow-sm' : '')}>
				<h1 className='text-rose-600 font-bold text-xl'>PCS Work</h1>
				<Link
					to='/notification'
					className={buttonVariants({ variant: 'ghost', size: 'icon' })}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
						className='lucide lucide-bell-dot'>
						<path d='M19.4 14.9C20.2 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 .7 0 1.3.1 1.9.3' />
						<path d='M10.3 21a1.94 1.94 0 0 0 3.4 0' />
						<circle
							cx='18'
							cy='8'
							r='4'
							className='fill-rose-600 stroke-none'
						/>
					</svg>
				</Link>
			</Navbar>

			<PageContainer className='flex flex-col gap-11'>
				<SectionContainer title='Hi Daenarys!'>
					<Card className='bg-gradient-to-tl from-fuchsia-600 to-red-600 text-white'>
						<CardHeader>
							<div className='flex items-center gap-4'>
								<Avatar className='h-14 w-14 shadow-lg'>
									<AvatarImage src='/images/profile-7.jpg' />
									<AvatarFallback>Profile Photo</AvatarFallback>
								</Avatar>
								<ColumnElementContainer className='gap-1'>
									<CardTitle>Daenarys</CardTitle>
									<CardDescription>Software Engineer</CardDescription>
								</ColumnElementContainer>
							</div>

							<ColumnElementContainer className='gap-1'>
								<span className='text-sm'>Member since</span>
								<time className='font-bold leading-none' dateTime='2023-03-29'>
									March 29, 2023
								</time>
							</ColumnElementContainer>
						</CardHeader>

						<CardFooter className='mt-5'>
							<ColumnElementContainer className='gap-1'>
								<span className='text-sm flex items-center gap-1'>
									<MapPin size={13} /> Location
								</span>
								<span className='font-bold'>Avengers Office</span>
							</ColumnElementContainer>
							<Activity />
						</CardFooter>
					</Card>
				</SectionContainer>

				<SectionContainer title="Today's Activity">
					<div className='grid grid-cols-3 gap-2'>
						{activities.map((activity) => (
							<Card
								key={activity.id}
								className='border hover:bg-gray-100 transition-all duration-300 cursor-default'>
								<CardHeader className='py-2'>{activity.icon}</CardHeader>

								<CardContent className='p-0 md:p-2'>
									<CardTitle
										className={cn(
											'text-center text-xs sm:text-base lg:text-xl',
											activity.hour === '03:00:00' ? 'text-rose-600' : ''
										)}>
										{activity.hour}
									</CardTitle>
								</CardContent>

								<CardFooter className='py-2'>
									<CardDescription className='mx-auto text-xs sm:text-lg text-center'>
										{activity.text}
									</CardDescription>
								</CardFooter>
							</Card>
						))}
					</div>
				</SectionContainer>

				<SectionContainer title='PCS News'>
					<AliceCarousel
						infinite
						autoPlay
						items={newsItems}
						responsive={responsive}
						disableButtonsControls
						animationDuration={1500}
						swipeDelta={isMobile ? 50 : 100}
						animationEasingFunction='ease-in-out'
						controlsStrategy='alternate'
					/>
				</SectionContainer>

				<SectionContainer title='Online'>
					<Card className='shadow-md'>
						<CardContent>
							<div className='flex flex-wrap justify-center items-center'>
								{listPeople.map((people) => (
									<ColumnElementContainer
										key={people.id}
										className='gap-[2px] items-center -mr-[11px]'>
										<Avatar className='border-4 border-white h-14 w-14 lg:h-[62px] lg:w-[62px]'>
											<AvatarImage src={people.image} />
											<AvatarFallback>{people.name}</AvatarFallback>
										</Avatar>
										<span className='text-[9px] font-bold'>{people.name}</span>
										<span className='text-[9px] text-gray-500 font-semibold'>
											{people.role}
										</span>
									</ColumnElementContainer>
								))}

								<ColumnElementContainer className='-mr-[11px] justify-center items-center flex-row  -mt-8 border-4 border-white z-10 h-14 w-14 flex rounded-full bg-gradient-to-tl from-fuchsia-600 to-red-600 text-white lg:h-[62px] lg:w-[62px]'>
									<span className='font-bold text-[11px] flex flex-col items-center'>
										10 <span>More</span>
									</span>
								</ColumnElementContainer>
							</div>
						</CardContent>
					</Card>
				</SectionContainer>
			</PageContainer>
			<BottomNavbar />
		</>
	)
}
