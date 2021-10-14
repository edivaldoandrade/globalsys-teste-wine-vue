
// States
export const state = () =>({

    toggleSidebar: false

})

// mutations
export const mutations = {

    TOGGLE_SIDEBAR(state: any) {
        state.toggleSidebar = !state.toggleSidebar
    },

}

// actions
export const actions = {

    toggleSidebar({ commit }: any) {
        commit('TOGGLE_SIDEBAR')
    },

}

// Getters
export const getters = {

    toggleSidebar: (state: any) => state.toggleSidebar

}
