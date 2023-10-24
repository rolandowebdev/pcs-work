export enum Role {
	Engineer = 'Engineer',
	Manager = 'Manager',
	Designer = 'Designer'
}

export type People = {
	id: number
	image: string
	role: Role
	name: string
}
