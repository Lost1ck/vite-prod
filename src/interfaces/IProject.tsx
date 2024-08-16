interface IProject {
	id: number
	full_name: string
	html_url: string
	stargazers_count: number
}

interface IApiError {
	message: string
}

interface IErrorProps {
	error: IApiError
}

export type { IApiError, IErrorProps, IProject }
