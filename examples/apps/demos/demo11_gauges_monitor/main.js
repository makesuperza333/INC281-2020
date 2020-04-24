
let Gauges = [];

function init(link, ui) {

    // example1(link);
    example2(link);
}

function example1(link) {

    Gauges = createGauges();

    setInterval( () => {

        for(let i = 0; i<4; i++) {
            link.adcGet(i, (uid, val, err) => {
                if(!err) {
                    UpdateGauge(uid, val);
                    console.log(`adc${uid}: ${val}`);
                }
            });
        }
    }, 500);
}

function example2(link) {

    // Gauges = createGauges();
    // link.setAutoSampling({
    //     enbAdcs: [true,  true,  true,  true],
    //     enbPsws: [false, false, false, false],
    //     enbLeds: [false, false, false, false],
    //     interval: 500,
    //     callback: (data) => {
    //         console.log(`adcs: ${data.adc}`);
    //         Gauges.map( (g, i) => UpdateGauge(i, data.adc[i]));
    //     }
    // });
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
    const link = new WSLink({nrsCallback: (msg) => {
        console.log(msg)
    }});
    init(link, ui);

    link.adcSetAutoDetection(0, 100, 1000);
    link.adcSetAutoDetection(1, 100, 1000);
    link.adcSetAutoDetection(2, 100, 1000);
    link.adcSetAutoDetection(3, 100, 1000);
}
