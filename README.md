# Riding Weather
![Riding Weather Logo](logo-full.png)

# Description

General Assembly Software Engineering Immersive Remote - 323 - Project 2:
Riding Weather is a web application allowing user submission of a location to check local weather conditions for the purpose of planning a motorcycle ride or other outdoor activity.

<img src="/home-needlocation.png" alt="Need Location View"/>
<img src="/home-currentweather.png" alt="Current Weather View"/>
<img src="/ridesoon.png" alt="Ride Soon View"/>
<img src="/ridelater.png" alt="Ride Later View"/>
<img src="/ridethisweek.png" alt="Ride This Week View"/>

# Deployed Application

https://ridingweather.herokuapp.com/

# Technologies Used

- ReactJS
- React Router
- Moment.js: For UNIX Datetime conversion
- Navigator WebAPI: Navigator.geolocation is used to obtain users current location if selected.
- React Places Autocomplete component: User input for address search via Google Maps Places Library and Google Maps Geocoder API. via GitHub user hibiken https://github.com/hibiken/react-places-autocomplete
- OpenWeatherMap.org OneCall API: Takes latitude and longitude coordinates and returns current weather conditions, 48 hour hourly forecast, 7 day daily forecast, and 5 day historical weather data(unused). https://openweathermap.org/api/one-call-api

# Getting Started

## Using the Riding Weather application:
- Open application in a browser
- Choose to use your current location via the Navigator WebAPI, or by typing a location into the Google Places search box.
- Once a location is selected, the application view will change to display weather conditions.
  - Weather Views: via React Router
  - '/' displays current weather conditions
  - '/ridesoon' displays a table of 6 hour forecast in hourly increments
  - '/ridelater' displays a table of 48 hour forecast in 3 hour increments
  - '/ridethisweek' displays a table of 7 daily forecast in morning, midday, and night timeframes.
- Clear the selected location using the "Reset Location" button at the bottom of the application.

## Editing the application
- If you wish to make edits to this application, you can find instructions for forking here. https://help.github.com/en/github/getting-started-with-github/fork-a-repo
- You will need your own OpenWeatherMap.org OneCall API key https://openweathermap.org/api/one-call-api and Google Cloud Platform API key with Google 


# Contribution
This is a solo project presented for evaluation and is not open for outside contributions at this time. However, if you have feature suggestions to improve the usability or functionality of the application, feel free to create an Issue on this GitHub repository. https://github.com/roryellis/ridingweather/issues 