
function init(link, ui) {
    // example1(link);
    // example2(link, ui);

    example3(link, ui);
}

function example1(link) {
    new Knob({
        className: 'warning',
        uid: 0,
        callback: (uid, val) => {
            console.log(uid, val);
        }
    });
}

function example2(link, ui) {

    const gauge = new Gauge();
    ui.Utils.newLine();
    new Knob({
        className: 'warning',
        uid: 0,
        callback: (uid, val) => {
            gauge.setValue(val);
        }
    });
}

function example3(link, ui) {

    const classes = ['danger', 'warning', 'success', 'info'];

    // Creage gauge
    let uid = 3;
    const gauges = [];
    classes.forEach(c => {
        const g = new Gauge({
            className: c,
            uid: uid
        });
        uid -= 1;
        gauges.push(g);
    });

    ui.Utils.newLine(); // New line

    // Create knobs
    uid = 0;
    classes.forEach(c => {
        const knob = new Knob({
            className: c,
            uid: uid,
            callback: (uid, val) => {
                gauges[uid].setValue(val);
            }
        });
        uid += 1;
    });
}




function main(ui) {
    const link = new WSLink({
        conCallback: (ws) => { },
        datCallback: (ws, evt) => { },
        ledCallback: (ch, sts) => {  },
        pswCallback: (ch, sts) => { },
        adcCallback: (ch, val, dif, dir) => {  }
    });
    init(link, ui);
}
