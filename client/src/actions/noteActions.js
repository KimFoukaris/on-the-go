export function fetchNotes(){
    return(dispatch) => {
        dispatch({ type: 'LOADING_NOTES'});
            return fetch('/notes')
            .then(response => {return response.json()})
            .then(notes => dispatch({ type: 'FETCH_NOTES', notes}))
    }
}