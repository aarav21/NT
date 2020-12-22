Webcam.set({
    image_format:"png",
    png_quality: 90,
    width:350,
    height:300
})

camera = document.getElementById("camera");

Webcam.attach("#camera");

function takeSnapShot(){
    Webcam.snap(function (xyz){
        document.getElementById("result").innerHTML = "<img id='capturedImage' src = "+ xyz + ">";
    })
}

console.log(ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/VV-dua1Ci/model.json", d);

function d(){
    console.log("model has loaded")
}

function check(){
    img = document.getElementById("capturedImage");
    classifier.classify(img, getResult);

}

function getResult (error , results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        precentage = results[0].confidence*100;
        document.getElementById("objectName").innerHTML = results[0].label;
        document.getElementById("Accuracy").innerHTML = precentage.toFixed(1) + " %";
    }
}

