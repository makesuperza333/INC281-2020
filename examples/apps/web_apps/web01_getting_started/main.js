

function main(ui) {

    const link = new WSLink();

    // link.ledSet(0);
    // link.ledClr(0);

    setInterval(function(){
        link.ledInv(0);
    },500);

}
