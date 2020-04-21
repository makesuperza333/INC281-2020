
function createAdcGaugeIndicator(uid, className) {
    const gauge = new Gauge({
        uid: uid,
        className: className
    });
    return gauge;
}


function eccWebGuiReady(ui) {

    const g3 = createAdcGaugeIndicator(3, 'warning');
    const g2 = createAdcGaugeIndicator(2, 'success');
    const g1 = createAdcGaugeIndicator(1, 'info');
    const g0 = createAdcGaugeIndicator(0, 'default');
    const gs = [g0, g1, g2, g3];


    const link = new WSLink({
        conCallback: (obj) => { },
        datCallback: (obj, evt) => { },
        ledCallback: (ch, sts) => { console.log('led', ch, sts) },
        pswCallback: (ch, sts) => { console.log('psw', ch, sts)},
        adcCallback: (ch, val, dif, dir) => {
            console.log('adc', ch, val, dif, dir);
            gs[ch].setValue(100*val/1023);
        }
    });
}
