const graphql = require("graphql")
const _ = require("lodash")

const {GraphQLSchema, GraphQLObjectType, GraphQLString , GraphQLInt} = graphql;

const UserType  = new GraphQLObjectType({
    name: 'User',
    fields: ()=>({
        id:  {type: GraphQLString},
        firstName: {type: GraphQLString},
        age: {type: GraphQLInt} 
    })
})

