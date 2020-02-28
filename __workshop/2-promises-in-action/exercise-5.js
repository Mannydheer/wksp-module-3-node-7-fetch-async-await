const request = require('request-promise');

const getGeekJoke = async () => {
    try {
        let geekJoke = await request ('https://geek-jokes.sameerkumar.website/api')
        let parsedJoke = JSON.parse(geekJoke);
        // console.log(parsedJoke)
        return parsedJoke

    } catch(err) {
        console.log(err)
    }
}

module.exports = {
    getGeekJoke
};
// getGeekJoke();
