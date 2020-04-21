
let Plot = null;
let Data = [0,0,0,0];

function init(link) {

    example1(link);
}

function example1(link) {

    Plot = createPlot();

    let adcId = 0;
    let bits  = 0x00;
    setInterval( () => {
        link.adcGet(adcId, (uid, val, err) => {
            if(!err) {
                bits |= 1 << uid;
                Data[uid] = val * 100 / 1023;

                if(bits == 0x0F) {  // All channels are updated
                    Plot.addPoint(Data);
                    bits = 0x00;
                }
            }
            else {
                bits = 0x00;
            }
        });
        adcId = adcId == 3 ? 0 : adcId+1;
    },100);
}


function createPlot() {
    const plotter = new Plotter({
        min: 0,
        max: 100,
        samples: 30,
        step: 5
    });

    plotter.clear();
    return plotter;
}



function main(ui) {
    const link = new WSLink({
        conCallback: (ws) => { },
        datCallback: (ws, evt) => { },
        ledCallback: (ch, sts) => {  },
        pswCallback: (ch, sts) => { },
        adcCallback: (ch, val, dif, dir) => {  }
    });
    init(link);
}
