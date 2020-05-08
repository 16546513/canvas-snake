class Sound {
  constructor() {
    this.audio = new Audio('/assets/eat.mp3')
  }
  play() {
    this.audio.currentTime = 0
    this.audio.play()
  }
}
