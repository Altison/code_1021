let value = false
input.onButtonPressed(Button.A, function () {
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
                    if (value && I + j == 8 - x) {
                        led.plot(I, j)
                    } else if (I + j == x) {
                        led.unplot(I, j)
                    }
                }
            }
            basic.pause(100)
        }
        basic.pause(1000)
        value = false
    }
})
