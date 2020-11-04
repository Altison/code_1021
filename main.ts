let k = 0
let value = false
input.onButtonPressed(Button.A, function () {
    for (let I = 0; I <= 18; I++) {
        k = Math.min(18 - I, I)
        for (let j = 0; j <= 4; j++) {
            if (I == 9) {
                basic.pause(1000)
                break;
            } else if (I < 9) {
                led.plot(4 - j, 4 - (k - j))
            } else {
                led.unplot(4 - j, 4 - (k - j))
            }
        }
        basic.pause(100)
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let I2 = 0; I2 <= 4; I2++) {
        for (let l = 0; l <= 4; l++) {
            if (I2 % 2 == l % 2) {
                led.plot(I2, l)
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    value = true
    for (let index = 0; index < 2; index++) {
        for (let x = 0; x <= 8; x++) {
            for (let I3 = 0; I3 <= 4; I3++) {
                for (let m = 0; m <= 4; m++) {
                    if (I3 + m == x) {
                        if (value) {
                            led.plot(4 - I3, 4 - m)
                        } else {
                            led.unplot(I3, m)
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
