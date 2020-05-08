class Snake {
  constructor(d) {
    this.d = d
    this.r = d / 2
    this.head = [canvas.width / 2, canvas.height / 2]
    this.body = [[this.head[0] + this.d, this.head[1]]]
    this.color = {
      head: 'blue',
      body: 'green',
    }
    //37:left 38:up 39:right 40:down
    this.inc = false //increase body
    this.dirs = new Set([37, 38, 39, 40])
    this.dir = 37
    this._bind()
  }

  _bind() {
    window.addEventListener('keydown', ({ keyCode: code }) => {
      if (this.dirs.has(code)) {
        this.dir = code
        this.fn && this.fn()
      }
    })
  }

  regisiter(fn) {
    this.fn = fn
  }

  getHeadPos() {
    const { head, r } = this
    const centerX = head[0] + r
    const centerY = head[1] + r
    return [centerX, centerY]
  }

  // getDir() {
  //   return this.dir
  // }

  incBody() {
    this.inc = true
  }

  update() {
    const { head: oldHead, body, dir, d } = this
    const newHead = [...oldHead]
    switch (dir) {
      case 37:
        newHead[0] -= d
        break
      case 38:
        newHead[1] -= d
        break
      case 39:
        newHead[0] += d
        break
      case 40:
        newHead[1] += d
        break
    }
    if (this.inc) {
      this.inc = false
    } else {
      body.pop()
    }
    body.unshift(oldHead)
    this.head = newHead
  }

  render() {
    const { head, body, r, color } = this
    this._draw(head[0] + r, head[1] + r, color.head)
    for (let [left, top] of body) {
      this._draw(left + r, top + r, color.body)
    }
  }

  _draw(x, y, color) {
    ctx.fillStyle = color
    ctx.beginPath()
    ctx.arc(x, y, this.r, 0, 2 * Math.PI)
    ctx.fill()
    ctx.closePath()
  }
}
