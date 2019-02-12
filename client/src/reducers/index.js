import { combineReducers } from 'redux';
import beneficiariesReducer from'./beneficiariesReducer';

const rootReducer = combineReducers({
    beneficiaries: beneficiariesReducer
});

export default rootReducer;