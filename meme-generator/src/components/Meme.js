import React from "react";

function Meme(){
    const [meme, setMeme] = React.useState({
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        })) 
    }

    return(
        <div className="container">
            <form action="no-submit">
                    <input type='text'/>
                    <input type='text'/>
                    <button type="button"
                        className="form--button"
                        onClick={getMemeImage}
                    >
                        Get a new meme image
                    </button>
            </form>
            <div className="meme">
                <img src={meme.randomImage} className="meme-image" alt="MemePic"/>
            </div>
        </div> 
    )
}

export default Meme
