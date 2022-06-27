class Tv {
    constructor(brand) {
        this.brand = brand
        this.channel = 1
        this.volume = 50
    }

    volumeFunc = (up) => {
      if (up) {
        if (this.volume < 100) {
          return this.volume+= 1
        }
      } else if (this.volume > 0) {
        return  this.volume-= 1
      }

    }

    channelUp = (up) => {
      if (up) {
        if (this.channel < 50) {
          return this.channel+= this.channel
        }
      } else if (this.channel > 0) {
        return  this.channel-= this.channel
      }
    }     
}
const television = new Tv("phillips")
// console.log(television);
// console.log(television.volumeFunc(true));
console.log(television.channelUp(false));