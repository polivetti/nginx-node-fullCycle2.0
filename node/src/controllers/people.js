const conn = require("../services/conn")

module.exports = {
    async list(req, res) {
        const 
            name
         = 'teste';
        try {
            const id = await conn("people").insert({
                name,
              });
            const r = await conn("people")
            .select("*");
            return res.json(r);
        } catch (error) {
          return res.json({ error });
        }
      },
};