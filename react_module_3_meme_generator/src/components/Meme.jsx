import React, { useState, useEffect } from "react";
import "../App.css";
import memesData from "../memeData.js";

/**
 * Challenge: Build the Header component
 */

/**
 * Challenge: Update our state to save the meme-related
 * data as an object called `meme`. It should have the
 * following 3 properties:
 * topText, bottomText, randomImage.
 *
 * The 2 text states can default to empty strings for now,
 * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
 *
 * Next, create a new state variable called `allMemeImages`
 * which will default to `memesData`, which we imported above
 *
 * Lastly, update the `getMemeImage` function and the markup
 * to reflect our newly reformed state object and array in the
 * correct way.
 */

export default function Meme() {
  const [allMemes, setAllMemes] = useState([]);



  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setAllMemes(() => data.data.memes))
    console.log(allMemes)
  }, [])

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  


  function generateMeme() {
    let value = Math.round(Math.random() * allMemes.length);
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: allMemes[value].url,
    }));
  }

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.prevent
  }

  return (
    <main>
      <div className="form" onSubmit={generateMeme}>
        <input 
        type="topText" 
        name="topText" 
        value={meme.topText}
        onChange={handleChange}
         />

        <input 
        type="bottomText" 
        name="bottomText"
        value={meme.bottomText}
        onChange={handleChange}
        />

        <button onClick={generateMeme} className="submit-button">
          Get a new meme image
        </button>
      </div>
      <div className="meme">
      <img src={meme.randomImage} alt="" className="meme-image" />
      <h2 className="meme--text top">{meme.topText}</h2>
      <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    
    </main>
  );
}
