export enum Status {
	Rejected = 'Rejected',
	Processed = 'Processed',
	Approved = 'Approved'
}

export enum Category {
	Sickness = 'Sickness',
	Overtime = 'Overtime',
	Reimburstment = 'Reimburstment'
}

export type Notification = {
	id: number
	status: Status
	category: Category
	icon: React.ReactElement
	description: string
	date: Date
}
