import React, { useState } from 'react'
// import memedata from './MemesData.js'

function Meme() {
    // const [memeImage,setMemeImage] = useState("http://i.imgflip.com/1bij.jpg");

    const [meme, setMeme] = useState(
        {
            topText: "",
            bottomText: "",
            img: "http://i.imgflip.com/1bij.jpg"
        }
    )

    const [allmemeImages, setAllImages] = useState([])

    React.useEffect( () => {
        // const res = await fetch("https://api.imgflip.com/get_memes")
        // const data = await res.json()
        // setAllImages(data.data.memes)

        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllImages(data.data.memes))
    },[])

    const getMeme = () => {
        const randomNumber = Math.floor(Math.random() * allmemeImages.length);
        const url = allmemeImages[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            img: url
        }));
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    return (
        <main>
            <div className='form'>
                <input className='input' 
                    placeholder='Type here' 
                    type="text"
                    name='topText'
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input className='input'
                    placeholder='Type here'
                    type="text"
                    name='bottomText'
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button className='btn' onClick={getMeme}>
                    Get a new meme image 🖼
                </button>
            </div>
            <div className='meme'>
                <img src={meme.img} className='image' alt="" />
                <h2 className='meme--text top'>{meme.topText}</h2>
                <h2 className='meme--text bottom'>{meme.bottomText}</h2>
            </div>
        </main>
    )
}


export default Meme

