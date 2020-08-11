var kittens = ["Milo", "Otis", "Garfield"] //define your array here
// Add your functions and code here
var destructivelyAppendKitten = name => {
  kittens.push(name);
  return kittens
}

var destructivelyPrependKitten = name => {
  kittens.unshift(name);
  return kittens
}

var destructivelyRemoveLastKitten = () => {
  kittens.pop()
  return kittens
}

var destructivelyRemoveFirstKitten = () => {
  kittens.shift()
  return kittens
}

var appendKitten = name => {
  return [...kittens, name]
}

var prependKitten = name => {
  return [name, ...kittens]
}

var removeLastKitten = () => {
  return kitten.slice(0, -1);
}
