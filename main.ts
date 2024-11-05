calliogamer.onEvent(CallioGamerPin.P0, CallioGamerEvent.Up, function () {
    led.toggle(1, 1)
})
calliogamer.onEvent(CallioGamerPin.P0, CallioGamerEvent.Down, function () {
    led.toggle(0, 0)
})
