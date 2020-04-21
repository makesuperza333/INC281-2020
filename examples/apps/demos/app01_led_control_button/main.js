// Helper function used to create the LED-Control-Button
function createLedControlButton(link, text, uid, className) {
    new Button({
        text     : text,
        uid      : uid,
        className: className,
        iconLeft : 'lightbulb-o',
        iconRight: 'none',
        callback : ( btn ) => {
            link.ledInv(uid);
        }
    });
}

function init(link) {

    createLedControlButton(link, "Pump ON/OFF", 3, 'info');
    createLedControlButton(link, "Valve ON/OFF", 2, 'success');
    createLedControlButton(link, "Fan ON/OFF", 1, 'primary');
    createLedControlButton(link, "Light ON/OFF", 0, 'danger');
}

function eccWebGuiReady(ui) {
    const link = new WSLink({
        conCallback: (obj) => { },
        datCallback: (obj, evt) => { },
        ledCallback: (ch, sts) => { console.log('led'+ch, sts) },
        pswCallback: (ch, sts) => { console.log('psw'+ch, sts)},
        adcCallback: (ch, val, dif, dir) => {console.log('adc'+ch, val, dif, dir)}
    });
    init(link);
}
