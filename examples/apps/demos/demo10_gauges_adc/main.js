
let Gauges = [];

function init(link, ui) {

    example1(link, ui);
}

function example1(link, ui) {
    Gauges = createGauges(link, ui);
}

function UpdateGauge(ch, val) {
    val = val * 100 / 1023;
    Gauges[3-ch].setValue(val);
}

function createGauges(link, ui) {

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
        adcCallback: (ch, val, dif, dir) => {
            UpdateGauge(ch, val);
        }
    });
    init(link, ui);
}
