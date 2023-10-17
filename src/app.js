const express = requiere('express')

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/',(req,res) => {
     res.send('Servidor de prueba ')
})

app.listen(PORT, () => {
    console.log('Server li sten on port ${PORT}')
})