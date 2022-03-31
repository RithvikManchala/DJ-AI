song ="";

function preload()
{
    song = loadSound("music2.mp3");
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("Model is ready");
}

function gotPoses(error, results)
{
    if(error)
    {
        console.log(error);
    }
    else if(results.length >0)
    {
        console.log(results);
        scorRightWrist = results[0].pose.keypoints[10].score;
        scorLeftWrist = results[0].pose.keypoints[9].score;

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
    }
}

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

scorRightWrist = 0;
scorLeftWrist = 0;

function draw()
{
    image(video, 0, 0, 600, 500);
}

function play()
{
    song.play()
}