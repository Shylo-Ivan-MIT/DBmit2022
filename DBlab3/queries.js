const Pool = require('pg').Pool
const pool = new Pool({
    user: 'me',
    host: 'localhost',
    database: 'api',
    password: 'password',
    port: 5432,
})
const getChamps = (request, response) => {
    pool.query('SELECT * FROM champs ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getChampById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM champs WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createChamp = (request, response) => {
    const { full_name, age, gender, team_number } = request.body

    pool.query('INSERT INTO champs (full_name, age, gender, team_number) VALUES ($1, $2, $3, $4)', [full_name, age, gender, team_number], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Champ added with ID: ${results.insertId}`)
    })
}

const updateChamp = (request, response) => {
    const id = parseInt(request.params.id)
    const { full_name, age, gender, team_number } = request.body

    pool.query(
        'UPDATE champs SET full_name = $1, age = $2, gender = $3, team_number = $4 WHERE id = $5', [full_name, age, gender, team_number, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Champ modified with ID: ${id}`)
        }
    )
}

const deleteChamp = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM champs WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Champ deleted with ID: ${id}`)
    })
}

module.exports = {
    getChamps,
    getChampById,
    createChamp,
    updateChamp,
    deleteChamp,
}
