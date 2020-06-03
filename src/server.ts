import express, { response } from 'express'

const app = express()

app.get('/users', (req, res) =>{
    console.log('Listagem de usuarios');
    res.json({msg: 'Listagem de usuários'})
})

app.post('/users', (req, res) => {
    const user = {
        name: 'Carlos',
        email: 'carlos@email.com'
    }
    return res.json(user)
})

app.listen(3333)