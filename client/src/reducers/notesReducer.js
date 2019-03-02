export default function noteListReducer(
    state = {
        loading: false,
        notes: []
    },
    action
) {
    switch (action.type) {
        case 'LOADING_NOTES':
            return {state, loading: true, notes: []}
        case 'FETCH_NOTES':
            return {...state, loading: false, notes: action.notes};
        default:
            return state;
    }
}