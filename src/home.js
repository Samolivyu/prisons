import React, { useState, useEffect } from 'react';
import './HomePage.css'; // Import your CSS file for styling

const HomePage = () => {
  // State variables to hold statistics data
  const [activeUsers, setActiveUsers] = useState(0);
  const [inmatePopulation, setInmatePopulation] = useState(0);
  const [visitsToPrison, setVisitsToPrison] = useState(0);
  const [prisonName, setPrisonName] = useState("");

  // Fetch data when the component mounts
  useEffect(() => {
    // Example fetch request to fetch statistics data
    fetch('https://api.example.com/stats')
      .then(response => response.json())
      .then(data => {
        setActiveUsers(data.activeUsers);
        setInmatePopulation(data.inmatePopulation);
        setVisitsToPrison(data.visitsToPrison);
      });

    // Example fetch request to fetch prison name
    fetch('https://api.example.com/prisonName')
      .then(response => response.json())
      .then(data => {
        setPrisonName(data.prisonName);
      });
  }, []);

  return (
    
    <div className="container">
      <div className="header">
        <h1>{[prisonName]}</h1>
      </div>

      <div className='notification-icon-container'>
        <i className='material-icons'>inbox</i>
      </div>

      <div className="dashboard">
        <div className='dashboard-top-container'>

        <div className="visits_to_prison">
              <div className='textbox'>
              <h2>Total Number of Visits: </h2>
              </div>

              <div className='numericbox'>
              <p>{visitsToPrison}</p>
              </div>
          </div>
        </div>

          <div className="inmate_population">
              <div className='textbox'>
              <h2>Inmate Population: </h2>
          </div>

          <div className='numericbox'>
              <p>{inmatePopulation}</p>
              </div>
          </div>
          
          <div className="active_users">
              <div className='textbox'>
              <h2>Active Users: </h2>
              </div>

            <div className='numericbox'>
              <p>{activeUsers}</p>
            </div>
          </div>

        </div>
        <div className='upcoming_events'>
          <div className='events_textbox'>
            <h2>Upcoming Events:</h2>
            <div className='urgent-note-textbox'>
              <p className='urgent_note'>Urgent</p>
              {/* v-for for urgent notes*/}
            </div>

            <div className='to_review_textbox'>
              <p className='to_review_note'>To Review</p>
              {/*v-for for the review_notes*/}
            </div>
          </div>
        </div>
    </div>
  );
};

export default HomePage;
