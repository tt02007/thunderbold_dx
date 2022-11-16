let y = 0
let x = 2
let dx = 1
let x2 = 1
let dx2 = 1
let x3 = 0
let dx3 = 1
let bright = 250
basic.forever(function () {
    basic.clearScreen()
    y = 0
    if (x >= 4) {
        dx = -1
    } else if (x <= 0) {
        dx = 1
    }
    x += dx
    for (let index = 0; index < 5; index++) {
        led.plotBrightness(x, y, bright)
        led.plotBrightness(x - dx, y, 170)
        led.plotBrightness(x - dx * 2, y, 50)
        led.plotBrightness(x - dx * 3, y, 20)
        led.plotBrightness(x - dx * 4, y, 1)
        y += 1
    }
    basic.pause(300)
})
