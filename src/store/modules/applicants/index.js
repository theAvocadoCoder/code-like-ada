import * as fb from "../../../../firebase.config";
// import router from "../../../router/index";

const state = {
    applicants: [],
    regStatus: false,
    regError: false,
};

const mutations = {
    ADD_APPLICANT (state, payload) {
        state.applicants.push(payload);
    },
    SET_REG_STATUS (state, payload) {
        state.regStatus = payload;
    },
    SET_REG_ERROR (state, payload) {
        state.regError = payload;
    }
};

const actions = {
    async addApplicant ({ commit }, applicant) {
        const verify = await fb.applicantsCollection.doc(applicant.email).get();
        if (!verify) {
            await fb.applicantsCollection.add({
                firstName: applicant.firstName,
                lastName: applicant.lastName,
                email: applicant.email,
                intent: applicant.intent
            });
        } else if (verify) {
            commit("SET_REG_ERROR", true)
        }
        commit("ADD_APPLICANT", {name: `${applicant.firstName} ${applicant.lastName}`, email: applicant.email, status: "In Progress"});
    },
    setRegStatus ({commit}, value) {
        commit("SET_REG_STATUS", value);
    },
    setRegError ({commit}, value) {
        commit("SET_REG_ERROR", value);
    }
};

const getters = {
    regStatus: state => state.regStatus,
};

export default {
    state,
    mutations,
    actions,
    getters,
};
