const fastify = require('fastify');
const app=fastify({logger: true});
const PORT =process.env.PORT ||8000;
const users = require('./users.json');
app.get("/getUsers", function(request, reply){
    const gender =request.query.gender;
    if(!gender)return users;
    const filteredData = users.filter((el)=> {
        return el.gender.toLowerCase() === gender.toLowerCase()
    });
    return filteredData

})
app.listen(PORT,() => {
    console.log('server is listening on port' + PORT);
})