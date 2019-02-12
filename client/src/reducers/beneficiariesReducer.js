export default function beneficiaryListReducer(
    state = {
        loading: false,
        beneficiaries: []
    },
    action
) {
    switch (action.type) {
        case 'LOADING_BENEFICIARIES':
            return {state, loading: true, beneficiaries: []}
        case 'FETCH_BENEFICIARIES':
            return {...state, loading: false, beneficiaries: action.beneficiaries};
        default:
            return state;
    }
}