const express = require('express')
const app =  express()
const port = 3001


//criar rota padrão ou raiz
app.get('/', (req, res)=> {
    res.send('Hello World!')
})

//escutar a porta 3001
app.listen(port, () => {
    console.log(`Servidor rodando no endereço http:localhost:${port}`)
})
