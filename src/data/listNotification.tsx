import { Category, Notification, Status } from '@/types'
import { Coins, Syringe, Timer } from 'lucide-react'

export const listNotification: Notification[] = [
	{
		id: 1,
		icon: <Coins />,
		category: Category.Reimburstment,
		date: new Date('2023-02-8'),
		status: Status.Approved,
		description:
			'Your submission with a total cost of 50,000 has been <span className="text-zinc-950 font-bold">paid</span>, please check your account.'
	},
	{
		id: 2,
		icon: <Syringe />,
		category: Category.Sickness,
		date: new Date('2023-02-12'),
		status: Status.Processed,
		description:
			'Your submission will be <span className="text-zinc-950 font-bold">processed</span> according to the reimbursement schedule. Please wait'
	},
	{
		id: 3,
		icon: <Timer />,
		category: Category.Overtime,
		date: new Date('2023-02-23'),
		status: Status.Rejected,
		description:
			'Your submission has been <span className="text-zinc-950 font-bold">rejected</span>, please confirm with with your Superior.'
	},
	{
		id: 4,
		icon: <Coins />,
		category: Category.Reimburstment,
		date: new Date('2023-03-13'),
		status: Status.Processed,
		description:
			'Your submission will be <span className="text-zinc-950 font-bold">processed</span> according to the reimbursement schedule. Please wait'
	},
	{
		id: 5,
		icon: <Syringe />,
		category: Category.Sickness,
		date: new Date('2023-03-18'),
		status: Status.Approved,
		description:
			'Your submission has been <span className="text-zinc-950 font-bold">approved</span> by the Superior.'
	},
	{
		id: 6,
		icon: <Coins />,
		category: Category.Reimburstment,
		date: new Date('2023-03-29'),
		status: Status.Approved,
		description:
			'Your submission has been <span className="text-zinc-950 font-bold">approved</span> by the Superior.'
	},
	{
		id: 7,
		icon: <Timer />,
		category: Category.Overtime,
		date: new Date('2023-04-22'),
		status: Status.Processed,
		description:
			'Your submission will be <span className="text-zinc-950 font-bold">processed</span> according to the reimbursement schedule. Please wait'
	},
	{
		id: 8,
		icon: <Syringe />,
		category: Category.Sickness,
		date: new Date('2023-04-29'),
		status: Status.Rejected,
		description:
			'Your submission has been <span className="text-zinc-950 font-bold">rejected</span>, please confirm with with your Superior.'
	}
]
