function Parbaudit() {
    var rad_poga = document.getElementsByName('r1');
    for (var i = 0; i < rad_poga.length; i++) {
        if (rad_poga[i].checked) {
           
            alert('Checked nr ' + i + ' radiobutton');
        }
    }
}

function Random_jautajumi() {
    //Ģenerē Random 5 atšķirīgus skaitļus - jautājumu numurus
    //let gar=varduSaraksts.length;
    let gar = 10; //šo aizvākt pēc testēšanas un atdzīvināt vienu virs šīs rindas
    let nr = []; //nodefinē viendimensiju masīvu
    for (let i = 0; i < 7; i++) {
        nr[i] = []; //nodefinē masīvam otru dimensiju; nr[i][0] - glabā jautājuma numuru un tur pat arī pareizo atbildi
    }
    let sk;
    let ir = [], irr = [];
    for (let i = 0; i < gar; i++) {
        ir.push(false); //jautājumu numuriem
        irr.push(false); //atbilžu variantu numuriem
    }
    for (let i = 0; i < 5; i++) {
        //5 jautājumi
        do {
            sk = Math.floor(Math.random() * gar);
        } while (ir[sk]); //kamēr random skaitlis ir aizņemts, ģenerē nākamo
        nr[i][0] = sk; //ieraksta masīvā izvēlēto jautājuma numuru
        console.log("nr[", i, "][0]=", nr[i][0]);
        ir[sk] = true;
        for (let j = 0; j < gar; j++) {
            //  Šis domāts atbilžu variantiem
            irr[j] = false;
        }
        irr[sk] = true;
        for (let j = 1; j < 6; j++) {
            do {
                sk = Math.floor(Math.random() * gar);
            } while (irr[sk]);
            nr[i][j] = sk;
            irr[sk] = true;
            console.log("nr[", i, "][", j, "]=", nr[i][j]);
        }
        console.log("Nākamais jautājums!!!!!!!!!!!!!!!!");
    }
}