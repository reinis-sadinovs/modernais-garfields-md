let gar=vgk.length; 
let atbildes=[];
let jaut_nr;
let pareiza_atbilde;
let pareizo_skaits;
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
           // this.divJautajums.innerHTML="JAUTĀJUMS";
            this.konteiners.appendChild(this.divJautajums);        
    
    
            this.divAtbilzuVar=document.createElement("div");
            this.divAtbilzuVar.setAttribute("id","atbilzu_var");
            // this.konteiners.appendChild(this.divAtbilzuVar);    
       
            jaut_nr=0;
            pareizo_skaits=0;
            this.jaunsJautajums();    
            
            // for(let ii=0;ii<6;ii++){
            //     //let str1="";
            //     this.radioVar= document.createElement("INPUT");
            //     this.radioLabel = document.createElement("LABEL");
            //     this.radioVar.setAttribute("type", "radio");
            //     this.radioVar.setAttribute("name", "r1");
            //     this.radioVar.setAttribute("value", ii);
            //     this.radioVar.setAttribute("id", `radio${ii}`);
            //     this.radioVar.onchange = () => this.izvele = ii;
            //     this.radioLabel.setAttribute("for", `radio${ii}`);
            //     str1=vgk[nr[jaut_nr][ii]][2];
            //     str1=str1.concat("<br>");
            //     his.radioLabel.innerHTML=str1;
            //     this.radioLabel.innerHTML="<br>";
            //     this.divAtbilzuVar.appendChild(this.radioVar);
            //     this.divAtbilzuVar.appendChild(this.radioLabel);
                
            // }            

            // this.atbildet = document.createElement("BUTTON");
            // this.atbildet.innerHTML = 'Atbildet';
            // this.atbildet.onclick = () => this.atbildets();
            // this.divAtbilzuVar.appendChild(this.atbildet);

        }
    }

    jaunsJautajums() {
        this.konteiners.appendChild(this.divAtbilzuVar);  

        this.Random_jautajumi();

        this.divJautajums.innerHTML=vgk[nr[jaut_nr][0]][1];

        pareiza_atbilde=0;
        console.log("pareiza_atbilde=",pareiza_atbilde);

        for(let ii=0;ii<6;ii++){
            let str1="";
            this.radioVar= document.createElement("INPUT");
            this.radioLabel = document.createElement("LABEL");
            this.radioVar.setAttribute("type", "radio");
            this.radioVar.setAttribute("name", "r1");
            this.radioVar.setAttribute("value", ii);
            this.radioVar.setAttribute("id", `radio${ii}`);
            this.radioVar.onchange = () => this.izvele = ii;
            this.radioLabel.setAttribute("for", `radio${ii}`);
            str1=vgk[nr[jaut_nr][ii]][2];
            str1=str1.concat("<br>");
            this.radioLabel.innerHTML=str1;
            this.divAtbilzuVar.appendChild(this.radioVar);
            this.divAtbilzuVar.appendChild(this.radioLabel);            
        }
        this.atbildet = document.createElement("BUTTON");
        this.atbildet.innerHTML = 'Atbildet';
        this.atbildet.onclick = () => this.atbildets();
        this.divAtbilzuVar.appendChild(this.atbildet);

    }  

    atbildets() {
        console.log("this.izvele=", this.izvele);
        if(this.izvele===null){alert("Izvēlieties galvaspilsētu!")}
        else{
            jaut_nr++;
            console.log("jaut_nr=",jaut_nr);
            if(this.izvele===pareiza_atbilde){
                pareizo_skaits++;}
            console.log("pareizo_skaits=",pareizo_skaits);
            if(jaut_nr<5){
                this.jaunsJautajums();
            }
            else {
                this.raadiit_punktus();
            } 
            this.izvele=null;          
        }
        
    }
    
    // izvele(i) {
    //     console.log(i);
    // }


    raadiit_punktus(){
        console.log("Punkti ",pareizo_skaits," no 5.")
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
            //console.log("nr[", i, "][0]=", nr[i][0]);
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
                //console.log("nr[", i, "][", j, "]=", nr[i][j]);
            }
        // console.log("Nākamais jautājums!!!!!!!!!!!!!!!!");
        }
    }


}