
basic.showIcon(1)

basic.forever(() => {

    input.onButtonPressed(Button.A, () => {

        for (let i = 20; i < 1000; i++) {
            music.playTone(i, 1)
        }
        for (let i = 1000; i > 20; i--) {
            music.playTone(i, 1)
        }

    })

    //basic.showString("Was geht", 100)
    basic.pause(500)

    for (let i = 0; i < 10; i++) {
        for(let j = 0; j < 50; j++) {
            let x = Math.floor(Math.random() * 5)
            let y = Math.floor(Math.random() * 5)
            led.plot(x,y)
            basic.pause(50)
            led.unplot(x,y)
        }
        let icon = Math.floor(Math.random()*20)
        basic.showIcon(icon)
    }
})