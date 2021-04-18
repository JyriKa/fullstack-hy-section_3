const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const Person = require('./models/person')
app.use(express.static('build'))
app.use(cors())
app.use(express.json())

const morgan = require('morgan')
morgan.token('body', function (req, res) { return JSON.stringify(req.body) })
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body\n'))


app.get('/api/persons', (request, response) => {
    Person.find({}).then(persons => {
        response.json(persons)
    }).catch(() => response.status(404).end())
})

app.get('/info', (request, response) => {
    Person.find({}).then(persons => {
        response.send(`<p>Phonebook has info for ${persons.length} people</p>
        <p>${Date()}</p>`)
    }).catch(() => response.status(500).end())
})

app.delete('/api/persons/:id', (request, response, next) => {
    Person.findByIdAndDelete(request.params.id).then(res => {
        response.status(204).end()
    }).catch(err => next(err))
})

app.post('/api/persons', (request, response, next) => {
    const body = request.body
    if (!body.name || !body.number) {
        return response.status(400).json({
            error: 'Missing name, number or both'
        })
    }
    const person = Person({
        name: body.name,
        number: body.number,
    })
    person.save().then(resPerson => {
        response.json(resPerson)
    }).catch(err => next(err))
})

app.put('/api/persons/:id', (request, response, next) => {
    const body = request.body
    if (!body.name || !body.number) {
        return response.status(400).json({
            error: 'Missing name, number or both'
        })
    }
    const updater = { name: body.name, number: body.number }
    Person.findByIdAndUpdate(request.params.id, updater).then(res => {
        response.status(200).end()
    }).catch(err => next(err))
})

app.get('/api/persons/:id', (request, response, next) => {
    Person.findById(request.params.id).then(person => {
        if (person) { response.json(person) }
        else { response.status(404).end() }
    }).catch(err => next(err))
})

const invalidEndpoints = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

app.use(invalidEndpoints)

const errorHandler = (error, request, response, next) => {
    console.error(error.message)
    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })
    }
    next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
