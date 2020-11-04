k = 0
value = False

def on_button_pressed_a():
    global k
    for I in range(19):
        k = min(18 - I, I)
        for j in range(5):
            if I == 9:
                basic.pause(1000)
                break
            elif I < 9:
                led.plot(4 - j, 4 - (k - j))
            else:
                led.unplot(4 - j, 4 - (k - j))
        basic.pause(100)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    for I2 in range(5):
        for l in range(5):
            if I2 % 2 == l % 2:
                led.plot(I2, l)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global value
    value = True
    for index in range(2):
        for x in range(9):
            for I3 in range(5):
                for m in range(5):
                    if I3 + m == x:
                        if value:
                            led.plot(4 - I3, 4 - m)
                        else:
                            led.unplot(I3, m)
            basic.pause(100)
        value = False
        basic.pause(1000)
input.on_button_pressed(Button.B, on_button_pressed_b)
