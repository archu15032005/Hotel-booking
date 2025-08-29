const { google } = require('googleapis');
const keys = require('./service-account.json');

const auth = new google.auth.GoogleAuth({
  credentials: keys,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"]
});

const sheets = google.sheets({ version: 'v4', auth });
const spreadsheetId = 'YOUR_SPREADSHEET_ID';

// Read Rooms
async function getRooms() {
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: 'Rooms!A2:F',
  });
  console.log(res.data.values);
}
getRooms();
