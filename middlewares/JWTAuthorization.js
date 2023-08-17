export const JWTAuthorization = (req, res, next) => {

    const { token } = req.headers
    if (!token) {
        res.status(401).json("Authorization Token missing")
    }
    try {
        const decodedToken = jwt.veryify(token, process.env.SECRET_KEY)
        req.user = decodedToken
        next();

    }
    catch (err) {
        res.status(403).json("Invalid Token")
    }

}