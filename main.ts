input.onButtonPressed(Button.A, function () {
    for (let I = 0; I <= 4; I++) {
        for (let j = 0; j <= 4; j++) {
            if (I % 2 == j % 2) {
                led.plot(I, j)
            }
        }
    }
})
