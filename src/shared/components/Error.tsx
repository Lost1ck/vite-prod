import React from 'react'
import { IErrorProps } from '../../interfaces/IProject'

export const Error: React.FC<IErrorProps> = ({ error }) => {
	return (
		<div>
			<p>{`We have some troubles... ${error.message}`}</p>
		</div>
	)
}
