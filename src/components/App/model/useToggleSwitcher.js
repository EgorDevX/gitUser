import { useEffect } from 'react'

export const useToggleSwitcher = (theme, setTheme) => {
	const changeTheme = () => {
		setTheme((prev) => {
			let newTheme
			if (prev === 'light') {
				newTheme = 'dark'
				localStorage.setItem('theme', newTheme)
				return newTheme
			} else {
				newTheme = 'light'
				localStorage.setItem('theme', newTheme)
				return newTheme
			}
		})
	}

	useEffect(() => {
		if (localStorage.getItem('theme') !== null) {
			const savedTheme = localStorage.getItem('theme')
			setTheme(savedTheme)
		}
	}, [setTheme])

	//Добавление классов к body
	useEffect(() => {
		if (document.body.classList.contains('light')) {
			document.body.classList.remove('light')
			document.body.classList.add('dark')
		} else {
			document.body.classList.remove('dark')
			document.body.classList.add('light')
		}
	}, [theme])
	return { changeTheme }
}
