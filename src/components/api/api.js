import React from 'react'
import Axios from 'axios'

const url = "http://api.github.com"
const githubToken = '101f295d05defaf44d7362256fd47cfc306d0489'

export const fetchIssues = async () => {
    return await Axios.get(
        `${url}/search/issues?q={facebook}&per_page=100&page_namber=1`,
        {
            headers: {
                Authorization: `token ${githubToken}`
            }
        })
}

export const getIssues = async () => {
    const issues = await fetchIssues()

    return await issues.data.items
}

export const fethchIssueReadme = async urlIssue => {
    return await Axios.get(`${urlIssue}/readme`)
}

export const renderIssueReadme = async urlReadme => {
    return await Axios.get(urlReadme)
}

export const getComments = async urlComments => {
    return await Axios.get(urlComments)
}