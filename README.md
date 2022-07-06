# Auto-paper
Howdy team! This isn't a documentation file. Rather, it defines our solution in a clean and easily interpretable way so we can keep on track at all times.
Hakuna Matata.

## Process:
Our solution relies on two major processes - 1. Invigilator side, 2. Evaluation side, and 3. Backend

### 1. Invigilator side process - IvApp
The invigilator side process is carried out by our IvApp. Before exam, the IvApp will fetch a some data from central database and create a local database based on Invigilator's credentials.
After which the invigilator will use this app to verify students,(using QR on admit card), associate answer sheet and mark attendence.
App will revoke invigilators credentials after commencement of exam.

### 2. Evaluation side process - EvApp
The invigilator side process will be carried out by our EvApp.

### 3. Backend 
Here we will do the following:
1. Creation of QR
2. Centralized database
3. Verification

## Admitcard QR
This will hold the following attributes:
1. Signature of issusing authority
2. Student ID
3. Name
4. Photograph
5. Center code

## Answer sheet QR
This will hold the following information:
1. Signature of issusing authority
2. Sheet ID

## Centralized database



