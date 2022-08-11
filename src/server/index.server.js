import { createServer, Model, Response } from 'miragejs'
import { sign, verify } from 'jsonwebtoken-esm'
import { JWT_TOKEN } from '@config/env'
import accounts from './mocks/account.mock.js'
import restaurant from './mocks/restaurant.mock.js'

export default function ({ environment }) {
    console.log('⬢ MirageJS')
    return createServer({
        environment,
        models: {
            accounts: Model,
        },
        seeds(server) {
            accounts.forEach((account) => {
                server.create('account', account)
            })
        },
        routes() {
            this.namespace = 'api'
            /**
             * @name Login
             * @description Basic strategy for authentication (email & password). */
            this.post('/login', ({ db }, { requestBody }) => {
                const payload = JSON.parse(requestBody)
                const account = db.accounts.findBy({ email: payload.email })
                if (account && account.password === payload.password) {
                    return {
                        token: sign(
                            { name: account.name, email: account.email },
                            JWT_TOKEN
                        ),
                    }
                }
                return new Response(
                    401,
                    {},
                    { errors: ['Invalid credentials'] }
                )
            })

            /**
             * @name Credentials
             * @description Get user's data using token in local storage. */
            this.get('/current', ({ db }, { requestHeaders }) => {
                const token = requestHeaders?.Authorization || ''
                if (!token)
                    return new Response(401, {}, { errors: ['Unauthorized'] })
                const verified = verify(token, JWT_TOKEN)
                if (!verified)
                    return new Response(401, {}, { errors: ['Unauthorized'] })
                const user = db.accounts.findBy({ email: verified.email })
                if (!user.isValidated)
                    return new Response(401, {}, { errors: ['Unauthorized'] })
                return user
            })

            this.post('/inscription', ({db},{requestBody}) => {
                const payload = JSON.parse(requestBody)
                console.log(payload.email)
            })
        },
    })
}
