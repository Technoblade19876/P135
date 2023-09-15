function setup() {
    canvas = createCanvas(300, 300);
    video = createCapture(VIDEO);
    video.size(300, 300);
    canvas.position(450, 250);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
    }
    
    function draw(){
        background("#00ffff");
    }
    
    function modelLoaded() {
        console.log("model loaded")
        
    }
    
    function gotPoses(results){
        if(results.length > 0){
            console.log(results);
        }
    }