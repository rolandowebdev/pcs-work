const formatDate = (inputDate: Date): string => {
	const year = inputDate.getFullYear()
	const month = inputDate.getMonth()
	const day = inputDate.getDate()

	const dateObj = new Date(year, month, day)

	const formattedDate = dateObj.toLocaleDateString('id-ID', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	})

	return formattedDate
}

const formatDay = (inputDate: Date): string => {
	const year = inputDate.getFullYear()
	const month = inputDate.getMonth()
	const day = inputDate.getDate()

	const dateObj = new Date(year, month, day)

	const daysOfWeek = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday'
	]

	const dayOfWeek = daysOfWeek[dateObj.getUTCDay()]

	return dayOfWeek
}

export { formatDate, formatDay }
