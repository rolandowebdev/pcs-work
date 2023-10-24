export enum Status {
	Rejected = 'Rejected',
	Processed = 'Processed',
	Approved = 'Approved'
}

export type Notification = {
	id: number
	icon: React.ReactElement
	status: Status
	description: string
	date: Date
}
