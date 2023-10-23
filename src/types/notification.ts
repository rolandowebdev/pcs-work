export type Notification = {
	id: number
	icon: React.ReactElement
	status: 'Rejected' | 'Processed' | 'Approved'
	description: string
	date: Date
}
