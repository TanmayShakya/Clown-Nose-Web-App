 noseX = 0;
 noseY = 0;
 
 function preload(){
   clown_nose = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
 }

 function setup(){
   canvas = createCanvas(300,300);
   canvas.center();
   video = createCapture(VIDEO);
  video.size(300,300)
  video.hide()
  poseNet = ml5.poseNet(video,modelLoded);
  poseNet.on('pose',gotPoses);
 }

 function draw(){
  image(video,0,0,300,300);
  // fill(214, 19, 65);
  // stroke(214, 19, 65);
  // circle(noseX,noseY,20)
  image(clown_nose,noseX,noseY,30,30);
 }

 function takeSnapshot(){
    save('filterimage.png');
 }

 function modelLoded(){
  console.log("PoseNet Model is Initialised");
 }

 function gotPoses(results){
     if(results.length > 0 ){
      console.log(results);

       noseX =  results[0].pose.nose.x-15;
       noseY =  results[0].pose.nose.y-15;

      console.log("noseX = " + noseX);
      console.log("noseY = " + noseY);

     }
 }
