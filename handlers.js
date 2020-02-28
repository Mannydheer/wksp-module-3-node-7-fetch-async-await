// nothing here yet...
const {
    getDadJoke
} = require('./__workshop/2-promises-in-action/exercise-3');
const {
    getTronaldDump
} = require('./__workshop/2-promises-in-action/exercise-4');
const {
    getGeekJoke
} = require('./__workshop/2-promises-in-action/exercise-5');

const handledadJoke = async (req, res) => {
    //parses it back into a javascript object
    const {
        type
    } = req.body;
    
    console.log(type)
    let joke = '';
    switch (type) {
        case 'geek':
            joke = await getGeekJoke();
            break;
        case 'tronald':
            joke = await getTronaldDump();
            break;
        case 'dad':
        default:
            joke = (await getDadJoke()).joke;
            break;
    }

    // res.status(200).json({
    //     data: joke
    // });
    res.send({
             data: joke
        })
    // res.send(joke)

}

module.exports = {
    handledadJoke
}