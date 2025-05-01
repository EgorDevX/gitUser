import { useEffect, useState } from 'react'
import styles from './Search.module.css'

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN

export const Search = ({ theme, onUpdateUser }) => {
	const [searchValue, setSearchValue] = useState('')
	const [debouncedSearchValue, setDebouncedSearchValue] = useState(searchValue)

	useEffect(() => {
		const timeout = setTimeout(() => {
			setDebouncedSearchValue(searchValue)
		}, 300)

		return () => clearTimeout(timeout)
	}, [searchValue])

	useEffect(() => {
		if (!debouncedSearchValue.trim()) return

		const controller = new AbortController()
		const signal = controller.signal

		fetch(`https://api.github.com/users/${debouncedSearchValue}`, {
			headers: {
				Authorization: `Bearer ${GITHUB_TOKEN}`,
				Accept: 'application/vnd.github+json',
			},
			signal,
		})
			.then((resp) => {
				if (resp.status === 404) {
					throw new Error('No user found')
				}
				if (!resp.ok) {
					throw new Error(`HTTP error! status: ${resp.status}`)
				}
				return resp.json()
			})
			.then((data) => onUpdateUser(data))
			.catch((err) => {
				if (err.name === 'AbortError') {
					return
				}
			})

		return () => controller.abort()
	}, [debouncedSearchValue, onUpdateUser])

	const getInputValue = (e) => {
		setSearchValue(e.target.value)
	}

	return (
		<search className={styles.search}>
			<div
				className={
					theme === 'light'
						? styles['search-form-light']
						: styles['search-form-dark']
				}
			>
				<div className={styles['search-container']}>
					<img
						className={styles['search-img']}
						src='/img/search.svg'
						alt='Search loop'
					/>
					<input
						type='text'
						name='search'
						className={
							theme === 'light'
								? styles['input-search-light']
								: styles['input-search-dark']
						}
						placeholder='Search GitHub username…'
						value={searchValue}
						onChange={getInputValue}
					/>
				</div>
				<button className={styles['search-btn']}>Search</button>
			</div>
		</search>
	)
}
