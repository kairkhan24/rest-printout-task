import express from 'express'
import fileUpload  from 'express-fileupload'
import router from './router.js'

const PORT = 8080
const app = express()

app.use(express.json())
app.use(fileUpload({}))
app.use('/api', router)



const startApp = () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`)
        })
    } catch (e) {
        console.log(`Server error: ${e}`)
    }

}

startApp()