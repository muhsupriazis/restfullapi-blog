import { addDataToDatabase, deleteDataById, getAllDataFromDatabase, getDataById, updateDataById } from "../controllers/Blog.js"
import express from 'express'

const router = express.Router()

router.get('/', getAllDataFromDatabase)

router.post('/', addDataToDatabase)

router.delete('/:id', deleteDataById)

router.get('/:id', getDataById)

router.put('/:id', updateDataById)

export default router