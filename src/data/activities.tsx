import { Activity } from '@/types'
import { Clock6, Timer, TimerReset } from 'lucide-react'

export const activities: Activity[] = [
	{
		id: 1,
		icon: <Timer size={44} className='text-rose-600 mx-auto' />,
		hour: '08:30',
		text: 'Check In'
	},
	{
		id: 2,
		icon: <TimerReset size={44} className='text-rose-600 mx-auto' />,
		hour: '03:00:00',
		text: 'Working Hours'
	},
	{
		id: 3,
		icon: <Clock6 size={44} className='text-rose-600 mx-auto' />,
		hour: '--:--',
		text: 'Check Out'
	}
]
