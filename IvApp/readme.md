# IvApp
This document contains detailed funcionality of IvApp

IvApp will operate in two states: 1. Logged-out state (default after first install) 2. Logged-in state

## Logging-in process
App will take Invigilators Credentials to log in. This login session will auto-expire after a set duration.

## Logged-in state

### Creating local database (LDB)
After successful login, the first thing that the app should do is to fetch the student-records (ID, Name, Photo, Biometric), exam-records (Exam) based on <code>Center ID</code> and create a local database using these records. This process can be automatic or user initiated.
After database creation, the user will enter dashboard.

### Scanning process
The scanning process will have the following three sequential steps:

### Step-1. Scanning QR on admit card
Scanning QR will give Student ID, Name, Photo, Center ID.
Student ID will act as a search query for finding the matching student record from LDB. Student verification is successful if all other attributes extracted from the QR match with the attributes present in the LDB.
Display: In case verification failed, pop-up message with option to retry. In case of successful verification, Student ID, Name, Photo, Sheet ID (currently unalloted) and a button to proceed to attach answer sheet. 

### Step-2 Associating answer script 
Scanning QR will give Sheet ID, Signature of Issuing Authority (for verification of sheet).
Upon successfully verifying, the app will associate sheet ID with the student record in LDB.
Display: If linking fails, pop-up message with option to scan again. Otherwise, display successful linking prompt and return to the previous display ( Student ID, Name, Photo and Sheet ID).

### Step-3 Attendence and student side verification
After the sheet is linked, the student can verify the details displayed (specially the linked SheetID) and confirm the same using biometric. The IvApp will verify the incoming biometric entry against the one in LDB. After successful verification, the app will mark student's attendence automatically and return to step-1. 

## Dashboard


## Add additional sheets


