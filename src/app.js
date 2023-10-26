const express = require('express')

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/',(req,res) => {
     res.send('Servidor de prueba ')
})

app.listen(PORT, () => {
    console.log('Servidor escuchando el puerto ${PORT}')
})