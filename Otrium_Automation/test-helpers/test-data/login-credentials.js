require('dotenv').config()
export const login_credentials = {
    "OtriumUrl": process.env.otrium_url,
    "Login": {
        "email": process.env.email,
        "password": process.env.password
    }
}