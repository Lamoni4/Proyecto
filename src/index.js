import express from 'express'
import { PORT } from './config/config.js'
import { deleteById, getAll, store } from './controller.js'

const app = express()

app.use(express.json())

app.get('/usuarios', getAll)
app.post('/usuarios', store)
app.delete('/usuarios/:id', deleteById)

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
