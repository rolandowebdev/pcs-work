import AliceCarousel from 'react-alice-carousel'
import { Activity } from 'lucide-react'
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
	ColumnElementContainer,
	Navbar,
	PageContainer,
	SectionContainer
} from '@/components'
import { activities, listNews } from '@/data'
import { formatDate, formatDay } from '@/lib'
import { useIsMobile } from '@/hooks'

export const App = () => {
	const isMobile = useIsMobile()

	const responsive = {
		0: { items: 1 },
		568: { items: 2 },
		1024: { items: 3 }
	}

	const newsItems = listNews.map((news) => {
		return (
			<Card key={news.id} className='shadow-md mb-[2px] mr-4'>
				<CardHeader>
					<div className='flex items-center gap-4'>
						<Avatar>
							<AvatarImage src={news.image} />
							<AvatarFallback>{news.name}</AvatarFallback>
						</Avatar>
						<ColumnElementContainer className='gap-1'>
							<CardTitle>{news.name}</CardTitle>
						</ColumnElementContainer>
					</div>

					<ColumnElementContainer className='gap-2'>
						<span className='text-sm'>{formatDay(news.date)},</span>
						<time
							className='font-bold leading-none'
							dateTime={formatDate(news.date)}>
							{formatDate(news.date)}
						</time>
					</ColumnElementContainer>
				</CardHeader>

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
			<Navbar className='justify-between'>
				<h1 className='text-rose-600 font-bold text-2xl'>Kerja Yuk!</h1>
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
					<circle cx='18' cy='8' r='4' className='fill-rose-600 stroke-none' />
				</svg>
			</Navbar>

			<PageContainer className='flex flex-col gap-11'>
				<SectionContainer title='Hi Daenarys!'>
					<Card className='bg-gradient-to-tl from-fuchsia-600 to-red-600 text-white'>
						<CardHeader>
							<div className='flex items-center gap-4'>
								<Avatar>
									<AvatarImage src='https://github.com/shadcn.png' />
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

						<CardFooter className='mt-4'>
							<ColumnElementContainer className='gap-1'>
								<span className='text-sm'>Card Footer</span>
								<span className='font-bold'>Kantor Sahid</span>
							</ColumnElementContainer>
							<Activity />
						</CardFooter>
					</Card>
				</SectionContainer>

				<SectionContainer title="Today's Activity">
					<div className='grid grid-cols-3 gap-2'>
						{activities.map((activity) => (
							<Card key={activity.id} className='border'>
								<CardHeader className='py-3'>{activity.icon}</CardHeader>

								<CardContent className='p-2'>
									<CardTitle className='text-center'>{activity.hour}</CardTitle>
								</CardContent>

								<CardFooter className='py-3'>
									<CardDescription className='mx-auto'>
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
						autoWidth
						paddingLeft={12}
						paddingRight={12}
						items={newsItems}
						responsive={responsive}
						disableButtonsControls
						animationDuration={1500}
						swipeDelta={isMobile ? 50 : 100}
						animationEasingFunction='ease-in-out'
						controlsStrategy='alternate'
					/>
				</SectionContainer>
			</PageContainer>
		</>
	)
}
