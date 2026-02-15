import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {UserPlus,Users,Mail,Loader2, Trash2} from 'lucide-react';



function App() {
  const [citizens, setCitizens] = useState([]);
  const [formData, setFormData] = useState({name: '', email: ''});
  const [loading, setLoading] = useState(false);

  const fetchCitizens = async () => {

    try {

      const response = await axios.get('http://localhost:8080/api/citizens');

      setCitizens(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deleteCitizen = async (id) => {

    try {
      
      await axios.delete(`http://localhost:8080/api/citizens/${id}`);
      fetchCitizens()


    } catch (error) {
      
      console.error("Error Deleting", error);
    }
  };

  useEffect(() => {fetchCitizens();}, []);

  const handleSubmit = async (e) => {

    e.preventDefault();
    setLoading(true);

    try {
      
      await axios.post('http://localhost:8080/api/citizens', formData);

      setFormData({name: '', email: ''});

      fetchCitizens();
    
    } finally {
      setLoading(false);
      
    }
  };

  return (<div style={{padding: '40px', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto'}}>
    <header>
      <h1 style={{display: 'flex', alignItems: 'center', gap: '10px'}}> <Users size={32}/></h1>
      </header>
      
      <section style={{background: 'f4f4f4', padding: '20px', borderRadius: '8px', marginBottom: '30px'}}>

      <form onSubmit={handleSubmit} style={{display: 'flex', gap: '10px'}}>

        <input placeholder="Full Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required style ={{padding: '8px', borderRadius: '4px', border: '1px solid #ccc', flex: 1}}/>
        <input placeholder="Email Address" type="email" value={formData.email} onChange ={(e) => setFormData({...formData, email: e.target.value})} required style={{padding: '8px', borderRadius: '4px', border: '1px solid #ccc', flex: 1}}/>

        <button type="submit" disabled={loading} style={{padding: '8px 16px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer'}}>
        {loading ? <Loader2 className="animate-spin"/> : <UserPlus size={18}/>}
        </button>
        
      </form>
      </section>

      <section>

        <h2>Registered Citizens</h2>
        <ul style={{listStyle: 'none', padding: 0}}> 
          {citizens.map(citizen => (<li key={citizen.id} style={{padding: '12px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between'}}> 
            <strong> {citizen.name} </strong> <span style={{color: '#666', display: 'flex', alignItems: 'center', gap: '5px'}}> 
              <Mail size={14}/> 
              {citizen.email} </span> 
              <button onClick={() => deleteCitizen(citizen.id)} style={{color: 'red', border: 'none', background: 'none', cursor: 'pointer'}}> <Trash2 size={18}/></button>
              </li>))} </ul>

      </section>
      
      
      </div>)
}

export default App
