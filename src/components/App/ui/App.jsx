import { useState } from 'react'
import { Header } from '../../Header'
import { Search } from '../../Search'
import { UserInfo } from '../../UserInfo'
import { useToggleSwitcher } from '../model/useToggleSwitcher'
import styles from './App.module.css'

const userData = {
	id: 1,
	avatar_url: '/public/img/photo.svg',
	name: 'The Octocat',
	login: '@octocat',
	created_at: '25 Jan 2011',
	bio: '',
	public_repos: 8,
	followers: 3938,
	following: 9,
	location: 'San Francisco',
	blog: 'https://github.blog',
	twitter_username: '',
	company: '@github',
}

export const App = () => {
	const [theme, setTheme] = useState('light')
	const { changeTheme } = useToggleSwitcher(theme, setTheme)
	const [user, setUser] = useState(userData)

	const updateUser = (updateUserData) => {
		setUser(updateUserData)
	}

	return (
		<div className={styles['app-wrapper']}>
			<div className={styles['container']}>
				<Header theme={theme} onChangeTheme={changeTheme} />
				<Search theme={theme} onUpdateUser={updateUser} userData={userData} />
				<UserInfo theme={theme} user={user} />
			</div>
		</div>
	)
}
