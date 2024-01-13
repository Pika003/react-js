import React, { useState , useEffect} from 'react'

function Github() {
  const [user, setUser] = useState("Pika003")
  const [profile, setProfile] = useState("")
  const [data, setData] = useState({});
  
  useEffect(() => {
    fetch(`https://api.github.com/users/${user}`)
    .then(res => res.json())
    .then(data => setData(data))
  }, [profile])

  function getInfo(e){
    setProfile(user)
  }
  

  return (
    <div style={{
        height: "85.6vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "25px",
        backgroundColor: "#2F4858",
        color: "white"
    }}>
        <div style={{
          display: "flex",
          gap: "10px"
        }}>
        <input 
        placeholder='Search ...'
        style={{
          padding: "10px",
          borderRadius: "5px",
          fontWeight: "bold"
        }}
        value={user}
        onChange={(e) => {
          setUser(e.target.value);
        }}
        type="text" />
        <button onClick={getInfo}
        style={{
          padding: "10px",
          borderRadius: "5px",
          fontWeight: "bold",
          backgroundColor: "#FF9671"
        }}>Submit</button>
        </div>
        <h1>{data.name}</h1>
        <h3>Github follower: {data.followers}</h3>
        <img src={data.avatar_url} alt="git_pic" width={300} />
        <h2>{data.bio}</h2>
    </div>
  )
}

export default Github
