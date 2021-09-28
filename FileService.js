import printer from 'printer'

class FileService {
    async printOut(file) {
        printer.printDirect({
            data: file.data,
            success: (jobID) => jobID,
            error: (e) => console.log(e)
        })
    }
}

export default new FileService()