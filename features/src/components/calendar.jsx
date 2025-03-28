import React, { useState, useEffect } from 'react';
import { gapi } from 'gapi-script';

function Calendar() {
  const [events, setEvents] = useState([]);
  const API_KEY = import.meta.env.VITE_CALENDAR_API_KEY;
  const CALENDAR_ID = import.meta.env.VITE_CALENDAR_ID;

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        apiKey: API_KEY,
        discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
      }).then(() => {
        listUpcomingEvents();
      }).catch(error => {
        console.error('Error initializing gapi client', error);
      });
    };

    // Load the API client and auth library
    gapi.load('client', initClient);
  }, []);

  const listUpcomingEvents = () => {
    gapi.client.calendar.events.list({
      'calendarId': CALENDAR_ID,
      'timeMin': (new Date()).toISOString(),
      'showDeleted': false,
      'singleEvents': true,
      'maxResults': 10,
      'orderBy': 'startTime'
    }).then(response => {
      const events = response.result.items;
      setEvents(events);
    }).catch(error => {
      console.error('Error fetching events', error);
    });
  };

  return (
    <div className="calendar-container">
      <h2>Upcoming Events</h2>
      {events.length === 0 ? (
        <p>No upcoming events</p>
      ) : (
        <div className="events-list">
          {events.map(event => (
            <div key={event.id} className="event-item">
              <h3>{event.summary}</h3>
              <p>
                {new Date(event.start.dateTime || event.start.date).toLocaleString()}
              </p>
              {event.description && <p>{event.description}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Calendar;