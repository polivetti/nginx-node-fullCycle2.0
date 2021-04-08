const ex = require('express');
const port = 3000;

const app = ex();


const routes = require("./routes");

app.use(routes);
// app.get('/',(req,res)=>{
//     res.send('<h1>fullcicle com node</h1>')
//     const sql = 'INSERT INTO people(name) values("polivetti")';
//     conn.query(sql);
//     conn.end();
// });

app.listen(port)