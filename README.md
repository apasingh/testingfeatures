# testingfeatures

Testing the Google Calendar API integration on a Dummy React App for us in the D4 Constituent App.


## To Test:
git clone https://github.com/apasingh/testingfeatures.git

```cd features```

```npm install```

```npm install gapi-script```

```npm install dotenv```

```npm run dev```

This gets the website running locally.

## For API Part for a PUBLIC google calendar integration:

Following instructions are taken from Claude:
1. Go to Google Cloud Console


2. Navigate to https://console.cloud.google.com/
Select your project (or create a new one if needed)


3. Enable the Google Calendar API


4. In the left sidebar, click on "APIs & Services" > "Library"
Search for "Google Calendar API"
Click on the API and then click "Enable"


5. Create a Public API Key


6. Go to "APIs & Services" > "Credentials"
Click "Create Credentials"
Select "API key"
A new API key will be generated


7. Restrict the API Key (Important for security)


8. Click on the newly created API key to edit
Under "Application restrictions":

9. Select "HTTP referrers (web sites)"
Add your website's domain in "Website restrictions"

Example: https://www.yourdomain.com/*
Or for local development: http://localhost:*

10. Restrict API Key Usage
Under "API restrictions"
Select "Restrict key"
Choose "Google Calendar API"


11. Save the changes
Copy the API Key

You'll use this in your .env file as VITE_GOOGLE_API_KEY


Find Your Calendar ID


Open Google Calendar
Go to Settings > Calendar Settings
Find the Calendar ID (looks like an email address)
Use this in your .env file as VITE_GOOGLE_CALENDAR_ID

```
VITE_GOOGLE_API_KEY=your_api_key_here
VITE_GOOGLE_CALENDAR_ID=your_calendar_id@group.calendar.google.com
```

## Calendar UI
In features:

```
npm install @fullcalendar/react @fullcalendar/daygrid @fullcalendar/google-calendar
```
