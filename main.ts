let value = false
let x = 0
let y = 0
input.onButtonPressed(Button.A, function () {
    value = true
    for (let index = 0; index < 2; index++) {
        for (let I = 0; I <= 8; I++) {
            x = Math.max(4 - I, 0)
            y = Math.min(8 - I, 4)
            for (let j = 0; j <= Math.min(8 - I, I); j++) {
                if (value) {
                    led.plot(x, y)
                } else {
                    led.unplot(4 - x, 4 - y)
                }
                x += 1
                y += -1
            }
            basic.pause(100)
        }
        value = false
        basic.pause(1000)
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let I = 0; I <= 4; I++) {
        for (let j = 0; j <= 4; j++) {
            if (I % 2 == j % 2) {
                led.plot(I, j)
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    value = true
    for (let index = 0; index < 2; index++) {
        for (let x = 0; x <= 8; x++) {
            for (let I = 0; I <= 4; I++) {
                for (let j = 0; j <= 4; j++) {
                    if (I + j == x) {
                        if (value) {
                            led.plot(4 - I, 4 - j)
                        } else {
                            led.unplot(I, j)
                        }
                    }
                }
            }
            basic.pause(100)
        }
        value = false
        basic.pause(1000)
    }
})
