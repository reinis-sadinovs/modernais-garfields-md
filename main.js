const jautajumu_skaits = 5;
const atbilzu_variantu_skaits = 6;
let gar = vgk.length;
let atbildes = [];
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
  const g = new Galvaspilsetas();
  this.textblock.innerHTML = ""; //Uzklikšķinot Sākt spēli, novāc visu veco
  g.inicializet();
}

class Galvaspilsetas {
  constructor() {
    this.izvele = null;
    //this.statuss=Galvaspilsetas.STATUSS_NEINICIALIZETS;
  }

  inicializet() {
    this.textblock = document.getElementById("textblock");
    if (this.textblock) {
      this.divProgres = document.createElement("div");
      this.divProgres.setAttribute("id", "progres");
      this.textblock.appendChild(this.divProgres);

      this.divPareizi = document.createElement("div");
      this.divPareizi.setAttribute("class", "pareizi");
      this.textblock.appendChild(this.divPareizi);

      this.divJautajums = document.createElement("div");
      this.divJautajums.setAttribute("id", "jautajums");
      this.textblock.appendChild(this.divJautajums);

      this.divAtbilzuVar = document.createElement("div");
      this.divAtbilzuVar.setAttribute("id", "atbilzu_var");

      this.divKarogi = document.createElement("img");
      this.divKarogi.setAttribute("id", "karogi");

      jaut_nr = 0;
      pareizo_skaits = 0;
      this.jaunsJautajums();
    }
  }

  jaunsJautajums() {
    this.divAtbilzuVar.innerHTML = ""; //Noklikšķinot Atbildēt novāc veco jautājumu
    this.textblock.appendChild(this.divAtbilzuVar);

    this.Random_jautajumi();

    //tmp="Jautājums "+jaut_nr+" no "+jautajumu_skaits+"<br>";
    //!!!!!!!!!!!!ARTŪRAM!!!!!!!!!! Šo pārveidot ar stiliem:
    this.divProgres.innerHTML =
      "Tavs tekošais rezultāts ir " +
      pareizo_skaits +
      ". no " +
      jautajumu_skaits +
      " iespējamiem. <br><br>Jautājums " +
      (jaut_nr + 1) +
      ". no " +
      jautajumu_skaits +
      "<br><br>";
    this.divJautajums.innerHTML = "<b>" + vgk[nr[jaut_nr][0]][1] + "</b><br>";
    this.divKarogi.setAttribute("src", vgk[nr[jaut_nr][0]][3]);
    this.divJautajums.appendChild(this.divKarogi);
    //Funkcija Random_jautajumi strādā tā, ka pareizā atbildē vienmēr ir 0.pozīcijā
    //Šeit ģenerē pareizās atbildes atrašanās vietu starp random izvēlētajām galvaspilsētām:
    pareiza_atbilde = Math.floor(Math.random() * 6);
    let tmp;
    tmp = nr[jaut_nr][0];
    nr[jaut_nr][0] = nr[jaut_nr][pareiza_atbilde];
    nr[jaut_nr][pareiza_atbilde] = tmp;

    console.log("pareiza_atbilde=", pareiza_atbilde);

    for (let ii = 0; ii < atbilzu_variantu_skaits; ii++) {
      let str1 = "";
      this.radioVar = document.createElement("INPUT");
      this.radioLabel = document.createElement("LABEL");
      this.radioVar.setAttribute("type", "radio");
      this.radioVar.setAttribute("name", "r1");
      this.radioVar.setAttribute("value", ii);
      this.radioVar.setAttribute("id", `radio${ii}`);
      this.radioVar.onchange = () => (this.izvele = ii);
      this.radioLabel.setAttribute("for", `radio${ii}`);
      str1 = vgk[nr[jaut_nr][ii]][2];
      str1 = str1.concat("<br>");
      this.radioLabel.innerHTML = str1;
      this.divAtbilzuVar.appendChild(this.radioVar);
      this.divAtbilzuVar.appendChild(this.radioLabel);
    }
    this.atbildet = document.createElement("BUTTON");
    this.atbildet.setAttribute("class", "poga");
    this.atbildet.innerHTML = "Atbildēt";
    this.atbildet.onclick = () => this.atbildets();
    this.divAtbilzuVar.appendChild(this.atbildet);
  }

  atbildets() {
    console.log("this.izvele=", this.izvele);
    if (this.izvele === null) {
      alert("Izvēlieties galvaspilsētu!");
    } else {
      jaut_nr++;
      console.log("jaut_nr=", jaut_nr);
      if (this.izvele === pareiza_atbilde) {
        pareizo_skaits++;
      }
      console.log("pareizo_skaits=", pareizo_skaits);
      if (jaut_nr < jautajumu_skaits) {
        this.jaunsJautajums();
      } else {
        this.raadiit_punktus();
      }
      this.izvele = null;
    }
  }

  raadiit_punktus() {
    this.textblock.innerHTML = "";
    this.textblock = document.getElementById("textblock");
    if (this.textblock) {
      this.divRezultats = document.createElement("div");
      this.divRezultats.setAttribute("id", "rezultats");
      this.textblock.appendChild(this.divRezultats);
      this.divRezultats.innerHTML =
        "Punkti " +
        pareizo_skaits +
        " no " +
        jautajumu_skaits +
        ". <br> <img src='images/congratulation.jpg'>";
    }

    console.log("Punkti ", pareizo_skaits, " no ", jautajumu_skaits, ".");
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
    let ir = [],
      irr = [];
    for (let i = 0; i < gar; i++) {
      ir.push(false); //jautājumu numuriem
      irr.push(false); //atbilžu variantu numuriem
    }
    for (let i = 0; i < jautajumu_skaits; i++) {
      do {
        sk = Math.floor(Math.random() * gar);
      } while (ir[sk]); //kamēr random skaitlis ir aizņemts, ģenerē nākamo
      nr[i][0] = sk; //ieraksta masīvā izvēlēto jautājuma numuru un PAREIZĀS galvaspilsētas numurs ir tieši tas pats
      //console.log("nr[", i, "][0]=", nr[i][0]);
      ir[sk] = true;
      for (let j = 0; j < gar; j++) {
        //  Šis domāts atbilžu variantiem
        irr[j] = false;
      }
      irr[sk] = true;
      //Ģenerē nepareizo galvaspilsētu numurus:
      for (let j = 1; j < atbilzu_variantu_skaits; j++) {
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
