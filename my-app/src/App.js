import React, { useState } from 'react';

const App = () => {

  const [photo, setPhotos] = useState([]);
  
  const fetchImage = () => {
    fetch('https://api.thecatapi.com/v1/images/search')
    .then((res) => res.json())
    .then((data) => setPhotos(data))
  }

  return (

    <div style={
      {marginLeft: "10%",
        padding: "10px",
        borderRadius: "5px",
        backgroundColor: "#999",
        width: "500px"
      }
    }>
      <div>
        {photo.map((photo) => (
          <img key={photo.id} src={photo.url} alt={photo.title} width={500} height={500} />
        ))}

        <button 
        style={
          {
            padding: "10px",
            borderRadius: "5px",
            backgroundColor: "#DC84F3",
            color: "#392467",
            marginLeft: "44%",
            marginTop: "5px"
          }
        }
        onClick={fetchImage}>New Image</button>
      </div>
    </div>
  );
};
export default App;
