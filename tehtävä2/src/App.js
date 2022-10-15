import React, { useState,useEffect } from 'react';
import './App.css';
// https://zoo-animal-api.herokuapp.com/

function App() {
const [animal, setAnimal] = useState(null);
const [weightMin,setWeightMin] = useState(null);
const [weightMax,setWeightMax] = useState(null);
const [imageLink,setImageLink] = useState(null);
const [animalType, setAnimalType] = useState(null);
const [diet, setDiet] = useState(null);
const [location, setLocation] = useState(null);
const [habitat, setHabitat] = useState(null);
const [lifespan, setLifespan] = useState(null);
const [maxLength, setMaxLength] = useState(null);
const [minLength, setMinLength] = useState(null);
const [latinName, setLatinName] = useState(null);


const url = "https://zoo-animal-api.herokuapp.com/animals/rand"
  // fetch and set name, weight_min,weight_max, image_link from the URL, setState to the values
  const fetchAnimal = () => {
      document.querySelector(".newReq").disabled = true;
      document.querySelector(".newReq").style.backgroundColor = "grey";
      document.querySelector(".newReq").innerText = "Loading...";
      setTimeout(() => {
        document.querySelector(".newReq").disabled = false;
        document.querySelector(".newReq").style.backgroundColor = "brown";
        document.querySelector(".newReq").innerText = "Get new animal";
      }, 3000);
    fetch(url)
    .then(response => response.json())
    .then(data => {
      setAnimal(data.name);
      setWeightMin(data.weight_min);
      setWeightMax(data.weight_max);
      setImageLink(data.image_link);
      setAnimalType(data.animal_type);
      setDiet(data.diet);
      setLocation(data.geo_range);
      setHabitat(data.habitat);
      setLifespan(data.lifespan);
      setMaxLength(data.length_max);
      setMinLength(data.length_min);
      setLatinName(data.latin_name);
    })
  }
  useEffect(() => {
    fetchAnimal();
  }, []);
  
return (
    <>
    <div className="header"><h1>RandomZooAnimals</h1>
    <button onClick={fetchAnimal} className="newReq">Get new animal</button>
    </div>
    <div className="display">
      <div className="image"><img src={imageLink} className="image" alt="animal"/></div>
      <div className="info">
        <div id="stats" className="animalName"><p>Names of the animal:</p>{animal} ~ {latinName} (latin)</div>
        <div id="stats" className="animalType"><p>Type of the animal:</p> {animalType}</div>
        <div id="stats" className="diet"><p>The species eats:</p> {diet}</div>
        <div id="stats" className="location"><p>Location:</p> {location}</div>
        <div id="stats" className="habitat"><p>Habitat:</p> {habitat}</div>
        <div id="stats" className="lifespan"><p>Lifespan:</p> {lifespan} years</div>
        <div id="stats" className="weight"><p>Weightrange:</p>{weightMin} - {weightMax} lbs</div>
        <div id="stats" className="length"><p>Lengthrange:</p>{minLength} - {maxLength} ft.</div>
    </div>
    </div>
    <div classNamme="spacemaker"></div>
    </>
  );
}

export default App;
