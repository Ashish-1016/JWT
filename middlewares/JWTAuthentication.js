import jwt from 'jsonwebtoken'


export const JWTVerifyAccessToken = (req, res, next) => {

    const { username, userId } = req.user
    if (email.endsWith('@y.com')) {
        const token = jwt.sign({
            username,
            userId,
            isASpecialUser: true,
            isLoggedIn: true
        }, process.env.SECRET_KEY)
        return token
    }
    else {
        const token = jwt.sign({
            username,
            userId,
            isASpecialUser: false,
            isLoggedIn: true
        }, process.env.SECRET_KEY)
        return token
    }

}

