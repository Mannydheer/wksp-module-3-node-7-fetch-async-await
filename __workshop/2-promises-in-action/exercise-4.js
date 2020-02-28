const request = require('request-promise');

const getTronaldDump = async () => {
    try {
        let trumpJoke = await request({
            uri: 'https://api.tronalddump.io/random/quote',
            headers:{
                "Accept": "application/json"
            }
        })
        const parsedJoke = JSON.parse(trumpJoke);
        // console.log(parsedJoke)
        return parsedJoke;
        } catch(err) {
            console.log(err)
    
        }


}

// getTronaldDump();
module.exports = {
    getTronaldDump
};