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
    // volumeUp = (volume) =>{
    //      if (this.volume + volume <= 100 ) {
    //         this.volume += volume
    //     } else {
    //         this.volume = 100
    //     }
    // }

    volumeDown = (volume) => {
        if (this.volume - volume >= 0) {
            this.volume -= volume
        } else {
            this.volume = 0
        }
        
    }
    channelUp = (channel) => {
        if (this.channel + channel >= 50) {
            this.channel -= channel;
        } else if (this.channel - channel < 0) {
            this.channel += channel;
        } else {

        }
            
    }     
}
const television = new Tv("phillips")
// console.log(television);
// console.log(television.volumeFunc(true));