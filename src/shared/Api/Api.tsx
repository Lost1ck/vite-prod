import axios from 'axios'

/* eslint-disable @typescript-eslint/no-unused-vars */
const Api_request =
	'https://api.github.com/search/repositories?q=language:TypeScript&sort=stars&order=desc'

const fetchPopularProjects = async () => {
	const response = await axios.get(Api_request)
	return response.data.items
}

export { Api_request, fetchPopularProjects }
