let sonar = 0
basic.forever(function () {
    basic.showLeds(`
        # # . # #
        . # . # .
        . . # . .
        # . . . #
        . # # # .
        `)
})
basic.forever(function () {
    sonar = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    cuteBot.forward()
    basic.pause(200)
    cuteBot.motors(100, 40)
    basic.pause(1000)
    cuteBot.forward()
    basic.pause(200)
    cuteBot.forward()
    basic.pause(200)
    cuteBot.motors(40, 100)
    basic.pause(1000)
    cuteBot.forward()
    basic.pause(200)
    if (sonar > 2 && sonar == 15) {
        cuteBot.motors(0, 0)
        for (let index = 0; index < 2; index++) {
            music.playTone(880, music.beat(BeatFraction.Quarter))
        }
        basic.pause(2000)
        cuteBot.motors(randint(-50, -100), 0)
        basic.pause(500)
    }
})
