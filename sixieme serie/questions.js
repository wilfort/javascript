var CreationTableauLangages = function () {
    var tab = ["Html", "CSS", "Java", "PHP"];
    return tab;

}

var CreationTableauNombres = function () {
    var tab = [0 , 1 , 2 , 3 , 4 , 5];
    return tab;
}

var RemplacementElement = function (langages) {
    langages[2]="Javascript";
    return langages;
}

var AjoutElementLangages = function (langages) {
    var tab = new Array;
    for (var c =0;c<6;c++){
        if (c==4)
        {tab[c]="Ruby"}
        else if
        (c==5)
        {tab[c]="Python"}
        else
        {tab[c]=langages[c]}
    }
    return tab;
}

var AjoutElementNombres = function (nombres) {
    var tab = new Array;
    tab[0]=-2;
    tab[1]=-1;
    for (var c =0;c<6;c++){
        
        tab[c+2]=nombres[c];
    }
    return tab;

}

var SuppressionPremierElement = function (langages) {
    var tab = new Array;
    for (var c =0;c<langages.length-1;c++){
        
        tab[c]=""+langages[c+1];
    }
    return tab;
}

var SuppressionDernierElement = function (langages) {
    var tab = new Array;
    for (var c =0;c<(langages.length -1);c++){
        tab[c]=langages[c];
    }
    return tab;
}

var ConversionChaineTableau = function (reseaux_sociaux_chaine) {
    var c =0;
    var tab = new Array;
    tab[c]="";
    for (var i = 0; i < reseaux_sociaux_chaine.length; i++) {
        if (reseaux_sociaux_chaine[i]==',')
        {c++;tab[c]="";}else{tab[c]+=reseaux_sociaux_chaine[i];}
      }
      return tab;
    
}

var ConversionTableauChaine = function (langages) {
    var tab="";
    for (var c =0;c<langages.length;c++){
        if(c<langages.length-1){
        tab+=langages[c]+",";}else{tab+=langages[c]}
    }
    return tab;
}

var TriTableau = function (reseaux_sociaux) {
    var tab = new Array;
    tab=reseaux_sociaux.sort();
    return tab;
}

var InversionTableau = function (reseaux_sociaux){
    var tab = new Array;
    for (var c =0;c<reseaux_sociaux.length;c++){
        tab[c]=reseaux_sociaux[reseaux_sociaux.length-(c+1)];
    }
    return tab;
}