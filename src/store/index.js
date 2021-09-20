import { createStore } from 'vuex';
import applicants from './modules/applicants';

export default createStore({
    modules: {
        applicants,
    }
});