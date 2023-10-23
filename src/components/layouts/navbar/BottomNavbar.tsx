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
		<nav className='fixed bottom-0 left-0 z-50 w-full'>
			<div className='relative flex items-center justify-between h-full max-w-lg mx-auto font-medium bg-white p-2 border rounded-t-md shadow-2xl'>
				<div className='flex items-center'>
					<Button variant='ghost' className='flex flex-col h-full gap-1 w-24'>
						<HomeIcon size={24} className='text-gray-600' />
						<span className='text-xs text-gray-600 dark:text-gray-400 font-bold'>
							Home
						</span>
					</Button>

					<Button variant='ghost' className='flex flex-col h-full gap-1 w-24'>
						<Calendar size={24} className='text-gray-600' />
						<span className='text-xs text-gray-600 dark:text-gray-400 font-bold'>
							Attendance
						</span>
					</Button>
				</div>

				<div className='flex flex-col items-center gap-2 absolute left-1/2 -top-6 -translate-x-1/2'>
					<Button className='rounded-full h-16 w-16 shadow-2xl'>
						<LogOut size={24} />
					</Button>
					<span className='text-xs text-gray-600 dark:text-gray-400 font-bold'>
						Check Out
					</span>
				</div>

				<div className='flex items-center'>
					<Button variant='ghost' className='flex flex-col h-full gap-1 w-24'>
						<FolderSymlinkIcon size={24} className='text-gray-600' />
						<span className='text-xs text-gray-600 dark:text-gray-400 font-bold'>
							Form
						</span>
					</Button>

					<Button variant='ghost' className='flex flex-col h-full gap-1 w-24'>
						<Settings size={24} className='text-gray-600' />
						<span className='text-xs text-gray-600 dark:text-gray-400 font-bold'>
							Setting
						</span>
					</Button>
				</div>
			</div>
		</nav>
	)
}
