//^ Start of code

img = "";
btn = document.querySelector('.home');
status = "";
objects = [];
objectDetector = "";
let objectName = document.querySelector('#nameOfObject');
let amt = "";



// 
btn.addEventListener('click', function() {
        //Test to see if working
        console.log("Button clicked");
        window.location = "index.html";
    });


    function preload() {
        // img = loadImage("pexels-jean-van-der-meulen-1454806.jpg");
           img = loadImage("livingroom.jpeg");
    }

        function setup() {
        canvas = createCanvas(500, 500);
        canvas.center();
        objectDetector = ml5.objectDetector('cocossd', modelLoaded);

        document.querySelector('.status').innerHTML = "Detecting Objects";
    }


        function modelLoaded() {
            console.log("Model Loaded!");
            status = true;
            objectDetector.detect(img, gotResult);
        }

            window.setTimeout(draw, 1000);

        function gotResult(error, results) {
            if(error) {
                console.error(error);
            }
                else if(results) {
                    console.log(results);
                    objects = results;
                }
            }

            
        function draw() {     
                       
                if(status != undefined) {
                    image(img, 0, 0, 500, 500);

                        for(i = 0; i < objects.length; i++) {

                        document.getElementById("status").innerHTML = "Status : Object Detected.";
                        fill(255, 0 , 0);
                        percent = floor(objects[i].confidence * 100);
                        text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
                        noFill();
                        stroke(255, 0 , 0);
                        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
                        amt = objects[0].label;
                        console.log(amt);
                        objectName.innerHTML = `Name of the object: ${amt}`;
                        

                        if(objects.length == 1) {
                    document.getElementById("noOfObjects").innerHTML = "There is " + objects.length + " object";
                        }                    
                            else if(objects.length > 1) {
                    document.getElementById("noOfObjects").innerHTML = "There are " + objects.length + " objects";
                    document.getElementById("status").innerHTML = "Status: Objects Found!";
                            }
                                // fill(r,g,b);
                                // percent = floor(objects[i].confidence * 100);
                                // text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
                                // noFill();
                                // stroke(r,g,b);
                                // rect(objects[i].x, objects[i].y, objects[i].width + 15, objects[i].height + 15);
                    }
                }
        }
// //^ End of Code.


//             //* This part is for the rectangle and label on the identified object
//             //! It doesn't work
//                         // fill(r,g,b);
//                         // percent = floor(objects[i].confidence * 100);
//                         // text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
//                         // noFill();
//                         // stroke(r,g,b);
//                         // rect(objects[i].x, objects[i].y, objects[i].width + 15, objects[i].height + 15);

// objectDetector= "";

// img = "";
// objects = [];
// status = "";

// function preload(){
//   img = loadImage('download.png');
// }


// function setup() {
//   canvas = createCanvas(640, 420);
//   canvas.center();
//   objectDetector = ml5.objectDetector('cocossd', modelLoaded);
//   document.getElementById("status").innerHTML = "Status : Detecting Objects";
// }

// function modelLoaded() {
//   console.log("Model Loaded!")
//   status = true;
//   objectDetector.detect(img, gotResult);
// }

// function gotResult(error, results) {
//   if (error) {
//     console.log(error);
//   }
//   console.log(results);
//   objects = results;
// }


// function draw() {
//   if (status != undefined) {
//   	  image(img, 0, 0, 640, 420);
//     for (var i = 0; i < objects.length; i++) {
//       document.getElementById("status").innerHTML = "Status : Objects Detected";

//       fill(255, 0, 0);
//       percent = floor(objects[i].confidence * 100);
//       text(objects[i].label + " " + percent + "%", objects[i].x + 5, objects[i].y + 15);
//       noFill();
//       stroke(255, 0, 0);
//       rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
//     }
//   }
// }