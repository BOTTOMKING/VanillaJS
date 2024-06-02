const images = [
    "0.jpeg",
    "1.jpeg",
    "2.jpeg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const backgroundImage = document.createElement("img");

backgroundImage.src = `img/${chosenImage}`;
backgroundImage.alt = "Random background image";

backgroundImage.style.position = "absolute";
backgroundImage.style.top = "0";
backgroundImage.style.left = "0";
backgroundImage.style.width = "100%";
backgroundImage.style.height = "100%";
backgroundImage.style.objectFit = "cover";
backgroundImage.style.zIndex = "-1";

document.body.appendChild(backgroundImage);
