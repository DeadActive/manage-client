export default (axios) => ({
    get() {
        return axios.get(`records`)
    },
    getOne(id) {
        return axios.get(`records/${id}`)
    },
    create(data) {
        return axios.post(`records`, { data })
    },
    update(id, data) {
        return axios.put(`records/${id}`, { data })
    },
    delete(id) {
        return axios.delete(`records/${id}`)
    },
})
