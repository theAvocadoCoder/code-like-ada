import { setDoc, getDoc, doc } from "firebase/firestore";
import { db } from "../../../main";

const state = {
    errMessage: "",
    regStatus: false,
    regError: false,
};

const mutations = {
    SET_ERR_MESSAGE (state, payload) {
        state.errMessage = payload;
    },
    SET_REG_STATUS (state, payload) {
        state.regStatus = payload;
    },
    SET_REG_ERROR (state, payload) {
        state.regError = payload;
    },
};

const actions = {
    async addApplicant ({ dispatch }, applicant) {

        // Check if email has been registered before
        const docRef = doc(db, "applicants", applicant.email);
        const docSnap = await getDoc(docRef);

        // if email does not exist, register applicant
        if (!(docSnap.exists())) {
            try {
                const docRef = await setDoc(doc(db, "applicants", applicant.email), {
                    firstName: applicant.firstName,
                    lastName: applicant.lastName,
                    email: applicant.email,
                    intent: applicant.intent
                });
                dispatch("setRegStatus", true);
                dispatch("setErrMessage", "");
                dispatch("setRegError", false)
                console.log("Document written with email: ", docRef);
            } catch (e) { 
                console.log("Error adding document: ", e);
                dispatch("setRegStatus", false);
                dispatch("setRegError", false);
                dispatch("setErrMessage", `Error submitting application [${e}]. Please try again.`)
            }
        } else if (docSnap.exists()) {
            // else if email exists, register error
            console.log("email is already in database");
            dispatch("setRegError", true);
            dispatch("setRegStatus", false);
            dispatch("setErrMessage", "");
        }
    },
    setErrMessage ({commit}, value) {
        commit("SET_ERR_MESSAGE", value);
    },
    setRegStatus ({commit}, value) {
        commit("SET_REG_STATUS", value);
    },
    setRegError ({commit}, value) {
        commit("SET_REG_ERROR", value);
    },
};

const getters = {
    regStatus: state => state.regStatus,
    regError: state => state.regError,
    errMessage: state => state.errMessage,
};

export default {
    state,
    mutations,
    actions,
    getters,
};
