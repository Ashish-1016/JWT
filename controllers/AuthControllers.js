
import { USERS, TWEETS } from "../database/DATABASE.js"

export function loginUser(req, res) {

    const { username, password } = req.body

    if (!username || !password) {
        res.status(400).json("Username or Password or name cannot be empty")
    }
    else {


        const user = USERS.find(user => user.username === username)

        if (!user) {
            res.status(401).json("User not found")
        } else if (user.password !== password) {
            res.status(401).json("Invalid password")
        } else {

            
            console.log(user)
            res.status(200).json(`Welcome, ${user.name}!`)
        }

    }

}

export function logoutUser(req, res) {



}

export function signupUser(req, res) {

}

export function forgotpasswordUser(req, res) {

}


