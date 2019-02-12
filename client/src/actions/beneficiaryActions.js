export function fetchBeneficiaries(){
    return(dispatch) => {
        dispatch({ type: 'LOADING_BENEFICIARIES'});
            return fetch('/beneficiaries')
            .then(response => {return response.json()})
            .then(beneficiaries => dispatch({ type: 'FETCH_BENEFICIARIES', beneficiaries}))
    }
}