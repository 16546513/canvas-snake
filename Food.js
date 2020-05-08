class Food {
  constructor(d) {
    this.d = d
    this.r = d / 2
    this.left = 0
    this.top = 0
    this.update()
  }

  getFoodPos() {
    const { r, left, top } = this
    const centerX = left + r
    const centerY = top + r
    return [centerX, centerY]
  }

  update() {
    this.left = this._random(canvas.width)
    this.top = this._random(canvas.height)
  }

  _random(x) {
    return Math.random() * x - this.d
  }

  render() {
    const radius = this.r
    const x = this.left + radius
    const y = this.top + radius

    ctx.fillStyle = 'black'
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, 2 * Math.PI)
    ctx.fill()
    ctx.closePath()
  }
}
