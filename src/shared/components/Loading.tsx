import React from 'react'

export const Loading: React.FC = () => {
	return (
		<div style={styles.container}>
			<p>Loading...</p>
		</div>
	)
}

const styles = {
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh',
		textAlign: 'center',
	} as React.CSSProperties,
}
