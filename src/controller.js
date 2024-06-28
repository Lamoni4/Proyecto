import { pool } from './config/db.js'

export const getAll = async (req, res) => {
  const [usuarios] = await pool.query('SELECT * FROM users')
  res.json(usuarios)
}

export const deleteById = async (req, res) => {
  const { id } = req.params

  const resultado = await pool.execute('DELETE FROM users WHERE users_id = ?', [id])

  if (resultado.affectedRows === 1) {
    return res.json({ message: 'Usuario eliminado' })
  }

  return res.status(500).json({ message: 'No se pudo eliminar al usuario' })
}

export const store = async (req, res) => {
  console.log(req.body)
  res.send('Hola Mundo')
}
