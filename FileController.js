import FileService from "./FileService.js";


class FileController {
    async printOut(req, res) {
        try {
            const jobID = FileService.printOut(req.files.file)
            res.json(`${jobID} успешно добавлено в очередь.`)
        } catch (e) {
            res.status(400).json('Не удалось найти ни одного принтера.')
        }
    }
}

export default new FileController()