class Main {
  constructor(snake, food) {
    this.snake = snake
    this.snake.regisiter(() => {
      cancelAnimationFrame(this.timer)
      this.immde = true
      this.timer = requestAnimationFrame(this.run.bind(this))
    })
    this.food = food
    this.audio = new Sound()
    this.pointer = new Pointer()
    this.checker = new Checker(snake, food, snake.r)
    this.checker.regisiter(() => {
      this.pointer.update()
      this.snake.incBody()
      this.food.update()
      this.audio.play()
    })
    this.speed = 20 //1s20px
    this.prevTime = Date.now()
    this.currTime = this.prevTime
    this.immde = false //加速
    this.timer = requestAnimationFrame(this.run.bind(this))
  }

  run() {
    cancelAnimationFrame(this.timer)
    this.currTime = Date.now()
    if (this.immde || this.currTime - this.prevTime > 500) {
      this.immde = false
      this.prevTime = this.currTime
      this.update()
      if (this.checker.check() == false) {
        return this.gameOver()
      }
      this.render()
    }
    this.tiemr = requestAnimationFrame(this.run.bind(this))
  }

  update() {
    this.snake.update()
  }

  gameOver() {
    alert('游戏结束，获得分数：' + this.pointer.getScore())
  }

  render() {
    this.clear()
    this.pointer.render()
    this.food.render()
    this.snake.render()
  }

  clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }
}
