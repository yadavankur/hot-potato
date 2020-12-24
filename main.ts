input.onButtonPressed(Button.A, function () {
    Timer = randint(12, 20)
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Heart)
    while (Timer > 0) {
        Timer += -1
        basic.pause(100)
        if (Math.randomBoolean()) {
            soundExpression.twinkle.play()
        }
    }
    soundExpression.sad.play()
    basic.showIcon(IconNames.Skull)
})
let Timer = 0
music.setBuiltInSpeakerEnabled(true)
soundExpression.giggle.play()
basic.forever(function () {
	
})
