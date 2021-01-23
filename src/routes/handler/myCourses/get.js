const apiAdapter = require('../../../api');

const {
    URL_SERVICE_COURSE
} = process.env;

const api = apiAdapter(URL_SERVICE_COURSE);

module.exports = async (req, res) => {
    try {
        const userId = req.params.id;
        const mycourse = await api.get('/api/mycourses', {
            params: { user_id: userId }
        });
        return res.json(mycourse.data);
    } catch (error) {

        if (error.code === 'ECONNREFUSED') {
            return res.status(500).json({ 
                status: 'error',
                message: 'MY COURSES UNAVAILABLE'
             });
        }

        const { status, data } = error.response;
        return res.status(status).json(data);
    }
}