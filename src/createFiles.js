const { ensureDir, ensureFile, remove } = require('fs-extra')
const path = require('path')

const { capitalize } = require('./utils')

module.exports = async (name, { dev, base, init, schemaExtension, resolverExtension }) => {
  try {
    if (dev) {
      await remove(base)
    }

    const dir = base || './src/graphql'
    const nameCapitalized = name ? capitalize(name) : ''
    const log = []
    if (init) {
      const pathsInit = ['enums', 'types', 'scalars', 'interfaces']

      for (const p of pathsInit) {
        const tmp = path.join(dir, p)
        await ensureDir()
        log.push(tmp)
      }
    }

    if (!nameCapitalized) return 0

    const files = ['Mutations', 'Queries', 'Subscriptions', 'Inputs']
    const paths = ['mutations', 'queries', 'subscriptions']

    const graph = path.join(dir, nameCapitalized, `${nameCapitalized}.${schemaExtension}`)
    const resolver = path.join(dir, nameCapitalized, `${nameCapitalized}.${resolverExtension}`)

    await ensureFile(graph)
    await ensureFile(resolver)

    log.push(graph, resolver)

    for (const f of files) {
      const tmp = path.join(dir, nameCapitalized, `${nameCapitalized}${f}.${schemaExtension}`)
      await ensureFile(tmp)
      log.push(tmp)
    }

    for (const p of paths) {
      const tmp = path.join(dir, nameCapitalized, p)
      await ensureDir(tmp)
      log.push(tmp)
    }

    console.log('Created')
    log.forEach((l) => console.log(l))
    console.log('Finished... Enjoy!')
  } catch (error) {
    console.log(error.message)
  }
}
