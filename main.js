//let gar = 10; //!!Kaut kas nestrādā ar gar!!
let gar=vgk.length; //šo aizvākt pēc testēšanas un atdzīvināt vienu virs šīs rindas
let nr = []; //nodefinē viendimensiju masīvu
for (let i = 0; i < 7; i++) {
   nr[i] = []; //nodefinē masīvam otru dimensiju; nr[i][0] - glabā jautājuma numuru un tur pat arī pareizo atbildi
}

function jaunaSpele() {
    //this.inicializet();
    //console.log("Sākam jaunu spēli!");
    const g = new Galvaspilsetas;
    g.inicializet();
}

class Galvaspilsetas{
    constructor() {
        this.izvele = null;
        //this.statuss=Galvaspilsetas.STATUSS_NEINICIALIZETS;

    }

    inicializet() {
        this.konteiners = document.getElementById("konteiners");
        if (this.konteiners) {
            this.divPareizi = document.createElement("div");
            this.divPareizi.setAttribute("class", "pareizi");
            this.konteiners.appendChild(this.divPareizi);

            this.divJautajums=document.createElement("div");
            this.divJautajums.setAttribute("id","jautajums");
            this.divJautajums.innerHTML="JAUTĀJUMS";
            this.konteiners.appendChild(this.divJautajums);
                    
            this.divAtbilzuVar=document.createElement("div");
            this.divAtbilzuVar.setAttribute("id","atbilzu_var");
            this.konteiners.appendChild(this.divAtbilzuVar);

            let atbildes=[];

            for(let i=0;i<6;i++){
                let str1="Atbildes ";
                atbildes[i]=str1.concat(i,"<br>");
                this.radioVar= document.createElement("INPUT");
                this.radioLabel = document.createElement("LABEL");
                this.radioVar.setAttribute("type", "radio");
                this.radioVar.setAttribute("name", "r1");
                this.radioVar.setAttribute("value", i);
                this.radioVar.setAttribute("id", `radio${i}`);
                this.radioVar.onchange = () => this.izvele = i;
                this.radioLabel.setAttribute("for", `radio${i}`);
                this.radioLabel.innerHTML=atbildes[i];
                this.divAtbilzuVar.appendChild(this.radioVar);
                this.divAtbilzuVar.appendChild(this.radioLabel);
                
                //this.radioVar.innerHTML="Atbildes<br>";
            }

            this.atbildet = document.createElement("BUTTON");
            this.atbildet.innerHTML = 'Atbildet';
            this.atbildet.onclick = () => this.atbildets();
            this.divAtbilzuVar.appendChild(this.atbildet);

        }
    }

    jaunsJautajums() {

    }  

    atbildets() {
        console.log(this.izvele);
    }
    
    // izvele(i) {
    //     console.log(i);
    // }

  


Parbaudit() {
    var rad_poga = document.getElementsByName('r1');
    for (var i = 0; i < rad_poga.length; i++) {
        if (rad_poga[i].checked) {
           
            alert('Checked nr ' + i + ' radiobutton');
        }
    }
}



Random_jautajumi() {
    //Ģenerē Random 5 atšķirīgus skaitļus - jautājumu numurus
    //let gar=vgk.length;
    // let gar = 10; //šo aizvākt pēc testēšanas un atdzīvināt vienu virs šīs rindas
    // let nr = []; //nodefinē viendimensiju masīvu
    // for (let i = 0; i < 7; i++) {
    //     nr[i] = []; //nodefinē masīvam otru dimensiju; nr[i][0] - glabā jautājuma numuru un tur pat arī pareizo atbildi
    // }
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


}