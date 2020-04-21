
function init(link, ui) {

    // example1(link, ui);

    example2(link, ui);
}


function example1(link, ui) {

    const g = new Gauge({
        className: 'success'
    });

    setInterval( () => {
        g.setValue( Math.random() * 100);
    }, 1000)
}


function example2(link, ui) {

    const classes = ['danger', 'warning', 'success', 'info'];
    const gauges = [];
    classes.forEach(c => {
        const g = new Gauge({
            className: c
        });
        gauges.push(g);
    });

    setInterval( () => {
        gauges.forEach(g => {
            g.setValue( Math.random() * 100);
        });
    }, 1000)
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
