function preload(){
    clown_nose = loadImage("https://i.postimg.cc/R0YygWBj/l1.png");
    }
    
    lipsX = 0;
    lipsY = 0;
    
    function setup(){
        canvas = createCanvas(300,300);
        canvas.center();
        video = createCapture(VIDEO);
        video.size(300,300);
        video.hide()
    
        poseNet = ml5.poseNet(video, modelLoaded);
        poseNet.on("pose", gotPoses);
    }
    
    function draw(){
    image(video, 0, 0, 300, 300);
    
    //circle(noseX, noseY, 20);
    //fill(255,0,0);
    //stroke(255,0,0);
    
    image(clown_nose, lipsX, lipsY, 50, 20);
    }
    
    function takeSnapshot(){
        save("myFilterImage.png");
    }
    
    function modelLoaded(){
        console.log("PoseNet is initialized");
    }
    
    function gotPoses(results){
        if(results.length > 0){
            console.log(results);
           
           lipsX = results[0].pose.nose.x-25;
           lipsY = results[0].pose.nose.y+20;
        }
    }
    
    