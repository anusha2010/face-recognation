Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:95
});

Webcam.attach("#webcam");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='photo' src="+data_uri+">";
    })
}
    
console.log("ml5 version is ",ml5.version);
 imageClassifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/bBm1-LxLF/",modelloded);
function modelloded(){
    console.log("model is loaded!");
}

function check(){
    img= document.getElementById("photo");
    imageClassifier.classify(img, got_result);
}

function got_result( error,result){
 if(error){
    console.log(error);
 }
 else{
    console.log(result);
    document.getElementById("object").innerHTML=result[0].label;
    document.getElementById("accuracy").innerHTML=result[0].confidence.toFixed(4);
 }
 
}