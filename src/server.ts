import express from 'express'

const app = express()

app.get('/users', (req, res) =>{
    console.log('Listagem de usuarios');
    res.json({msg: 'Listagem de usuários'})

})

app.listen(3333)