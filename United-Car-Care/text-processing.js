// Text-Processing API Url
const API_URL = 'https://www.unitedcarcare.com/api/v2/rate/available-products/1FMCU9J92JUB24909/10000';
// RapidAPI request headers
const REQUEST_HEADERS = {
  'X-RapidAPI-Host': 'https://www.unitedcarcare.com/api/v2/rate/available-products/'
  , 'Authorization': 'QVBQTElDQU5UOkJlbiUyMFdpbGxpYW1'
};
// Button click handler
const onButtonClick = () => {
  // Getting a textarea element with a comment
  const Element = document.getElementById('product');
  // Getting comment text
  const display = Element.value.trim();
  // Handle empty comment
  if (!commentText) {
          return handleEmpty();
        }
        // Calling the API and passing the result with the displayResult as a callback function
        return analyzeComment(display, displayResult);
      };
      const analyzeComment = (_comment, callback) => {
        // Creating an object to send to the server
        const data = {
              ProductType: EXTENDED CARE
                , CoverageTerm: '24/30k'
        };
        // Encoding data for application/x-www-form-urlencoded content type
        const formattedData = Qs.stringify(data);
        // POST request to server
        axios.post(API_URL, formattedData, { headers: REQUEST_HEADERS })
                .then(response => {
                  const data = response.data;
                  // Calling a callback function with data from the server
                  callback(data);
                })
                .catch(error => console.error(error));
      };
      const handleEmpty = () => {
        const resultBlockElement = document.getElementById('main-result-block');
        resultBlockElement.classList.add('invisible');
      };
      const displayResult = result => {
        // Remove invisible class for main-result-block
        const resultBlockElement = document.getElementById('main-result-block');
        resultBlockElement.classList.remove('invisible');
        // Setting the color of the result text depending on the response label
        const label = result.label;
        const resultElement = document.getElementById('result');
        resultElement.setAttribute('class', label);
        let resultText = '';
            // Setting the result text
            resultElement.textContent = resultText;
        };          