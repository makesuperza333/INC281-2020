

function init(link) {

    // example1(link);
    // example2(link);
    example3(link);
}

function example1(link) {
    const plotter = new Plotter({
        min: 0,
        max: 100,
        samples: 30,
        step: 5
    });

    plotter.clear();
    setInterval( () =>{
        let val = Math.random()*100;
        plotter.addPoint([val, -50, -50, -50]);
    },500);
}

function example2(link) {
    const plotter = new Plotter({
        min: 0,
        max: 100,
        samples: 30,
        step: 5
    });

    plotter.clear();
    setInterval( () =>{
        let val0 = Math.random()*100;
        let val1 = Math.random()*100;
        plotter.addPoint([val0, val1, -50, -50]);
    },500);
}


function example3(link) {
    const plotter = new Plotter({
        min: -3,
        max: +3,
        samples: 30,
        step: 5
    });

    plotter.clear();
    let t = 0.0;
    setInterval( () =>{
        let s = Math.sin(Math.PI*2*5*t/30);
        plotter.addPoint([s, s*1.5, s*2.0, s*2.5]);
        t += 0.5;
    },200);
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
