
function createAdcPlotter() {

    return plot;
}

function init(link) {
    const plot = new Plotter({
        min: 0,
        max: 100,
        samples: 30,
        step: 5
    });

    plot.clear();
    setInterval( () =>{
        link.adcGet(1, (ch, val) => {
            if(ch == 1) {
                plot.addPoint([-50,-50,-50,100*val/1023]);
            }

        });
    },200);
}

function eccWebGuiReady(ui) {
    const plot = new Plotter({
        min: 0,
        max: 100
    });
    plot.clear();

    const link = new WSLink({
        conCallback: (obj) => { },
        datCallback: (obj, evt) => { },
        ledCallback: (ch, sts) => { console.log('led', ch, sts) },
        pswCallback: (ch, sts) => { console.log('psw', ch, sts)},
        adcCallback: (ch, val, dif, dir) => {
            console.log('adc', ch, val, dif, dir);
            // if(ch == 1) {
            //     plot.addPoint(100*val/1023);
            // }
        }
    });
    init(link);

    // setInterval( () =>{
    //     link.ledInv(2);
    // },1000);
}
