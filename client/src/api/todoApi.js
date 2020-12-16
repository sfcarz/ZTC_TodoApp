import axios from 'axios';

export async function signIn(username, password){
    console.log(username, password);
    try {
        const result = await axios.post('http://localhost:3001/auth/signin', { username: username, password: password })
        return result.data
    } catch (error) {
        throw error
    }
}