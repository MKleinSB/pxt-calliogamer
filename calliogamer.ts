
enum CallioGamerPin {
    //% block="P0 (D-PAD up)"
    P0 = DAL.MICROBIT_ID_IO_P0,
    //% block="P1 (D-PAD left)"
    P1 = DAL.MICROBIT_ID_IO_P1,
    //% block="P2 (D-PAD right)"
    P2 = DAL.MICROBIT_ID_IO_P2,
    //% block="P3 (D-PAD down)"
    P3 = DAL.MICROBIT_ID_IO_P3,
    //% block="C8"
    C8 = DAL.MICROBIT_ID_IO_P8,
    //% block="C9"
    C9 = DAL.MICROBIT_ID_IO_P9,
    //% block="C13"
    C13 = DAL.MICROBIT_ID_IO_P13,
    //% block="C14"
    C14 = DAL.MICROBIT_ID_IO_P14,

}

/**
 * The event raised by the Calliogamer pins
 */
//%
enum CallioGamerEvent {
    //% block="down"
    Down = DAL.MICROBIT_BUTTON_EVT_DOWN,
    //% block="up"
    Up = DAL.MICROBIT_BUTTON_EVT_UP,
    //% block="click"
    Click = DAL.MICROBIT_BUTTON_EVT_CLICK,
}


//% weight=100 color=#8727B7 icon="\uf11b"
namespace calliogamer {
    let initialized = false

    function init(): void {
        if (!initialized) {
            initialized = true
            pins.pushButton(DigitalPin.P0)
            pins.pushButton(DigitalPin.P1)
            pins.pushButton(DigitalPin.P2)
            pins.pushButton(DigitalPin.P3)
            pins.pushButton(DigitalPin.P8)
            pins.pushButton(DigitalPin.P9)
            pins.pushButton(DigitalPin.P13)
            pins.pushButton(DigitalPin.P14)
        }
    }

    /**
     * Determines if a button is pressed
     * @param button the pin that acts as a button
     */
    //% weight=89
    //% blockId=calliogamer_ispressed block="%button|is pressed"
    //% button.fieldEditor="gridpicker" button.fieldOptions.columns=3
    export function isPressed(button: CallioGamerPin): boolean {
        const pin = <DigitalPin><number>button;
        pins.setPull(pin, PinPullMode.PullUp);
        return pins.digitalReadPin(<DigitalPin><number>button) == 0;
    }

    /**
     * Registers code to run when a Calliogamer event is detected.
     */
    //% weight=90
    //% blockId=calliogamer_onevent block="on %button|%event"
    //% button.fieldEditor="gridpicker" button.fieldOptions.columns=3
    //% event.fieldEditor="gridpicker" event.fieldOptions.columns=3
    export function onEvent(button: CallioGamerPin, event: CallioGamerEvent, handler: Action) {
        init();
        control.onEvent(<number>button, <number>event, handler); // register handler
    }
}