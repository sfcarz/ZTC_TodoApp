import axios from 'axios';

export async function signIn(username, password){
    try {
        const result = await axios.post('/auth/signin', {username: username, password: password})
        return {token:result.data}
    } catch (error) {
        throw error
    }
}