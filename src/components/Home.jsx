import React, { useEffect, useState } from 'react'

function Home() {
  const [image, setImage] = useState([])
  const [toggleValue, setToggleValue] = useState(false)
  const [dogData, setDogData] = useState([])

  // url = 'https://dog.ceo/api/breeds/image/random'

  useEffect(() => {
    async function getMemes() {
      const res = await fetch('https://dog.ceo/api/breeds/image/random')
      const data = await res.json()
      setImage(data)
    }
    getMemes()
  }, [toggleValue])
  console.log(image)

  function handleClick() {
    setToggleValue((currentToggle) => {
      return !currentToggle
    })
    setDogData((currentData) => {
      return [...currentData, image]
    })

    console.log(dogData)
  }

  return (
    <main>
      {/* <div className="form"> */}
      <button className="form--button" onClick={handleClick}>
        Get a new Dog image 🖼
      </button>
      <img
        src={image.message}
        alt="DogImage"
        className="meme--image"
        style={{ width: '200px' }}
      />
      {/* </div> */}
      {/* <div className="meme"></div> */}
      <br />

      <hr />
      <h2 style={{ textAlign: 'center' }}>All the seen dogs are listed here</h2>
      {dogData &&
        dogData.map((dog, index) => {
          return (
            <div
              key={index}
              style={{
                display: 'inline-flex',
                gap: '10px',
                position: 'relative',
              }}
            >
              <span className="number">#{index + 1}</span>
              <img
                src={dog.message}
                alt="SingleDogImg"
                style={{ width: '200px' }}
              />
            </div>
          )
        })}
    </main>
  )
}

export default Home
