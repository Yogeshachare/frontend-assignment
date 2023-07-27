# Frontend Task Essentially AI

# Server

- In implementing the Server Side, a .env file has been created, wherein crucial information such as the API Key and Port details have been securely stored.
- The input comprising the Symbol and date has been acquired from the user through the utilization of the request body.
- This input is passed to the polygon api which gives a JSON data this JSON data is further Filtered to only required data.
- The data is then Passed to the Client Side.
- Encountered an edge case where the request returned a status of 200 with a resultCount of 0, signifying the absence of any results. This particular edge case has been effectively handled and addressed.
- If there are any Error it will give a proper response to end user as it is taken care in Frontend

# Client

- In implementing Client Side created two components Form and StockData each of them have a different css File for seperate styling and for common styling App.css is used
- I have used conditional rendering for showing Form first than once all Data is acquired like Trade Symbol and Date. The api call is made after submitting form and data is shown in stockData component.
- The Form contains two input fields one is simple text field the data from this field is stored in state and the other field is date field which implemented using react-date-picker library, Max Date we can pick is      Yestarday's date so we get a proper result.
- The Stock data component contains Loader which will showup for 2 sec so that data can be loaded and user experience get's better, After loading the (Open, High, Low, Close, Volume) is shown
- If we want to get data for different date or different Symbol we can click on Go Back Button and entering the data in data field and submitting the form.
- If we put some incorrect data in fields after submitting it give a proper Feedback to user.
