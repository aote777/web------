var keys = []

with (Array.prototype) {
  keys.push('something')
}

keys

Object.keys(Array.prototype[Symbol.unscopables])
