

function createButtons() {
    const classes = ['dark', 'success', 'info', 'primary', 'danger', 'secondary'];
    const buttons = [];
    classes.map(c => {
        buttons.push(new Button({className: c, text: c}));
    });
    return buttons;
}

function cereateGrids(r, c) {
    const grids = new Grids({
        rows: r,
        cols: c
    });
    return grids;
}

function example1() {
    const buttons = createButtons();
    const grids   = cereateGrids(3, 2);

    grids.addChildTo(0,0,buttons[0]);
    grids.addChildTo(0,1,buttons[1]);
    grids.addChildTo(1,0,buttons[2]);
    grids.addChildTo(1,1,buttons[3]);
    grids.addChildTo(2,0,buttons[4]);
    grids.addChildTo(2,1,buttons[5]);
}


function example2() {
     const classes = ['dark', 'success', 'info', 'primary', 'danger', 'secondary'];
    const buttons = [];

    const Rows = 3;
    const Cols = 2;
    const grids   = cereateGrids(Rows, Cols);
    let bi=0;
    for(let r=0; r<Rows; r++) {
        for(let j=0; j<Cols; j++) {
            grids.addChildTo(r,j,buttons[bi++]);
        }
    }
}


function example3() {

    const Rows = 13;
    const Cols = 8;
    const grids   = cereateGrids(Rows, Cols);

    const NB = Rows*Cols;


    const classes = ['dark', 'success', 'info', 'primary', 'danger', 'secondary'];
    const buttons = [];
    for(let i=0; i<NB; i++) {
        // let k = Math.floor(Math.random()*classes.length);
        let k = i%classes.length;
        buttons.push(new Button({className: classes[k], text: classes[k]}));
    }


    let bi=0;
    for(let r=0; r<Rows; r++) {
        for(let j=0; j<Cols; j++) {
            grids.addChildTo(r,j,buttons[bi++]);
        }
    }
}

function init(link, ui) {
    // example1();
    // example2();
    example3();
}


function main(ui) {
    const link = new WSLink({
        pswCallback: (ch, sts) => {

        },
        adcCallback: (ch, val, dif, dir) => {

        }
    });
    init(link, ui);
}
