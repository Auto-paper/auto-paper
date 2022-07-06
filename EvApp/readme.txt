# EvApp
This document contains detailed funcionality of EvApp

EvApp will operate in two states: 1. Logged-out state (default after first install) 2. Logged-in state

## Logging-in process
App will take Evaluator's Credentials to log in.

## Logged-in state
Dashboard will be displayed after sucessful login.

### Scanning process
The scanning process will be a recursive process expalined below:

The main answer sheet's QR will be scanned by the evaluator. The EvApp will send the extracted Sheet ID and Signature to the server for validation. The response of the server could be one of the following:

<ul>
  <li><b>Verification of additional sheet:</b> In this case, the app will prompt to scan the additional sheet's QR, information about which will be sent to the server for validation and getting next response.</li>
  
  <li><b>Entry of Marks:</b> Server will send this response after all sheets are verified. After getting this response, the app will display all the Sheet IDs (Main and additional) and ask to input marks. The marks entered will be securely forwarded to the server, along with evaluator's ID associated with it.</li>
  
  <li><b>Failure:</b> The server will send this response if the scanned sheet's attributes doesn't match any record in the central database.</li></ul>

### 

## Dashboard

## Note


