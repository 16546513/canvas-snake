class Pointer {
  constructor() {
    this.points = 0
    this.size = 16
    ctx.font = `${this.size}px serif`
  }

  update() {
    this.points++
  }

  getScore() {
    return this.points
  }

  render() {
    ctx.fillStyle = 'black'
    ctx.fillText('分数：' + this.points, 0, this.size)
  }
}
