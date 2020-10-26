value = False
I = 0
j = 0

def on_button_pressed_a():
    global value, I, j
    value = True
    I = 4
    j = 4
    for index in range(2):
        for x in range(10):
            y = 0
            while y <= min(5 - x, x):
                if value:
                    led.plot(0, min(4 - x, x))
                    I += 1
                    j += 1
                else:
                    led.unplot(0, 0)
                y += 1
            basic.pause(100)
            I = 0
        value = False
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    for I2 in range(5):
        for k in range(5):
            if I2 % 2 == k % 2:
                led.plot(I2, k)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global value
    value = True
    for index2 in range(2):
        for x2 in range(9):
            for I3 in range(5):
                for l in range(5):
                    if I3 + l == x2:
                        if value:
                            led.plot(4 - I3, 4 - l)
                        else:
                            led.unplot(I3, l)
            basic.pause(100)
        value = False
        basic.pause(1000)
input.on_button_pressed(Button.B, on_button_pressed_b)
