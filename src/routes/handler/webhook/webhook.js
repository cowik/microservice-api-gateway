const apiAdapter = require('../../../api');

const {
    URL_SERVICE_ORDER
} = process.env;

const api = apiAdapter(URL_SERVICE_ORDER);

module.exports = async (req, res) => {
    try {
        const webhook = await api.post('/api/webhook', req.body);
        return res.json(webhook.data);
    } catch (error) {

        if (error.code === 'ECONNREFUSED') {
            return res.status(500).json({ 
                status: 'error',
                message: 'ORDER UNAVAILABLE'
             });
        }

        const { status, data } = error.response;
        return res.status(status).json(data);
    }
}