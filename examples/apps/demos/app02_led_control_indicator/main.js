
function createLedControlIndicator(link, label, uid, type) {
    const led = new Led({
        label: label,
        uid  : uid,
        type : type,
        callback: (obj) => {
            link.ledInv(uid);
            link.ledGet(uid, (status) => {
                led.setStatus(status);
            });
        }
    });
}

function init(link) {
    createLedControlIndicator(link, "LED3", 3, "yellow");
    createLedControlIndicator(link, "LED2", 2, "red");
    createLedControlIndicator(link, "LED1", 1, "cyan");
    createLedControlIndicator(link, "LED0", 0, "green");

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
