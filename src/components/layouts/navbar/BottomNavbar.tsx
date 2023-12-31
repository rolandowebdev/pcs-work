import { Button } from '@/components'
import {
	Calendar,
	FolderSymlinkIcon,
	HomeIcon,
	LogOut,
	Settings
} from 'lucide-react'

export const BottomNavbar = () => {
	return (
		<nav className='fixed bottom-0 z-50 w-full'>
			<div className='relative flex items-center justify-between h-full max-w-lg mx-auto font-medium bg-white p-2 border rounded-t-md shadow-2xl'>
				<div className='flex items-center'>
					<Button
						variant='ghost'
						className='flex flex-col h-full gap-1 w-16 lg:w-24'>
						<HomeIcon size={18} className='stroke-rose-600' />
						<span className='text-rose-600 text-xs  dark:text-gray-400 font-bold'>
							Home
						</span>
					</Button>

					<Button
						variant='ghost'
						className='group flex flex-col h-full gap-1 w-16'>
						<Calendar
							size={18}
							className='group-hover:stroke-rose-600 text-gray-500'
						/>
						<span className='group-hover:text-rose-600 text-xs text-gray-500 dark:text-gray-400 font-bold'>
							Attendance
						</span>
					</Button>
				</div>

				<div className='flex flex-col items-center gap-2 absolute left-1/2 -top-6 -translate-x-[25%]'>
					<Button className='rounded-full h-14 w-14 shadow-2xl lg:h-16 lg:w-16'>
						<LogOut size={18} strokeWidth={2.5} />
					</Button>
					<span className='text-rose-600 text-xs dark:text-gray-400 font-bold'>
						Check Out
					</span>
				</div>

				<div className='flex items-center'>
					<Button
						variant='ghost'
						className='group flex flex-col h-full gap-1 w-16'>
						<FolderSymlinkIcon
							size={18}
							className='group-hover:stroke-rose-600 text-gray-500'
						/>
						<span className='group-hover:text-rose-600 text-xs text-gray-500 dark:text-gray-400 font-bold'>
							Form
						</span>
					</Button>

					<Button
						variant='ghost'
						className='group flex flex-col h-full gap-1 w-16'>
						<Settings
							size={18}
							className='group-hover:stroke-rose-600 text-gray-500'
						/>
						<span className='group-hover:text-rose-600 text-xs text-gray-500 dark:text-gray-400 font-bold'>
							Setting
						</span>
					</Button>
				</div>
			</div>
		</nav>
	)
}
