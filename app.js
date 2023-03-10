const splitcalc = async (x,y) => {
    let score = 0;
    if (x==0) {
        return 0
    } else {
        if (x==2) {
            score = 40;
        }
        if (x==3) {
            score = 45;
        }
        if (x==4) {
            score = 55;
        }
        if (x==5) {
            score = 60;
        }
        if (x==6) {
            score = 65;
        }
        if (x==7) {
            score = 75;
        }
        if (x==8) {
            score = 80;
        }   
        if (x==9) {
            score = 85;
        }
        if (x==10) {
            score = 100;
        }
        if (x==11) {
            score = 107;
        }
        if (x==12) {
            score = 114;
        }
        if (x==13) {
            score = 121;
        }
        if (x==14) {
            score = 128;
        }
        if (x==15) {
            score = 135;
        }
        if (x==16) {
            score = 142;
        }
        if (x==17) {
            score = 149;
        }
        if (x==18) {
            score = 156;
        }
        if (x==19) {
            score = 163;
        }
        if (x==20) {
            score = 170;
        }
        if (x==21) {
            score = 177;
        }
        if (x==22) {
            score = 184;
        }
        if (x==23) {
            score = 191;
        }
        if (x==24) {
            score = 198;
        }
        if (x==25) {
            score = 205;
        }
        if (x==26) {
            score = 212;
        }
        if (x==27) {
            score = 219;
        }
        if (x==28) {
            score = 226;
        }
        if (x==29) {
            score = 233;
        }
        if (x==30) {
            score = 240;
        }
    }
    if (y==0) {
        if (score>19) {
            score = 162.5;
        } else if (score>20) {
            score = score-7.5;
        }
    } else if (y==1) {
        score = score+1.25;
    } else if (y==2) {
        score = score+3;
    } else {
        score = score+5;
    }
    return score
}

const tempscore = async (x) => {
    let finalscore = x;

    const in1 = parseInt(document.getElementById("temptyr").value);
    const st1 = parseInt(document.getElementById("temptyrst").value);
    const in2 = parseInt(document.getElementById("tempfort").value);
    const st2 = parseInt(document.getElementById("tempfortst").value);

    if (in1&&in2==0) {
        finalscore = 0;
        return finalscore
    } else {
        const score1 = await splitcalc(in1,st1);
        const score2 = await splitcalc(in2,st2);
        if (score1>score2) {
            finalscore = (score1*1.5+score2*0.5);
        } else if (score1==score2) {
            finalscore = (score1*1.5+score2*0.5);
        } else {
            finalscore = (score2*1.5+score1*0.5);
        } 
    }
    return finalscore
}

const acadscore = async (x) => {
    let finalscore = x;

    const in1 = parseInt(document.getElementById("acadtyr").value);
    const st1 = parseInt(document.getElementById("acadtyrst").value);
    const in2 = parseInt(document.getElementById("acadfort").value);
    const st2 = parseInt(document.getElementById("acadfortst").value);

    if (in1&&in2==0) {
        finalscore = 0;
        return finalscore
    } else {
        const score1 = await splitcalc(in1,st1);
        const score2 = await splitcalc(in2,st2);
        if (score1>score2) {
            finalscore = (score1*1.5+score2*0.5);
        } else if (score1==score2) {
            finalscore = (score1*1.5+score2*0.5);
        } else {
            finalscore = (score2*1.5+score1*0.5);
        } 
    }
    return finalscore
}

const azurscore = async (x) => {
    let finalscore = x;

    const in1 = parseInt(document.getElementById("azurtyr").value);
    const st1 = parseInt(document.getElementById("azurtyrst").value);
    const in2 = parseInt(document.getElementById("azurfort").value);
    const st2 = parseInt(document.getElementById("azurfortst").value);

    if (in1&&in2==0) {
        finalscore = 0;
        return finalscore
    } else {
        const score1 = await splitcalc(in1,st1);
        const score2 = await splitcalc(in2,st2);
        if (score1>score2) {
            finalscore = (score1*1.5+score2*0.5);
        } else if (score1==score2) {
            finalscore = (score1*1.5+score2*0.5);
        } else {
            finalscore = (score2*1.5+score1*0.5);
        } 
    }
    return finalscore
}

const nokscore = async (x) => {
    let finalscore = x;

    const in1 = parseInt(document.getElementById("noktyr").value);
    const st1 = parseInt(document.getElementById("noktyrst").value);
    const in2 = parseInt(document.getElementById("nokfort").value);
    const st2 = parseInt(document.getElementById("nokfortst").value);

    if (in1&&in2==0) {
        finalscore = 0;
        return finalscore
    } else {
        const score1 = await splitcalc(in1,st1);
        const score2 = await splitcalc(in2,st2);
        if (score1>score2) {
            finalscore = (score1*1.5+score2*0.5);
        } else if (score1==score2) {
            finalscore = (score1*1.5+score2*0.5);
        } else {
            finalscore = (score2*1.5+score1*0.5);
        } 
    }
    return finalscore
}

const rubyscore = async (x) => {
    let finalscore = x;

    const in1 = parseInt(document.getElementById("rubytyr").value);
    const st1 = parseInt(document.getElementById("rubytyrst").value);
    const in2 = parseInt(document.getElementById("rubyfort").value);
    const st2 = parseInt(document.getElementById("rubyfortst").value);

    if (in1&&in2==0) {
        finalscore = 0;
        return finalscore
    } else {
        const score1 = await splitcalc(in1,st1);
        const score2 = await splitcalc(in2,st2);
        if (score1>score2) {
            finalscore = (score1*1.5+score2*0.5);
        } else if (score1==score2) {
            finalscore = (score1*1.5+score2*0.5);
        } else {
            finalscore = (score2*1.5+score1*0.5);
        } 
    }
    return finalscore
}

const courtscore = async (x) => {
    let finalscore = x;

    const in1 = parseInt(document.getElementById("courttyr").value);
    const st1 = parseInt(document.getElementById("courttyrst").value);
    const in2 = parseInt(document.getElementById("courtfort").value);
    const st2 = parseInt(document.getElementById("courtfortst").value);

    if (in1&&in2==0) {
        finalscore = 0;
        return finalscore
    } else {
        const score1 = await splitcalc(in1,st1);
        const score2 = await splitcalc(in2,st2);
        if (score1>score2) {
            finalscore = (score1*1.5+score2*0.5);
        } else if (score1==score2) {
            finalscore = (score1*1.5+score2*0.5);
        } else {
            finalscore = (score2*1.5+score1*0.5);
        } 
    }
    return finalscore
}

const hallsscore = async (x) => {
    let finalscore = x;

    const in1 = parseInt(document.getElementById("hallstyr").value);
    const st1 = parseInt(document.getElementById("hallstyrst").value);
    const in2 = parseInt(document.getElementById("hallsfort").value);
    const st2 = parseInt(document.getElementById("hallsfortst").value);

    if (in1&&in2==0) {
        finalscore = 0;
        return finalscore
    } else {
        const score1 = await splitcalc(in1,st1);
        const score2 = await splitcalc(in2,st2);
        if (score1>score2) {
            finalscore = (score1*1.5+score2*0.5);
        } else if (score1==score2) {
            finalscore = (score1*1.5+score2*0.5);
        } else {
            finalscore = (score2*1.5+score1*0.5);
        } 
    }
    return finalscore
}

const shadscore = async (x) => {
    let finalscore = x;

    const in1 = parseInt(document.getElementById("shadtyr").value);
    const st1 = parseInt(document.getElementById("shadtyrst").value);
    const in2 = parseInt(document.getElementById("shadfort").value);
    const st2 = parseInt(document.getElementById("shadfortst").value);

    if (in1&&in2==0) {
        finalscore = 0;
        return finalscore
    } else {
        const score1 = await splitcalc(in1,st1);
        const score2 = await splitcalc(in2,st2);
        if (score1>score2) {
            finalscore = (score1*1.5+score2*0.5);
        } else if (score1==score2) {
            finalscore = (score1*1.5+score2*0.5);
        } else {
            finalscore = (score2*1.5+score1*0.5);
        } 
    }
    return finalscore
}

//main func
const totalscore = async () => {

try {

    const tempele = document.getElementById("temprate");
    const tempint = parseInt(tempele);
    const temp = await tempscore(tempint);
    tempele.innerHTML = Math.round(temp * 10)/10;

    const acadele = document.getElementById("acadrate");
    const acadint = parseInt(acadele);
    const acad = await acadscore(acadint);
    acadele.innerHTML = Math.round(acad * 10)/10;

    const azurele = document.getElementById("azurrate");
    const azurint = parseInt(azurele);
    const azur = await azurscore(azurint);
    azurele.innerHTML = Math.round(azur * 10)/10;

    const nokele = document.getElementById("nokrate");
    const nokint = parseInt(nokele);
    const nok = await nokscore(nokint);
    nokele.innerHTML = Math.round(nok * 10)/10;

    const rubyele = document.getElementById("rubyrate");
    const rubyint = parseInt(rubyele);
    const ruby = await rubyscore(rubyint);
    rubyele.innerHTML = Math.round(ruby * 10)/10;

    const courtele = document.getElementById("courtrate");
    const courtint = parseInt(courtele);
    const court = await courtscore(courtint);
    courtele.innerHTML = Math.round(court * 10)/10;

    const hallsele = document.getElementById("hallsrate");
    const hallsint = parseInt(hallsele);
    const halls = await hallsscore(hallsint);
    hallsele.innerHTML = Math.round(halls * 10)/10;

    const shadele = document.getElementById("shadrate");
    const shadint = parseInt(shadele);
    const shad = await shadscore(shadint);
    shadele.innerHTML = Math.round(shad * 10)/10;

    

    const totalscore = temp + acad + azur + nok + ruby + court + halls + shad;
    const totalrate = document.getElementById("totalrate");
    totalrate.innerHTML = totalscore;    

        } catch (error) {

        console.error('error occurred', error);

    }
}
