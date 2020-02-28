const request = require('request-promise');

const getDadJoke = async () => {

    try {
        let dadJoke = await request({
            uri: 'https://icanhazdadjoke.com/',
            headers: {
                "Accept": "application/json"
            }
        })
        const parsedJoke = JSON.parse(dadJoke);
        // console.log(parsedJoke);
        return parsedJoke;
    } catch (err) {
        console.log(err)
    }
}

// getDadJoke();

module.exports = {
    getDadJoke
};