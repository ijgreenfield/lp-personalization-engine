import Cors from 'cors'
import Axios from 'axios'

function initMiddleware(middleware) {
  return (req, res) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result)
        }
        return resolve(result)
      })
    })
}

const cors = initMiddleware(
  Cors({
    methods: ['GET', 'POST', 'OPTIONS']
  })
)

export default async function handler(req, res) {
  await cors(req, res)

  const data = {
    token: 'UFdULB',
    event: 'LP Form',
    properties: {
      Email: req.body.email,
      Phone: req.body.phone,
    }
  }

  try {
    await Axios({
      method: 'GET',
      url: `https://a.klaviyo.com/api/track?data=${Buffer.from(
        JSON.stringify(data)
      ).toString('base64')}`
    })
    res.json({ success: true })
  } catch (error) {
    res.json({ success: false })
  }
}