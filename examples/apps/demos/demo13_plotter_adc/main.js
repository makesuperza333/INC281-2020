
let Plot = null;
let Data = [0,0,0,0];

function init(link) {

    example1(link);
}

function example1(link) {

    Plot = createPlot();
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

function updatePlot(ch, val) {
    val = val * 100 / 1023;
    Data[ch] = val;
    Plot.addPoint(Data);
}


function main(ui) {
    const link = new WSLink({
        conCallback: (ws) => { },
        datCallback: (ws, evt) => { },
        ledCallback: (ch, sts) => {  },
        pswCallback: (ch, sts) => { },
        adcCallback: (ch, val, dif, dir) => { updatePlot(ch, val) }
    });
    init(link);
}
