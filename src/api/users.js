import axios from 'axios'
export async function getUsers({page, limit}) {
    const response = await axios
        .get(`https://randomuser.me/api/?page=${page}&results=${limit}`)
        return response.data
    }