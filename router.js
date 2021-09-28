import Router from "express"
import FileController from "./FileController.js";


const router = new Router()

router.post('/file-print-out', FileController.printOut)

export default router