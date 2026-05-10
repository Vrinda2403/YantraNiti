const axios = require('axios');

exports.generateYantra = async (req, res) => {
    try {
        const response = await axios.post(
            `${process.env.PYTHON_SERVICE_URL}/calculate`,
            req.body
        );

        res.json(response.data);

    } catch (error) {
        res.status(500).json({
            message: 'Astronomy service failed'
        });
    }
};