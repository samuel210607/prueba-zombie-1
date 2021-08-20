var chica, chicaI, chicaM;
var zombie, zombieI, zombieG; 
var arbol, arbolI, rama, ramaI;
var flecha, flechaI; 
var fondo, fondoI, perdiste, perdisteI;
var sueloI;
var ramaG, flechaG, arbolG; 
var puntaje;
var cuadrosF, cuadrosA, cuadrosR;
  puntaje = 0;
 
  var state1= 1;

  var p1;
  var p2;
var p3;
var p4;
var p5;
var p6;
var p7;
var p8;
var p9;
var p10;
var p11;
var p12;

var i1;
var i2;
var i3;
var i4;
var i5;
var i6;
var i7;
var i8;
var i9;
var i10;
var i11;
var i12;

var play; 
var playI;

function preload(){
  chicaI = loadAnimation ("chica corriendo .gif");
  chicaM = loadImage ("chicaMuestaBuena.jpg");
  zombieI = loadAnimation ("zombie bueno corriendo.gif");
  arbolI = loadImage ("arbol.png");
  ramaI = loadImage ("rama.png");
  flechaI =loadImage ("flecha verde .png");
 
  fondoI = loadImage ("fondo funciona.png");
  
  zombieG = loadImage ("zombieGane.jpg");
  
  perdisteI = loadAnimation ("perdiste.gif");


  //pelicula del inicio
  p1 = loadImage ("niña1.JPG");
  p2 = loadImage ("asteroide1.PNG");
  p3 = loadImage ("asteroide2.PNG");
  p4 = loadImage ("asteroide3.PNG");
p5 = loadImage ("humanos1.PNG");
p6 = loadImage ("genetica.jpeg");
p7 = loadImage ("humano2.jpeg");
p8 = loadImage ("humanos3.JPG");
p9 = loadImage ("niña2.JPG");
p10 = loadImage ("cura1.PNG");
p11 = loadImage ("niña3.JPG");
p12 = loadImage ("Zombie1.PNG");

playI = loadImage ("play.jpg");
} 
function setup() {
  createCanvas (windowWidth, windowHeight);
  
  fondo = createSprite (0,0);
  fondo.addImage (fondoI);
  fondo.scale = 2.7;

  perdiste = createSprite (width/2, height/2);
  
  chica = createSprite (450, height-160);
  chica.addAnimation ("corriendo", chicaI);
  chica.addAnimation ("muerta", chicaM);
  chica.scale = 0.5;
 
  zombie = createSprite (70, height-120);
  zombie.addAnimation ("corriendo", zombieI);
  zombie.addAnimation ("gane", zombieG)
  zombie.scale = 0.4;
  zombie.setCollider ("rectangle", 0,90, 300,400);
  
  ramaG = createGroup ();
  
  flechaG = createGroup ();
  
  arbolG = createGroup ();
  
  sueloI = createSprite (width/2, height-0, width, 5);
  sueloI.visible = false; 

  i1 = createSprite (width/2, height/2);
  i2 = createSprite (0, 0);
  i3 = createSprite (0, 0);
  i4 = createSprite (0, 0);
  i5 = createSprite (0, 0);
  i6 = createSprite (0, 0);
  i7 = createSprite (0, 0);
  i8 = createSprite (0, 0);
  i9 = createSprite (0, 0);
  i10 = createSprite (0, 0);
  i11 = createSprite (0, 0);
  i12 = createSprite (0, 0);
  play = createSprite (width-35, height -50);

  play.scale =0.08;
i1.scale =0.7;

  i1.addImage (p1);
  i2.addImage (p2);
  i3.addImage (p3);
  i4.addImage (p4);
  i5.addImage (p5);
  i6.addImage (p6);
  i7.addImage (p7);
  i8.addImage (p8);
  i9.addImage (p9);
  i10.addImage (p10);
  i11.addImage (p11);
  i12.addImage (p12);
  play.addImage (playI);


}
function draw() {
    background ("black");
  
if (state1 === 1){
  i2.visible = false;
  i3.visible = false;
  i4.visible = false;
  i5.visible = false;
  i6.visible = false;
  i7.visible = false;
  i8.visible = false;
  i9.visible = false;
  i10.visible = false;
  i11.visible = false;
  i12.visible = false;

  fondo.visible = false;
  chica.visible = false;
  zombie.visible = false;
  perdiste.visible = false;

if (mousePressedOver (play) && state1 === 1){
state1 = 2;
}
}

if (state1 === 2){
  i1.visible = false;
  i3.visible = false;
  i4.visible = false;
  i5.visible = false;
  i6.visible = false;
  i7.visible = false;
  i8.visible = false;
  i9.visible = false;
  i10.visible = false;
  i11.visible = false;
  i12.visible = false;

  fondo.visible = false;
  chica.visible = false;
  zombie.visible = false;
  perdiste.visible = false;

if (mousePressedOver (play) && state1 === 2){
state1 = 3;
}
}
if (state1 === 3){
  i1.visible = false;
  i2.visible = false;
  i4.visible = false;
  i5.visible = false;
  i6.visible = false;
  i7.visible = false;
  i8.visible = false;
  i9.visible = false;
  i10.visible = false;
  i11.visible = false;
  i12.visible = false;

  fondo.visible = false;
  chica.visible = false;
  zombie.visible = false;
  perdiste.visible = false;

if (mousePressedOver (play) && state1 === 3){
state1 = 4;
}
}
if (state1 === 4){
  i1.visible = false;
  i2.visible = false;
  i3.visible = false;
  i5.visible = false;
  i6.visible = false;
  i7.visible = false;
  i8.visible = false;
  i9.visible = false;
  i10.visible = false;
  i11.visible = false;
  i12.visible = false;

  fondo.visible = false;
  chica.visible = false;
  zombie.visible = false;
  perdiste.visible = false;

if (mousePressedOver (play) && state1 === 4){
state1 = 5;
}
}

if (state1 === 5){
  i1.visible = false;
  i2.visible = false;
  i3.visible = false;
  i4.visible = false;
  i6.visible = false;
  i7.visible = false;
  i8.visible = false;
  i9.visible = false;
  i10.visible = false;
  i11.visible = false;
  i12.visible = false;

  fondo.visible = false;
  chica.visible = false;
  zombie.visible = false;
  perdiste.visible = false;

if (mousePressedOver (play) && state1 === 5){
state1 = 6;
}
}

if (state1 === 6){
  i1.visible = false;
  i2.visible = false;
  i3.visible = false;
  i4.visible = false;
  i5.visible = false;
  i7.visible = false;
  i8.visible = false;
  i9.visible = false;
  i10.visible = false;
  i11.visible = false;
  i12.visible = false;

  fondo.visible = false;
  chica.visible = false;
  zombie.visible = false;
  perdiste.visible = false;

if (mousePressedOver (play) && state1 === 6){
state1 = 7;
}
}
if (state1 === 7){
  i1.visible = false;
  i2.visible = false;
  i3.visible = false;
  i4.visible = false;
  i5.visible = false;
  i6.visible = false;
  i8.visible = false;
  i9.visible = false;
  i10.visible = false;
  i11.visible = false;
  i12.visible = false;

  fondo.visible = false;
  chica.visible = false;
  zombie.visible = false;
  perdiste.visible = false;

if (mousePressedOver (play) && state1 === 7){
state1 = 8;
}
}

if (state1 === 8){
  i1.visible = false;
  i2.visible = false;
  i3.visible = false;
  i4.visible = false;
  i5.visible = false;
  i6.visible = false;
  i7.visible = false;
  i9.visible = false;
  i10.visible = false;
  i11.visible = false;
  i12.visible = false;

  fondo.visible = false;
  chica.visible = false;
  zombie.visible = false;
  perdiste.visible = false;

if (mousePressedOver (play) && state1 === 8){
state1 = 9;
}
}

if (state1 === 9){
  i1.visible = false;
  i2.visible = false;
  i3.visible = false;
  i4.visible = false;
  i5.visible = false;
  i6.visible = false;
  i7.visible = false;
  i8.visible = false;
  i10.visible = false;
  i11.visible = false;
  i12.visible = false;

  fondo.visible = false;
  chica.visible = false;
  zombie.visible = false;
  perdiste.visible = false;

if (mousePressedOver (play) && state1 === 9){
state1 = 10;
}
}
if (state1 === 10){
  i1.visible = false;
  i2.visible = false;
  i3.visible = false;
  i4.visible = false;
  i5.visible = false;
  i6.visible = false;
  i7.visible = false;
  i8.visible = false;
  i9.visible = false;
  i11.visible = false;
  i12.visible = false;

  fondo.visible = false;
  chica.visible = false;
  zombie.visible = false;
  perdiste.visible = false;

if (mousePressedOver (play) && state1 === 10){
state1 = 11;
}
}

if (state1 === 11){
  i1.visible = false;
  i2.visible = false;
  i3.visible = false;
  i4.visible = false;
  i5.visible = false;
  i6.visible = false;
  i7.visible = false;
  i8.visible = false;
  i9.visible = false;
  i10.visible = false;
  i12.visible = false;

  fondo.visible = false;
  chica.visible = false;
  zombie.visible = false;
  perdiste.visible = false;

if (mousePressedOver (play) && state1 === 11){
state1 = 12;
}
}

if (state1 === 12){
  i1.visible = false;
  i2.visible = false;
  i3.visible = false;
  i4.visible = false;
  i5.visible = false;
  i6.visible = false;
  i7.visible = false;
  i8.visible = false;
  i9.visible = false;
  i10.visible = false;
  i11.visible = false;

  fondo.visible = false;
  chica.visible = false;
  zombie.visible = false;
  perdiste.visible = false;

if (mousePressedOver (play) && state1 ===12 ){
state1 = 20;
}
}

  
    if (state1 === 20)
    {
        perdiste.visible = false;

    fondo.velocityX = -(7 + puntaje/ 1000);
    if (fondo.x < 0){
    fondo.x = fondo.width/2;
    }
        puntaje = puntaje + Math.round(getFrameRate()/60);
      
    if (keyDown("space") && chica.y >= 360)
      {
   chica.velocityY = -15;
      
       }
    chica.velocityY = chica.velocityY + 0.8;
    // chica.collide (sueloI);
      
    ramas ();
    arboles ();
    flechas ();
      if (ramaG.isTouching (chica))
      {
      chica.changeAnimation ("muerta", chicaM);
      chica.x = chica.x - 2;
      }
      else
      {
      chica.changeAnimation ("corriendo", chicaI);
      }
      if (chica.isTouching (flechaG)){
        chica.x = chica.x + 3; 
      }

      if (arbolG.isTouching(chica))
      {
        state = end;
      }
      if (zombie.isTouching (chica)){
        state = end;

      }
    }

    if (state1 === 21){
      
  perdiste.addAnimation ("perdi", perdisteI);
  perdiste.scale = 1.3;
      perdiste.visible = true;
       fondo.visible = false;
      puntaje = puntaje;
     perdiste.depth = chica.depth;
       chica.depth = chica.depth+1;
       perdiste.depth = zombie.depth;
       zombie.depth = zombie.depth + 1;
       chica.changeAnimation ("muerta", chicaM);
       zombie.changeAnimation ("gane", zombieG);
       ramaG.destroyEach();
       arbolG.destroyEach();
       flechaG.destroyEach ();
    }
  if (mousePressedOver (perdiste)){
reset();
  }
       chica.collide (sueloI);
   drawSprites ();



}

 

function reset (){
state = play;
  perdiste.visible = false;
  fondo.visible = true;
  chica.changeAnimation ("corriendo", chicaI);
  zombie.changeAnimation ("corriendo", zombieI);
  puntaje = 0;
}

function ramas(){
  cuadrosR = Math.round(random(0, 1000));
  if (frameCount % cuadrosR === 0){
    rama = createSprite (width, height-30);
    rama.addImage(ramaI)
    rama.scale = 0.2; 
    rama.velocityX = -(7 + puntaje/ 100);
    rama.lifetime = 1000;
    
    chica.depth = rama.depth;
   rama.depth = rama.depth + 1;
    
    ramaG.add (rama);
  rama.setCollider ("rectangle",-13,0, 400, 150);
  
  }
 
}

function arboles (){
  cuadrosA = Math.round(random(0, 1000));
 if (frameCount % cuadrosA === 0 ){
    arbol = createSprite (width, height-60);
    arbol.addImage (arbolI);
    arbol.scale = 0.2;
  
    arbol.velocityX = -(7 + puntaje/ 100);
    arbol.lifetime = 1000;
 
    

   
    arbolG.add (arbol);
 arbol.setCollider ("circle", 0,0,200);
  }
}

function flechas (){
 
    if (frameCount % 500  === 0){
    flecha = createSprite (width, height-30);
    flecha.addImage (flechaI);
    flecha.scale = 0.08;
  
    flecha.velocityX = -(7 + puntaje/ 100);
    

    flecha.lifetime = 1000;
    
  chica.depth = flecha.depth;
    flecha.depth = flecha.depth + 1;
    flechaG.add (flecha);
   flecha.setCollider ("circle",0,0,400);
      
  }
}






