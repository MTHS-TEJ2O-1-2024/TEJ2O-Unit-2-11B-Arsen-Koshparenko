/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Arsen Koshparenko
 * Created on: Oct 2024
 * This program give random number
*/

//setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)
let number1 = randint(0, 99)
let number2 = randint(0, 99)

//button a is pressed
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showString("#1:")
    basic.showNumber(number1)
    basic.showIcon(IconNames.Happy)
})
//button b is pressed
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString("#2:")
    basic.showNumber(number2)
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.Shake, function() {
    basic.clearScreen()
    if (number1 < number2) {
        basic.showString(number1 + " < " + number2);
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showString(number1 + " > " + number2);
        basic.showIcon(IconNames.Sad)
    }})

