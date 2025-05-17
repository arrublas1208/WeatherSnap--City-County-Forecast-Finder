# WeatherSnap: City-County Forecast Finder

## Overview
WeatherSnap is a web-based weather search application that provides real-time weather information for cities or countries. It displays temperature in Celsius, wind speed, humidity, and dynamic weather icons based on current conditions. The application is built using HTML, CSS, and JavaScript, and it leverages the free OpenWeatherMap API to fetch weather data.

## Features
- **Search Functionality**: Enter a city or country to retrieve current weather details.
- **Weather Details**:
  - Temperature in Celsius
  - Wind speed
  - Humidity percentage
- **Dynamic Icons**: Visual weather icons that change based on the current weather conditions (e.g., sunny, cloudy, rainy).
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Technologies Used
- **HTML**: Structure of the web application.
- **CSS**: Styling and responsive design.
- **JavaScript**: Handles API requests, dynamic content updates, and user interactions.
- **OpenWeatherMap API**: Provides real-time weather data (free tier).

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/weathersnap.git
   ```
2. Navigate to the project directory:
   ```bash
   cd weathersnap
   ```
3. Open `index.html` in a web browser to run the application locally.

## API Setup
To use the OpenWeatherMap API:
1. Sign up at [OpenWeatherMap](https://openweathermap.org/) and obtain a free API key.
2. Create a `.env` file in the project root or update the JavaScript file with your API key:
   ```javascript
   const apiKey = 'YOUR_API_KEY';
   ```
3. Ensure the API key is included in the API request URL in the JavaScript code.

## Usage
1. Open the application in a browser.
2. Enter a city or country name in the search bar.
3. View the weather details, including temperature, wind speed, humidity, and a dynamic weather icon.

## Project Structure
```
weathersnap/
├── index.html        # Main HTML file
├── styles.css        # CSS styles
├── script.js         # JavaScript logic
├── assets/           # Images and icons
└── README.md         # Project documentation
```

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.



## Acknowledgments
- [OpenWeatherMap](https://openweathermap.org/) for providing the free weather API.
- Icons sourced from [source-if-any] (update with your icon source, if applicable).