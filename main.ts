let icon = 0
let y = 0
let x = 0
basic.showIcon(1)
basic.forever(function () {
    input.onButtonPressed(Button.A, () => {

        for (let i = 20; i < 1000; i++) {
            music.playTone(i, 1)
        }
        for (let j = 1000; j > 20; j--) {
            music.playTone(j, 1)
        }

    })

    input.onButtonPressed(Button.B, () => {
        for (let index = 0; index < 10; index++) {
            for (let index = 0; index < 50; index++) {
                x = Math.floor(Math.random() * 5)
                y = Math.floor(Math.random() * 5)
                led.plot(x, y)
                basic.pause(50)
                led.unplot(x, y)
            }
            icon = Math.floor(Math.random() * 20)
            basic.showIcon(icon)
        }
    })
    
})
