function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/VQjmGzGk1/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

var no_of_dogs = 0;
var no_of_cats = 0;

function gotResults(error,results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        random_number_r = Math.floor(Math.random()*255)+1;
        random_number_g = Math.floor(Math.random()*255)+1;
        random_number_b = Math.floor(Math.random()*255)+1;

        document.getElementById("detected_no").innerHTML = 'Detected Dogs ~ ' + no_of_dogs + '   Detected Cats ~ ' + no_of_cats;
        document.getElementById("detected_sound").innerHTML = 'Detected Sound Is Of ~ ' + results[0].label;
        document.getElementById("detected_no").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        document.getElementById("detected_sound").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        img = document.getElementById("image");

        if (results[0].label == "Barking") {           
            img.src = "dog.gif";
            no_of_dogs = no_of_dogs + 1;
        }

        else if (results[0].label = "Mewing") {
            img.src = "cat.gif";
            no_of_cats = no_of_cats + 1;
        }

        else {
            img.src = "ear.gif";
        }
    }
}
