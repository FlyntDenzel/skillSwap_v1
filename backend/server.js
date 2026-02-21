import express from 'express'

const app = express()
const PORT = 51214

app.listen(PORT, () => {
    console.log('server running')
})