value = False

def on_button_pressed_a():
    for I in range(5):
        for j in range(5):
            if I % 2 == j % 2:
                led.plot(I, j)
input.on_button_pressed(Button.A, on_button_pressed_a)

def draw(bool: bool):
    for I2 in range(5):
        for k in range(5):
            x = 0
            if I2 + k == x:
                if value:
                    led.plot(4 - I2, 4 - k)
                else:
                    led.unplot(I2, k)

def on_button_pressed_b():
    global value
    value = True
    for index in range(2):
        for x2 in range(9):
            draw(value)
        value = False
        basic.pause(1000)
input.on_button_pressed(Button.B, on_button_pressed_b)
