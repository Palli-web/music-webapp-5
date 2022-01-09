song1 = "";
song2 = "";

song_1_Status = "";
song_2_Status = "";

function preload(){
song_1= loadSound("song1(1).mp3");
song_2 = loadSound("song2.mp3");
}

scoreRightWrist = 0;
scoreLeftWrist= 0;

rightWristX =0;
rightWristY = 0;

leftWristX = 0;
leftWristY  = 0;


function setup() {
    canvas  =createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();


    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}


function gotPoses(results)
{
    if(results.length > 0){
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWrist = " +rightWristX + "rightWristY = " + rightWristY);
        
        leftWristX = results[0].pose.leftWrist.x;
        lefttWristY = results[0].pose.lefttWrist.y;
        console.log("leftWrist = " +leftWristX + "leftWristY = " + leftWristY);
        

        console.log(results);
        scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreRightWrist = " + scoreRightWrist + "scoreLeft = " + scoreLeftWrist);
    }
}



function draw()  {
    image(video, 0,0,600,500);
    song_1_Status = song1.isPlaying();
    song_2_Status = song2.isPlaying();

    fill("#ff0000");
    stroke("#ff0000");
}

if(scoreRightWrist > 0.1);
{
    circle(rightWristX,rightWristY,20);
song2.stop();
if(song_1_Status == "false"){
    song1.play();
    document.getElementById("song").innerHTML = "Twinkle Twinkle little star";
}
}

if(scoreleftWrist > 0.1);
{
    circle(leftWristX,leftWristY,20);
song1.stop();
if(song_2_Status == "false"){
    song2.play();
    document.getElementById("song").innerHTML = "Jingle bell Jingle bell Jingle all the way";
}
}




function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}
