const fs = require('fs-extra')
const { capitalize } = require('./utils')

const createBase = ({ schemaName }) => {
  try {
    if (!schemaName) throw new Error('Schema name is required')
    const schema = capitalize(schemaName)
  } catch (error) {
    console.log(error.message)
  }
}
