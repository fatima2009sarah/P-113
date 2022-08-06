function preload(){

}

function setup(){
   canvas = createCanvas(500 , 320);
   canvas.position(110 , 250);

   video = createCapture(VIDEO);
   video.hide();

  
}

function draw(){
   image(video ,50 , 35 , 400 , 260 );

   stroke(168 , 10,10);
   fill(168 , 10,10); 

   circle(40,25,40);
   circle(460,25,40);
   circle(40,290,40);
   circle(460,290,40);

   stroke(50,168,82);
   fill(50,168,82);

   rect(63,15,375,20);
   rect(63,290,375,20);
   rect(27,45,25,225);
   rect(448,45,25,225);

}

function take_snapshot(){
    save('image.png');
}
