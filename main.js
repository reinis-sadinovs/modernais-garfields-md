let gar = 10; //!!Kaut kas nestrādā ar gar!!
//let gar=vgk.length; //šo aizvākt pēc testēšanas un atdzīvināt vienu virs šīs rindas
let nr = []; //nodefinē viendimensiju masīvu
for (let i = 0; i < 7; i++) {
   nr[i] = []; //nodefinē masīvam otru dimensiju; nr[i][0] - glabā jautājuma numuru un tur pat arī pareizo atbildi
}

class Galvaspilsetas{
    constructor(id) {
        this.konteiners = document.getElementById(id);
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
            this.radioVar.setAttribute("type", "radio");
            this.radioVar.setAttribute("name", "r1");
            this.radioVar.setAttribute("value", i);
            this.divAtbilzuVar.appendChild(this.radioVar);
            this.radioVar.innerHTML=atbildes[i];
            //this.radioVar.innerHTML="Atbildes<br>";
        }

        }
        //this.statuss=Galvaspilsetas.STATUSS_NEINICIALIZETS;

    }

    jaunaSpele() {
        // console.log("Sākam jaunu spēli!");
      }

    jaunsJautajums() {

      }    

  


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