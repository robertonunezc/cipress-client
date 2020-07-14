export const state = () => ({
    categories: [],
    announcements: []
})

export const mutations = {
    addAnnouncement(state, announcement) {
        state.announcements.push(announcement)
    },
    setCategories(state, categories) {
        state.categories = categories
    },

    setAnnouncements(state, announcements) {
        state.announcements = announcements
    },
    setAnnouncement(state, announcement) {
        state.announcements.push(announcement)
    }
}

export const actions = {
    async getCategories({ commit }) {
        try {
            await this.$axios.$get(`"${process.env.baseUrl}categories/"`)
                .then(res => {
                    console.log(res)
                    commit('setCategories', res)
                });

        } catch (error) {
            console.log(error)
        }

    },
    async getAnnouncementsByCategory({ commit, state }, categoryId) {
        const announcements = state.announcements.filter(item => item.category.id == categoryId)
        console.log("Anuncios por categoria")
        console.log(announcements)
        return announcements
    },
    async getAnnouncements({ commit }) {
        try {
            await this.$axios.$get(`"${process.env.baseUrl}products/"`)
                .then(res => {
                    console.log(res)
                    commit('setAnnouncements', res)
                });

        } catch (error) {
            console.log(error)
        }

    },
    async setAnnouncement({ commit }, payload) {
        try {
            await this.$axios.$post(`"${process.env.baseUrl}products/"`, payload)
                .then(res => {
                    console.log(res)
                    commit('setAnnouncement', res)
                });

        } catch (error) {
            console.log(error)
        }

    },
    searchAnnouncements({ commit, state }, payload) {
        console.log("Searching ann")
        const searchResults = state.announcements.filter(announcement => {
            return announcement.short_name.toLowerCase().includes(payload)
        })
        console.log(searchResults)
        commit('setAnnouncements', searchResults)

    }
}
