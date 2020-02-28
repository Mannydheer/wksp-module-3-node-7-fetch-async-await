// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require('request-promise');

// Returns the current position of the ISS
const getIssPosition = async () => {
    // add code here (include a try/catch as well)
    
    try {
        let response = await request('http://api.open-notify.org/iss-now.json')
        const parsedResponse = JSON.parse(response);
        console.log({
            newLat: parsedResponse.iss_position.latitude,
            newLong: parsedResponse.iss_position.longitude
        })

        
    } catch(err) {
        console.log(err)





    }
}

getIssPosition();