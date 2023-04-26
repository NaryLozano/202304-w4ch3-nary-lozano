# Data layer

## Data

-Phone number (max)
-Calling Status
-Calling message

## Data modifications

-delete all numbers
-calling status
-call active(min 9 numbers)/dissable-
-hung up active/dissable
-Calling message- change status

# Components

- Info
- Display
- Actions
  - Action
- Keyboard
  - Key

## Info

- Shows the state of the active call max 5 seconds

## Display

- Receives a context with an array of max 9 numbers
- shows the numbers in an input element

## Actions

- buttons receive status of display to change actions.

- Hung up button status and class change to active-off

- Call button status and class change to active-off

## Keyboard

- receives user actions and send numbers to display array
