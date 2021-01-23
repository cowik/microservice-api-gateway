const apiAdapter = require('../../../api');

const {
    URL_SERVICE_COURSE
} = process.env;

const api = apiAdapter(URL_SERVICE_COURSE);

module.exports = async (req, res) => {
    try {
        const mentors = await api.get('/api/mentors');
        return res.json(mentors.data);
    } catch (error) {

        if (error.code === 'ECONNREFUSED') {
            return res.status(500).json({ 
                status: 'error',
                message: 'MENTORS UNAVAILABLE'
             });
        }

        const { status, data } = error.response;
        return res.status(status).json(data);
    }
}