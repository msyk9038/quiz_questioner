input.onButtonPressed(Button.A, function () {
    radio.sendString("A")
    basic.showString("A")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("B")
    basic.showString("B")
})
radio.setGroup(1)
basic.showString("?")
soundExpression.mysterious.playUntilDone()
