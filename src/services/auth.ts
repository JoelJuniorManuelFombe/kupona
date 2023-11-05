import axios from 'axios'

axios.defaults.baseURL = "http://localhost:8000";

type TUserNew = {
    userName: string,
    userEmail: string
    userContact: number,
    userAddress: string,
    userPassword: string
}

type TLogin = {
    userEmail: string;
    userPassword: string
}

const createUser = async (props: TUserNew) => {
    try {
        const user = await axios.post('/api/auth/signin', props)
        console.log(user)
        return user.data
    }
    catch (error) {
        console.log(error)
    }
}

const login = async (props: TLogin) => {
    try {
        const user = await axios.post(`/api/auth/login/`, props)
        console.log(user.data);
        
        return user.data;
    }
    catch (error) {
        console.log(error)
    }
}

export { createUser, login }