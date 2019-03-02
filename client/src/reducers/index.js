import { combineReducers } from 'redux';
import beneficiariesReducer from './beneficiariesReducer';
import notesReducer from './notesReducer';

const rootReducer = combineReducers({
    beneficiaries: beneficiariesReducer,
    notes: notesReducer
});

export default rootReducer;