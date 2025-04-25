import styles from './Header.module.css'
import { Switcher } from './Switcher/Switcher'

export const Header = ({ theme, onChangeTheme }) => {
	return (
		<header className={styles['header']}>
			<div className={styles['header-container']}>
				<h1
					className={`${
						theme === 'light'
							? styles['header-heading-light']
							: styles['header-heading-dark']
					} `}
				>
					devfinder
				</h1>
				<div onClick={onChangeTheme} className={styles['theme-container']}>
					<p
						className={`${
							theme === 'light'
								? styles['theme-text-light']
								: styles['theme-text-dark']
						} `}
					>
						{theme === 'light' ? 'DARK' : 'LIGHT'}
					</p>
					<Switcher theme={theme} />
				</div>
			</div>
		</header>
	)
}
