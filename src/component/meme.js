  import React from "react";

        

  const Meme = () => {

    const [ meme , setmeme] = React.useState({      //states for getting input from the meme
        toptext:"",
        bottomText:"",
        randomimage:""
    })

        const [allMemes, setAllMemes]= React.useState([])//for getting meme images
        
        

        React.useEffect(() => {
            fetch("https://api.imgflip.com/get_memes")
                .then(res => res.json())
                .then(data => setAllMemes(data.data.memes))
        }, [])
        // React.useEffect(()=>{
        //     fetch("https://api.imgflip.com/get_memes")
        //     .then(res => res.json())
        //     .then(data => setAllmemes(data.data.memes))
        // }, [])
        

        function getMemeImage(){
            const randomNumber = Math.floor(Math.random() * allMemes.length)
            const url = allMemes[randomNumber].url

            console.log(url)
            
            setmeme(prveMeme => ({
                ...prveMeme,
                randomimage:url
            }))
        }

            function handleChange(event){
                const {name, value} = event.target
                setmeme(perve=>({
                    ...perve,
                    [name]: value

                }))
            
        }

      return(
        <main>
        <div className="form">
            <input 
                type="text"
                placeholder="Top text"
                className="form--input"
                name="toptext"
                value={meme.toptext}
                onChange={handleChange}
            />
            <input 
                type="text"
                placeholder="Bottom text"
                className="form--input"
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
            />
            <button 
                className="form--button"
                onClick={getMemeImage}
            >
                Get a new meme image 🖼
            </button>
        </div>
        <div className="meme">
            <img src={meme.randomimage} className="meme--image" />
            <h2 className="meme--text top">{meme.toptext}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>

        </div>
    </main>
      )
  }

  export default Meme