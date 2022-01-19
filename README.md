# Clover Take-Home Assessment

1. My main architectural decision was creating different types of components. The flow of my project is: 1) I retrieved data from the Rick & Morty API endpoint and passed that data as props to the ImageList component. 2) Then I sent props from the ImageList component to the ImageTile component. Every tile has a character image and name and is displayed on the webpage. 3) If you click on a given ImageTile, then a Modal appears. 4) Each Modal for each character has it's own data. 5) In the ModalTile component, I retrieved data from the locations API endpoint and displayed a particular character's location's information on the Modal. 

Strengths: 
  - I used nested components so that each component is readable.
  - In the future, scalability is possible since each component represents one unit or step in the workflow.

Weaknesses:
  - I could have added more error checking.

2. I included error checking when I made my first GET request. I stored the error message into the state if the GET request did not return anything. If the API call fails, then the error message will display on the webpage. 

3. I tested the app on my localhost by clicking on each character's image button and checking whether the data was appearing in the Modal. If I had more time, I would have done unit testing, such as with Jest.

4. I used the React Portal library to create the Modal.

5. If I had more time, I would have written unit tests, added more error handling such as for the second API call to retrieve location information, and implemented infinite scrolling with a React library to display all of the characters, not only 20.
