import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        selected: 'profile',
        resume: {
            config: [
                { field: 'profile', icon: 'id' },
                { field: 'workHistory', icon: 'work' },
                { field: 'education', icon: 'book' },
                { field: 'projects', icon: 'heart' },
                { field: 'awards', icon: 'cup' },
                { field: 'contacts', icon: 'phone' },
            ],
            profile: {
                name: '戴某某',
                city: '武汉',
                title: '前端攻城狮',
                birthday: '1993-09-12'
            },
            'workHistory': [
                { company: '*******公司', content: '*******' },
                { company: '*******公司', content: '*******' },
            ],
            education: [
                { school: '木叶忍者学院', content: '下忍' },
                { school: '晓', content: '打杂' },
            ],
            projects: [
                { name: 'project A', content: '文字' },
                { name: 'project B', content: '文字' },
            ],
            awards: [
                { name: 'awards A', content: '文字' },
                { name: 'awards B', content: '文字' },
            ],
            contacts: [
                { contact: 'phone', content: '13812345678' },
                { contact: 'qq', content: '12345678' },
            ],
        }

    },

    mutations: {
        switchTab(state, payload) {
            state.selected = payload
        }
    }
})