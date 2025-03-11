import jwt from 'jsonwebtoken'
const JWT_SECRET = process.env.JWT_SECRET
const JWT_EXPIRATION = process.env.JWT_EXPIRATION

export const generateToken = (userId: string) => {
	if (!JWT_SECRET || !JWT_EXPIRATION)
		throw new Error('JWT_SECRET or JWT_EXPIRATION not set')
	return jwt.sign({ userId }, JWT_SECRET, { expiresIn: JWT_EXPIRATION as any })
}

export const verifyToken = (token: string) => {
	if (!JWT_SECRET) throw new Error('JWT_SECRET not set')
	try {
		return jwt.verify(token, JWT_SECRET)
	} catch (error) {
		throw new Error('Invalid or expired token')
	}
}
