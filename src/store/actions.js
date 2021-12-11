import axios from 'axios'

export const searchType = async ({ commit }, data) => {
    const baseURL = 'http://localhost:8888/'
    const result = await axios.get(baseURL + data)
    commit('SEARCH__RESULT', result.data)
}