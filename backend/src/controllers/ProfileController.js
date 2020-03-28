const connection = module.require("../database/connection");

module.exports = {
    async listByOng(request, response) {
        const ong_id = request.headers.authorization;
        const incidents = await connection('incidents').where('ong_id', ong_id).select('*');

        return response.json(incidents);
    }
}