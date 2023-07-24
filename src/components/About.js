import React from "react";
import "../App.css";
export default function About() {
  return (
    <>
      <div className="containerr">
        <header className="App-header aboutus">
          <h1>About Our Weather App</h1>
          <p>
            Welcome to our weather app! We are committed to providing accurate
            and up-to-date weather information to help you plan your day
            effectively.
          </p>
          <p>
            Our weather app uses reliable data sources and advanced forecasting
            techniques to deliver precise weather forecasts for your location
            and beyond.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions, feedback, or suggestions, please feel
            free to reach out to us:
          </p>
          <ul>
            <li>Email: contact@weatherapp.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Address: 123 Weather St, Cityville, USA</li>
            {/* Add more contact information if needed */}
          </ul>
        </header>
      </div>
    </>
  );
}
