const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

let d = 10
new Main(new Snake(d), new Food(d))
