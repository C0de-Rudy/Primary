const splitcalc = async (x,y) => {
    //equation for assigning score to key level
    score = 0.02029 * (x ** 3) - 0.9968 * (x ** 2) + 13.56 * x + 24.8;

    if (x==0) {
        return 0
    } else {
        score = 30;
        score = score + (x*5);

        if (in1>9) {
            score = score + 10
        }
        if (in1>4) {
            score = score + 5
        }
        if (in1>6) {
            score = score + 5
        }
        if (in1>8) {
            score = score + 5
        }
    }
}

const tempscore = async (x) => {
    const finalscore = x;

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
            finalscore = score1;
        }
    }
}

const acadscore = async (x) => {
    const finalscore = x;
    score1 = 0;
    score2 = 0;

    const in1 = parseInt(document.getElementById("acadtyr").value);
    const st1 = parseInt(document.getElementById("acadtyrst").value);
    const in2 = parseInt(document.getElementById("acadfort").value);
    const st2 = parseInt(document.getElementById("acadfortst").value);
}

const azurscore = async (x) => {
    const finalscore = x;
    score1 = 0;
    score2 = 0;

    const in1 = parseInt(document.getElementById("azurtyr").value);
    const st1 = parseInt(document.getElementById("azurtyrst").value);
    const in2 = parseInt(document.getElementById("azurfort").value);
    const st2 = parseInt(document.getElementById("azurfortst").value);
}

const nokscore = async (x) => {
    const finalscore = x;
    score1 = 0;
    score2 = 0;

    const in1 = parseInt(document.getElementById("noktyr").value);
    const st1 = parseInt(document.getElementById("noktyrst").value);
    const in2 = parseInt(document.getElementById("nokfort").value);
    const st2 = parseInt(document.getElementById("nokfortst").value); 
}

const rubyscore = async (x) => {
    const finalscore = x;
    score1 = 0;
    score2 = 0;

    const in1 = parseInt(document.getElementById("rubytyr").value);
    const st1 = parseInt(document.getElementById("rubytyrst").value);
    const in2 = parseInt(document.getElementById("rubyfort").value);
    const st2 = parseInt(document.getElementById("rubyfortst").value);
}

const courtscore = async (x) => {
    const finalscore = x;
    score1 = 0;
    score2 = 0;

    const in1 = parseInt(document.getElementById("courttyr").value);
    const st1 = parseInt(document.getElementById("courttyrst").value);
    const in2 = parseInt(document.getElementById("courtfort").value);
    const st2 = parseInt(document.getElementById("courtfortst").value);
}

const hallsscore = async (x) => {
    const finalscore = x;
    score1 = 0;
    score2 = 0;

    const in1 = parseInt(document.getElementById("hallstyr").value);
    const st1 = parseInt(document.getElementById("hallstyrst").value);
    const in2 = parseInt(document.getElementById("hallsfort").value);
    const st2 = parseInt(document.getElementById("hallsfortst").value);
}

const shadscore = async (x) => {
    const finalscore = x;
    score1 = 0;
    score2 = 0;

    const in1 = parseInt(document.getElementById("shadtyr").value);
    const st1 = parseInt(document.getElementById("shadtyrst").value);
    const in2 = parseInt(document.getElementById("shadfort").value);
    const st2 = parseInt(document.getElementById("shadfortst").value);  
}

//main func
const totalscore = async () => {

try {

    const tempele = document.getElementById("temprate");
    const tempint = parseInt(tempele);
    const temp = await tempscore(tempint);
    tempele.innerHTML = temp;

    const acadele = document.getElementById("acadrate");
    const acadint = parseInt(acadele);
    const acad = await acadscore(acadint);
    acadele.innerHTML = acad;

    const azurele = document.getElementById("azurrate");
    const azurint = parseInt(azurele);
    const azur = await azurscore(azurint);
    azurele.innerHTML = azur;

    const nokele = document.getElementById("nokrate");
    const nokint = parseInt(nokele);
    const nok = await nokscore(nokint);
    nokele.innerHTML = nok;

    const rubyele = document.getElementById("rubyrate");
    const rubyint = parseInt(rubyele);
    const ruby = await rubyscore(rubyint);
    rubyele.innerHTML = ruby;

    const courtele = document.getElementById("courtrate");
    const courtint = parseInt(courtele);
    const court = await courtscore(courtint);
    courtele.innerHTML = court;

    const hallsele = document.getElementById("hallsrate");
    const hallsint = parseInt(hallsele);
    const halls = await hallsscore(hallsint);
    hallsele.innerHTML = halls;

    const shadele = document.getElementById("shadrate");
    const shadint = parseInt(shadele);
    const shad = await shadscore(shadint);
    shadele.innerHTML = shad;

    

    const totalscore = temp + acad + azur + nok + ruby + court + halls + shad;
    const totalrate = document.getElementById("totalrate");
    totalrate.innerHTML = totalscore;    

        } catch (error) {

        console.error('error occurred', error);

    }
}
