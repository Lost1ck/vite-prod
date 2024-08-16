import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { IApiError, IProject } from '../interfaces/IProject'
import { fetchPopularProjects } from '../shared/Api/Api'
import { Error } from '../shared/components/Error'
import Skeleton from '../shared/components/Skeleton'
import styles from './styles/PopularProjectsList.module.css'

const PopularProjectsList: React.FC = () => {
	const [showSkeleton, setShowSkeleton] = useState(true)
	const { data, error } = useQuery<IProject[], IApiError>(
		'popular-ts-projects',
		fetchPopularProjects,
		{
			staleTime: 5 * 60 * 1000,
		}
	)

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowSkeleton(false)
		}, 1000)

		return () => clearTimeout(timer)
	}, [])

	if (showSkeleton) return <Skeleton />

	if (error) return <Error error={error} />

	return (
		<div className={styles.container}>
			<h1 className={styles.header}>Popular TypeScript Projects on GitHub</h1>
			<ul className={styles.list}>
				{data?.map((project: IProject) => (
					<li key={project.id} className={styles['list-item']}>
						<a
							href={project.html_url}
							target='_blank'
							rel='noopener noreferrer'
						>
							{project.full_name} - ⭐ {project.stargazers_count}
						</a>
					</li>
				))}
			</ul>
		</div>
	)
}

export default PopularProjectsList
