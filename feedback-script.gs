// Google Apps Script — deploy as web app (Anyone, no auth)
// Paste into script.google.com, Deploy > New Deployment > Web App > Anyone

const SHEET_ID = '1elthHaWRjI5WrAB8w8VsMKSlgLfv7ep9ymUHXFkUrw8';

function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
  sheet.appendRow([
    new Date().toISOString(),
    data.section || 'General',
    data.name || 'Anonymous',
    data.feedback || '',
    data.reportDate || ''
  ]);
  return ContentService.createTextOutput(JSON.stringify({ok:true}))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({status:'ok'}))
    .setMimeType(ContentService.MimeType.JSON);
}
