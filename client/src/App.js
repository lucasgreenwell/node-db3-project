import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [schemes, setSchemes] = useState([]);
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:5000/api/schemes/')
      .then(res => {
        setSchemes(res.data);
      })
      .catch(err => console.log(err))
  }, [trigger])

  const handleDelete = id => {
    axios.delete(`http://localhost:5000/api/schemes/${id}`)
      .then(res => {
        setTrigger(trigger + 1)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      {schemes.map(scheme => {
        return (<div>
          <p>{scheme.scheme_name}</p>
          <button onClick={() => {
            handleDelete(scheme.id)
          }}>Delete</button>
        </div>)
      })}
    </div>
  );
}

export default App;
