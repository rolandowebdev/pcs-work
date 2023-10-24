import { Notification, Status } from '@/types'
import { Coins, Syringe, Timer } from 'lucide-react'

export const listNotification: Notification[] = [
	{
		id: 1,
		icon: <Coins />,
		date: new Date('2022-02-23'),
		status: Status.Approved,
		description: 'Your submission has been approved by the Superior.'
	},
	{
		id: 2,
		icon: <Syringe />,
		date: new Date('2022-02-23'),
		status: Status.Processed,
		description: 'Your submission has been processed by the Superior.'
	},
	{
		id: 3,
		icon: <Timer />,
		date: new Date('2022-02-23'),
		status: Status.Approved,
		description: 'Your submission has been approved by the Superior.'
	},
	{
		id: 4,
		icon: <Coins />,
		date: new Date('2022-02-23'),
		status: Status.Processed,
		description: 'Your submission has been processed by the Superior.'
	},
	{
		id: 5,
		icon: <Syringe />,
		date: new Date('2022-02-23'),
		status: Status.Approved,
		description: 'Your submission has been approved by the Superior.'
	},
	{
		id: 6,
		icon: <Coins />,
		date: new Date('2022-02-23'),
		status: Status.Approved,
		description: 'Your submission has been approved by the Superior.'
	},
	{
		id: 7,
		icon: <Timer />,
		date: new Date('2022-02-23'),
		status: Status.Processed,
		description: 'Your submission has been processed by the Superior.'
	},
	{
		id: 8,
		icon: <Syringe />,
		date: new Date('2022-02-23'),
		status: Status.Rejected,
		description: 'Your submission has been rejected by the Superior.'
	}
]
