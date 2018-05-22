var resultatQ
var tailleString = function (texte) {
  resultatQ= texte.length
  resultatQ=Number.parseInt(resultatQ);
  return resultatQ;
}
var remplaceECar = function (texte) {
  var c =0;
  resultatQ='';
  for (var i = 0; i < texte.length; i++) {
    if(((texte[i]=='e')||(texte[i]=='E'))&&c==0)
    {
      c=1;
     resultatQ=resultatQ+' ';  
    }
    else{resultatQ=resultatQ+texte[i];}  
    //resultatQ=resultatQ+texte[i];  
  }

  return resultatQ;
}
var concatString = function (texte1, texte2) {
  resultatQ=texte1+texte2;
  return resultatQ;
}
var afficherCar5 = function (texte) {
  resultatQ=texte.charAt(4);
  return resultatQ;
}
var afficher9Car = function (texte) {
  var c =0;
  resultatQ='';
  for (var i = 0; i < 9; i++) {
    resultatQ=resultatQ+texte[i]; 
    //resultatQ=resultatQ+texte[i];  
  }

  return resultatQ;
}
var majusculeString = function (texte) {
  resultatQ=texte.toUpperCase();
  return resultatQ;
}
var minusculeString = function (texte) {
  resultatQ=texte.toLowerCase();
  return resultatQ;
}
var SupprEspaceString = function (texte) {
  resultatQ=texte.trim();
  return resultatQ;
}
var IsString = function (texte) {
  var testS=Number.parseInt(texte);
  if (!Number.isInteger(testS))
  {resultatQ=true;}
  else
  {resultatQ=false;}
  return resultatQ;
}

var AfficherExtensionString = function (texte) {
  var c =0;
  resultatQ='';
  for (var i = 0; i < texte.length; i++) {
    if (texte[i]=='.')
    {c++;  }
    if (c==1 && texte[i]!='.')
    {resultatQ = resultatQ+texte[i]  }
  }

  return resultatQ;
}
var NombreEspaceString = function (texte) {

  resultatQ='';
  for (var i = 0; i < texte.length; i++) {
    if (texte[i]==' ')
    {resultatQ++;  }
  }

  return resultatQ;
}
var InverseString = function (texte) {
  resultatQ="";
  for (var i = 0; i < texte.length; i++) {
    resultatQ = texte[i] + resultatQ;
}
  return resultatQ;
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
resultatQ=Math.pow(x,y);
return resultatQ;
}
var valeurAbsolue = function (nombre) {
  resultatQ= Math.abs(nombre);
  return resultatQ;
}
var valeurAbsolueArray = function (array) {
  for(var i=0;i<array.length;i++)
  {
  array[i]= Math.abs(array[i]);
                                          }
  return array;
}
var sufaceCercle = function (rayon) {
  resultatQ=Math.PI*rayon*rayon;
  resultatQ=Math.round(resultatQ);
return resultatQ;
}
var hypothenuse = function (ab, ac) {
resultatQ=Math.sqrt((Math.pow(ab,2))+(Math.pow(ac,2)));
return resultatQ;
}
var calculIMC = function (poids, taille) {
  resultatQ=poids/(taille*taille);
  resultatQ=Number.parseFloat(resultatQ.toFixed(2));
  return resultatQ;
}
