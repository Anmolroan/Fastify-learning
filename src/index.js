const fastify = require('fastify');
const app=fastify({logger: true});
const PORT =process.env.PORT ||8000;
const users = require('./users.json');
app.get("/getUsers", function(request, reply){
return users
})
app.listen(PORT,() => {
    console.log('server is listening on port' + PORT);
})