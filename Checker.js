class Checker {
  constructor(snake, food, d) {
    this.d = d
    this.wucha = 10 //10px误差
    this.snake = snake
    this.food = food
  }

  check() {
    return this._checkWall() && this._checkSnake() && this._checkFood()
  }

  regisiter(fn) {
    this.fn = fn
  }

  _checkFood() {
    const { snake, food } = this
    const [x1, y1] = snake.getHeadPos()
    const [x2, y2] = food.getFoodPos()
    if ((x1 - x2) ** 2 + (y1 - y2) ** 2 <= this.d ** 2 + this.wucha) {
      this.fn()
    }
    return true
  }

  _checkSnake() {
    const { prevbody } = this
    if (prevbody === undefined) {
      this.prevbody = this.snake.body.slice()
      return true
    }
    const { head, body } = this.snake
    const [x0, y0] = head
    for (let [x, y] of prevbody) {
      if (x == x0 && y == y0) {
        return false
      }
    }
    this.prevbody = body.slice()
    return true
  }

  _checkWall() {
    const [x, y] = this.snake.getHeadPos()
    if (x < 0 || y < 0) return false
    if (x >= canvas.width || y >= canvas.height) return false
    return true
  }
}
