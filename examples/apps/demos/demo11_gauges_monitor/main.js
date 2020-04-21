
let Gauges = [];

function init(link, ui) {

    example1(link);
}

function example1(link) {

    Gauges = createGauges();

    let adcId = 0;
    setInterval( () => {
        link.adcGet(adcId, (uid, val, err) => {
            if(!err) {
                UpdateGauge(uid, val);
            }
        });
        adcId = (adcId + 1 ) % Gauges.length;
    }, 250);
}

function UpdateGauge(ch, val) {
    val = val * 100 / 1023;
    Gauges[3-ch].setValue(val);
}

function createGauges() {

    const classes = ['danger', 'warning', 'success', 'info'];
    const gauges = [];
    classes.forEach(c => {
        const g = new Gauge({
            className: c
        });
        gauges.push(g);
    });

    return gauges;
}



function main(ui) {
    const link = new WSLink({
        conCallback: (ws) => { },
        datCallback: (ws, evt) => { },
        ledCallback: (ch, sts) => {  },
        pswCallback: (ch, sts) => { },
        adcCallback: (ch, val, dif, dir) => { }
    });
    init(link, ui);
}
