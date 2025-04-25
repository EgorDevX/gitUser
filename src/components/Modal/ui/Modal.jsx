import styles from './Modal.module.css'
export const Modal = ({ theme }) => {
	return (
		<div
			className={`${
				theme === 'light'
					? styles['modal-wrapper-light']
					: styles['modal-wrapper-dark']
			}`}
		>
			<p
				className={`${
					theme === 'light'
						? styles['modal-heading-light']
						: styles['modal-heading-dark']
				}`}
			>
				Sorry, but no such user was found!!!! Make sure you have entered the
				nickname of the github user correctly
			</p>
			<button className={styles['modal-btn']}>Try again</button>
		</div>
	)
}
