const keyByFunction = <T extends Object>(array: T[], func: (value: T) => string): { [key: string]: T } => {
  const result: { [key: string]: T } = {}

  array.forEach(item => {
    result[func(item)] = item
  })

  return result
}

interface IndexUtils<T> {
  byFunction: (func: (value: T) => string) => { [key: string]: T }
}

const index = <T>(array: T[]): IndexUtils<T> => ({
  byFunction: (func: (value: T) => string) => keyByFunction(array, func)
})

export default index
