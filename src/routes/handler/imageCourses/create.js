const apiAdapter = require('../../../api');

const {
    URL_SERVICE_COURSE
} = process.env;

const api = apiAdapter(URL_SERVICE_COURSE);

module.exports = async (req, res) => {
    try {
        const imagecourse = await api.post('/api/imagecourses', req.body);
        return res.json(imagecourse.data);
    } catch (error) {

        if (error.code === 'ECONNREFUSED') {
            return res.status(500).json({ 
                status: 'error',
                message: 'IMAGE COURSE UNAVAILABLE'
             });
        }

        const { status, data } = error.response;
        return res.status(status).json(data);
    }
}