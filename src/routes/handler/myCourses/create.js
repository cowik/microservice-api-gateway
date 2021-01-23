const apiAdapter = require('../../../api');

const {
    URL_SERVICE_COURSE
} = process.env;

const api = apiAdapter(URL_SERVICE_COURSE);

module.exports = async (req, res) => {
    try {
        const userId = req.user.data.id;
        const courseId = req.body.course_id;

        const mycourse = await api.post('/api/mycourses', {
            user_id: userId,
            course_id: courseId
        });
        return res.json(mycourse.data);
    } catch (error) {

        if (error.code === 'ECONNREFUSED') {
            return res.status(500).json({ 
                status: 'error',
                message: 'MY COURSE UNAVAILABLE'
             });
        }

        const { status, data } = error.response;
        return res.status(status).json(data);
    }
}