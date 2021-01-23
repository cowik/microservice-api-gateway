const apiAdapter = require('../../../api');

const {
    URL_SERVICE_COURSE
} = process.env;

const api = apiAdapter(URL_SERVICE_COURSE);

module.exports = async (req, res) => {
    try {
        const id = req.params.id;
        const imagecourse = await api.delete(`/api/imagecourses/${id}`);
        return res.json(imagecourse.data);
    } catch (error) {

        if (error.code === 'ECONNREFUSED') {
            return res.status(500).json({ 
                status: 'error',
                message: 'IMAGE COURSES UNAVAILABLE'
             });
        }

        const { status, data } = error.response;
        return res.status(status).json(data);
    }
}