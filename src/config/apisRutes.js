const ip = 'http://localhost:3000';

export const urlApis = {

    getUser: ip + '/usuario/',
    createUser: ip + '/usuario',
    getSalas: ip + '/sala/',
    getMsgs: ip + '/mensaje/'
}

export const getBasic = {
    method: "GET",
    headers: {
        "Content-type": "application/json"
    }
}

export const postBasic = (payload) => {

    return {
        method: "POST",
        body: payload,
        headers: {
            "Content-type": "application/json"
        }
    }
}