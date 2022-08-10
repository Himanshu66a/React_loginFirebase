import { React, useState } from "react";
import { Link } from "react-router-dom";
import './home.css'


function Home({ name }) {

  const [intro, setintro] = useState(name)
  const [flag, setflag] = useState(false)
  const [profileImg, setprofileImg] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png')


  const handleclick = () => {
    setflag(true);
  }

  const handleChange = (e) => {
    setintro(e.target.value)

  }

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setprofileImg(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };

  return (
    <div className="homepage">
      
      <h1>Homepage</h1>


      {/* <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2> */}


      <h2>Welcome - {intro}</h2>
      <button className="name-btn" onClick={handleclick}>Change Name</button>
      {flag &&
        <div>
          <input type="text" value={intro} onChange={handleChange} />
          <button className="done-btn" onClick={() => setflag(false)}>Done</button>
        </div>}



      <div className="container">
        <h1 className="heading">Add your Image</h1>
        <div className="img-holder">
          <img src={profileImg} alt="" id="img" className="img" />
        </div>
        <input type="file" accept="image/*" name="image-upload" id="input" onChange={imageHandler} />
        <div className="label">
          <label className="image-upload" htmlFor="input">
            {/* <i className="material-icons">add_photo_alternate</i> */}
            Choose your Photo
          </label>
        </div>
      </div>


    </div>
  );
}

export default Home;
