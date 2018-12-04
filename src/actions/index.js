export const RECEIVE_MEMES = 'RECEIVE_MEMES';

//preps the outgoing action message
function receiveMemes(json) {
    const { memes } = json.data;

    return {
        type: RECEIVE_MEMES,
        memes
    }
}

//actually gets the json from the api
function fetchMemesJson(){
    return fetch('https://api.imgflip.com/get_memes')
        .then( response => response.json()); 
}

//orchestrates fetching the memes, then dispatching the built action message to the Redux reducers.
// TODO: refactor into an ES8 Async/Await. 
export function fetchMemes(){
    return function(dispatch) {
        return fetchMemesJson()
            .then(json => dispatch(receiveMemes(json)))    
    }
}