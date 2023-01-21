import axios from 'axios'

const headers = {
    accept: "application/json",
    'Content-Type': "application/json",
}

export const sendRequest = async ({ url, method, body }) => {
    try {
        const { data } = await axios({
            headers: headers,
            method: method,
            url: url,
            data: body
        })
        
        return data
    } catch (err) {
        console.log(err)
    }
}