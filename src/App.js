import { useState } from 'react';
import './App.css';

function App() {

  const [firstName, setFirstName] = useState('');
  const [username, setUsername] = useState('');
  const [favColor, setFavColor] = useState('');
  const [favNumber, setFavNumber] = useState('');
  const [activity, setActivity] = useState('');

  const [info, setInfo] = useState(null);


  const handleSubmit = (event)=>{
    event.preventDefault()

    const data = {
      firstName: firstName,
      username: username,
      favColor: favColor,
      favNumber: favNumber,
      activity: activity
    };

    setInfo(data)

    setFirstName('');
    setUsername('');
    setFavColor('');
    setFavNumber('');
    setActivity('');

  }




  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Tech Test</h1>

        <div>
          <label>First name</label>
          <input 
          id='firstname' 
          type='text' 
          value={firstName} 
          onChange={(e)=>setFirstName(e.target.value)}/>
      </div>

      <div>
          <label>Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label >Favourite Colour:</label>
          <input
            type="text"
            id="favColor"
            value={favColor}
            onChange={(e) => setFavColor(e.target.value)}
          />
        </div>
        <div>
          <label>Favourite Number:</label>
          <input
            type="number"
            id="favNumber"
            value={favNumber}
            onChange={(e) => setFavNumber(e.target.value)}
          />
        </div>
        <div>
          <label>Daily Activity:</label>
          <textarea
            id="activity"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      {info && (
        <div>
          <h2>Submitted User Information:</h2>
          <p>First Name: {info.firstName}</p>
          <p>Username: {info.username}</p>
          <p>Favourite Colour: {info.favColor}</p>
          <p>Favourite Number: {info.favNumber}</p>
          <p>Daily Activity: {info.activity}</p>
        </div>
      )}
    </div>
  );
}

export default App;
