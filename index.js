const express = require("express")
const graphqlHTTP = require("express-graphql")

const schema = require("./schema/schema")

const app = express();

app.use("/graphql",graphqlHTTP({
    graphiql:true,
    schema
}))

app.listen(4000, ()=>{
    console.log("server running on port 4000")
})