
/*
function main() {

    const gauge1 = new Gauge({
        max: 1023,
        ticksMajor: 200,
        ticksMinor: 40,
        className: "info"
    });

    const link = new WSLink({

        adcCallback: (uid, val, delta, dir, err) => {
            if(err == null) {
                //let percent = val*100/1023; // 0 - 100
                //gauge1.setValue(percent);
                if(uid == 2) {
                    gauge1.setValue(val);
                }
            }
        }
    });
}
*/

function main() {
    //              0           1         2        3
    const cls = ["success", "warning", "info", "danger"];
    const gauges = [];

    cls.map( (c, i)=>{

        const gauge = new Gauge({
            min: 0,
            max: 1023,
            ticksMajor: 200,
            ticksMinor: 40,
            className: c,
            uid: 3-i // 3, 2, 1, 0
        });
        gauges.push(gauge);
    });

    const link = new WSLink({

        adcCallback: (uid, val, delta, dir, err) => {
            if(err == null) {
                let idx = 3-uid;
                gauges[idx].setValue(val);
            }
        }
    });

    // link.adcSetAutoDetection(0, 5, 1000);
    // link.adcSetAutoDetection(1, 5, 1000);
    // link.adcSetAutoDetection(2, 5, 1000);
    // link.adcSetAutoDetection(3, 5, 1000);
    // uid, delta, interval
}
