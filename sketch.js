const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg;

function preload() {

    getBackgroundImg()
}

function setup() {
    var canvas = createCanvas(1200, 700);
    engine = Engine.create();
    world = engine.world;

}

function draw() {
    if (backgroundImg) {
        background(backgroundImg)
    }
    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg() {
    var response = await fetch("https://worldtimeapi.org/api/timezone/asia/kolkata")
    var responseJSON = await response.json()

    var datetime = responseJSON.datetime
    var hour = datetime.slice(11, 13)

    if (hour >= 05 && hour <= 06) {
        bg = "sunrise1.png"

    }

    if (hour >= 07 && hour <= 08) {
        bg = "sunrise2.png"

    }

    if (hour >= 09 && hour <= 10) {
        bg = "sunrise3.png"

    }

    if (hour >= 11 && hour <= 13) {
        bg = "sunrise4.png"

    }

    if (hour >= 14 && hour <= 16) {
        bg = "sunrise6.png"

    }

    if (hour >= 17 && hour <= 19) {
        bg = "sunset11.png"

    }

    if (hour >= 20 && hour <= 04) {
        bg = "sunset12.png"

    }
    backgroundImg = loadImage(bg)
        // write code to fetch time from API

    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here

}