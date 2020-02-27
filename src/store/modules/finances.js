const state = {
    finances: [
        {
            name: "car",
            amount: []
        },
        {
            name: "food",
            amount: []
        },
        {
            name: "party",
            amount: []
        },
        {
            name: "taxes",
            amount: []
        },
        {
            name: "sport",
            amount: []
        },
        {
            name: "misc",
            amount: []
        }
    ]
}

const getters = {
    allFinances: (state) => state.finances
}

const actions = {
    async updateCategory({ commit }, updCat) {
        commit('updateCategory', updCat);
    }
}
const mutations = {
    updateCategory: (state, updCat) => {
        // state.finances.amount.unshift(updCat)
        const index = state.finances.findIndex(section => section.name === updCat.name);
        if (index !== -1) {
            state.finances[index].amount.unshift(updCat.amount)
            console.log(state.finances)
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}