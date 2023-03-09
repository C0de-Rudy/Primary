const tempscore = (x) => {
    
}

const acadscore = (x) => {
    
}

const azurscore = (x) => {
    
}

const nokscore = (x) => {
    
}

const rubyscore = (x) => {
    
}

const courtscore = (x) => {
    
}

const hallsscore = (x) => {
    
}

const shadscore = (x) => {
    
}

const totalscore = async () => {

try {
    
    try {
    const tempin = await document.getElementById("temprate")
    } catch (error) {
        console.error('error occured', error);
    } finally {
    tempin = parseInt(tempin)
    }

    const acadin = document.getElementById("acadrate")
    acadin = parseInt(acadin)

    const azurin = document.getElementById("azurrate")
    azurin = parseInt(azurin)

    const nokin = document.getElementById("nokrate")
    nokin = parseInt(nokin)

    const rubyin = document.getElementById("rubyrate")
    rubyin = parseInt(rubyin)

    const courtin = document.getElementById("courtrate")
    courtin = parseInt(courtin)

    const hallsin = document.getElementById("hallsrate")
    hallsin = parseInt(hallsin)

    const shadin = document.getElementById("shadrate")
    shadin = parseInt(shadin)

    } catch (error) {

        console.error('error occurred', error);

    } finally {

    const totalscore = document.getElementById("totalrate")
    totalscore = (tempin+acadin+azurin+nokin+rubyin+courtin+hallsin+shadin)
    }
}