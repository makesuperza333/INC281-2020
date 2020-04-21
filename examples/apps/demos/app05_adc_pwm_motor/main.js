


function init(link) {
    const adcChannelId = 0;
    const pwmChannelId = 0;
    const samplingInterval = 500;
    link.pwmFrequency(0, 1000);
    setInterval( () => {
        link.adcGet(adcChannelId, (ch, val, err) => {
            if(!err) {
                if(ch == adcChannelId) {
                    let dutyRatio = val/1023;
                    link.pwmDutyRatio(pwmChannelId, dutyRatio);
                }
            }
        });
    },samplingInterval);
}

function eccWebGuiReady(ui) {
    const link = new WSLink({
        conCallback: (obj) => {
            init(link);
        },
        datCallback: (obj, evt) => { },
        ledCallback: (ch, sts) => { console.log('led', ch, sts) },
        pswCallback: (ch, sts) => { console.log('psw', ch, sts)},
        adcCallback: (ch, val, dif, dir) => { console.log('adc', ch, val, dif, dir); }
    });

    const title = new Text();
    title.setText("Motor Speed Controller");
    title.setColor("lime");
    title.setSize(50);
    title.getHeadIcon().setColor("orange");
    title.getHeadIcon().setIcon("gear");
    title.getTailIcon().setColor("yellow");
    title.setDisplay('block');

    const info = new Text();
    info.setText("Adjust the value of the POT #0 to change the motor speed");
    info.setDisplay('block');
    info.setStyle("color:yellow");
    info.getWrapper().style.border = "0px";
    info.getWrapper().style.backgroundColor = "rgba(0,0,0,0)";
    info.getHeadIcon().setIcon("none");
    info.getTailIcon().setIcon("none");
}
