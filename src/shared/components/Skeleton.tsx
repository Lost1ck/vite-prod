import React from 'react'
import styles from './styles/Skeleton.module.css'

const Skeleton: React.FC = () => {
	return (
		<div className={styles.skeleton}>
			<h1>Popular TypeScript Projects on GitHub</h1>
			<div className={styles['skeleton-item']}></div>
			<div className={styles['skeleton-item']}></div>
			<div className={styles['skeleton-item']}></div>
			<div className={styles['skeleton-item']}></div>
			<div className={styles['skeleton-item']}></div>
			<div className={styles['skeleton-item']}></div>
			<div className={styles['skeleton-item']}></div>
			<div className={styles['skeleton-item']}></div>
			<div className={styles['skeleton-item']}></div>
			<div className={styles['skeleton-item']}></div>
			<div className={styles['skeleton-item']}></div>
		</div>
	)
}

export default Skeleton
