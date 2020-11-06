import axios from 'axios'

export const getGitService = {
	getMyGit
}

function getMyGit () {
	return axios.get("https://api.github.com/users/jaeeelee/repos").then(handleResponse)
}

function handleResponse(response) {
    if ( response.status !== 200) {
        const error = (response && response.message) || response.statusText;
        return Promise.reject(error);
    }
    return response.data;
}