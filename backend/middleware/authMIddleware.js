require('dotenv').config()
const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {
    const authHeaders = req.headers.authorization

    if (!authHeaders) {
        return res.json(400).json({ message: "Failed to find auth headers" })
    }

    const token = authHeaders.split(' ')[1]
    const decode = jwt.verify(token, process.env.JWT_SECRET)
    req.user = { userId: decode.sub }
    next()
}

module.exports = authMiddleware