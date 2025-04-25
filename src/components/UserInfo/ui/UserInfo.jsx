import styles from './UserInfo.module.css'

export const UserInfo = ({ theme, user }) => {
	const formatDate = (dateString) => {
		const date = new Date(dateString)
		const options = { day: '2-digit', month: 'short', year: 'numeric' }
		return date.toLocaleDateString('en-GB', options)
	}

	return (
		<article
			className={`${
				theme === 'light'
					? styles['userInfo-wrapper-light']
					: styles['userInfo-wrapper-dark']
			}`}
		>
			<div className={styles['userInfo-img-wrapper']}>
				<img
					className={styles['userInfo-img']}
					src={user.avatar_url}
					alt='User Photo'
				/>
			</div>
			<div className={styles['userInfo-content']}>
				<div className={styles['userInfo-content-header']}>
					<div className={styles['userInfo-header-identity']}>
						<p
							className={`${
								theme === 'light'
									? styles['userInfo-header-name-light']
									: styles['userInfo-header-name-dark']
							}`}
						>
							{user.name}
						</p>
						<p
							className={`${
								theme === 'light'
									? styles['userInfo-header-joined-light']
									: styles['userInfo-header-joined-dark']
							}`}
						>
							Joined {formatDate(user.created_at)}
						</p>
					</div>
					<p className={styles['userInfo-header-nickName']}>{user.nickName}</p>
				</div>
				<div className={styles['userInfo-content-body']}>
					<p
						className={`${
							theme === 'light'
								? styles['userInfo-body-bio-light']
								: styles['userInfo-body-bio-dark']
						}`}
					>
						{user.bio ? (
							user.bio
						) : (
							<span className={styles['text']}>This profile has no bio</span>
						)}
					</p>
					<ul
						className={`${
							theme === 'light'
								? styles['userInfo-body-list-light']
								: styles['userInfo-body-list-dark']
						}`}
					>
						<li className={styles['userInfo-body-item']}>
							<h3
								className={`${
									theme === 'light'
										? styles['userInfo-body-item-heading-light']
										: styles['userInfo-body-item-heading-dark']
								}`}
							>
								Repos
							</h3>
							<p
								className={`${
									theme === 'light'
										? styles['userInfo-body-item-text-light']
										: styles['userInfo-body-item-text-dark']
								}`}
							>
								{user.public_repos}
							</p>
						</li>
						<li className={styles['userInfo-body-item']}>
							<h3
								className={`${
									theme === 'light'
										? styles['userInfo-body-item-heading-light']
										: styles['userInfo-body-item-heading-dark']
								}`}
							>
								Followers
							</h3>
							<p
								className={`${
									theme === 'light'
										? styles['userInfo-body-item-text-light']
										: styles['userInfo-body-item-text-dark']
								}`}
							>
								{user.followers}
							</p>
						</li>
						<li className={styles['userInfo-body-item']}>
							<h3
								className={`${
									theme === 'light'
										? styles['userInfo-body-item-heading-light']
										: styles['userInfo-body-item-heading-dark']
								}`}
							>
								Following
							</h3>
							<p
								className={`${
									theme === 'light'
										? styles['userInfo-body-item-text-light']
										: styles['userInfo-body-item-text-dark']
								}`}
							>
								{user.following}
							</p>
						</li>
					</ul>
				</div>
				<div className={styles['userInfo-content-footer']}>
					<div className={styles['userInfo-footer-inner']}>
						<div className={styles['userInfo-footer-wrapper']}>
							<img
								className={styles['userInfo-footer-img']}
								src='/img/location.svg'
								alt='Icon Location'
							/>
							<p
								className={`${
									theme === 'light'
										? styles['userInfo-footer-text-light']
										: styles['userInfo-footer-text-dark']
								}`}
							>
								{user.location ? (
									user.location
								) : (
									<span className={styles['text']}>Not Available</span>
								)}
							</p>
						</div>
						<div className={styles['userInfo-footer-wrapper']}>
							<img
								className={styles['userInfo-footer-img']}
								src='/img/link.svg'
								alt='Icon WebSite'
							/>
							<p
								className={`${
									theme === 'light'
										? styles['userInfo-footer-text-light']
										: styles['userInfo-footer-text-dark']
								}`}
							>
								<a
									className={`${
										theme === 'light'
											? styles['link-light']
											: styles['link-dark']
									}`}
									href={user.blog}
								>
									{user.blog ? (
										user.blog
									) : (
										<span className={styles['text']}>Not Available</span>
									)}
								</a>
							</p>
						</div>
					</div>
					<div className={styles['userInfo-footer-inner']}>
						<div className={styles['userInfo-footer-wrapper']}>
							<img
								className={styles['userInfo-footer-img']}
								src='/img/twitter.svg'
								alt='Icon Twitter'
							/>
							<p
								className={`${
									theme === 'light'
										? styles['userInfo-footer-text-light']
										: styles['userInfo-footer-text-dark']
								}`}
							>
								{user.twitter_username ? (
									user.twitter_username
								) : (
									<span className={styles['text']}>Not Available</span>
								)}
							</p>
						</div>
						<div className={styles['userInfo-footer-wrapper']}>
							<img
								className={styles['userInfo-footer-img']}
								src='/img/company.svg'
								alt='Icon Company'
							/>
							<p
								className={`${
									theme === 'light'
										? styles['userInfo-footer-text-light']
										: styles['userInfo-footer-text-dark']
								}`}
							>
								{user.company ? (
									user.company
								) : (
									<span className={styles['text']}>Not Available</span>
								)}
							</p>
						</div>
					</div>
				</div>
			</div>
		</article>
	)
}
