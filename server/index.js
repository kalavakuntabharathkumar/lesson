require('dotenv').config();
const express=require('express');
const cors=require('cors');
const {ApolloServer}=require('@apollo/server');
const {expressMiddleware}=require('@apollo/server/express4');
const {typeDefs}=require('./typeDefs');
const {resolvers}=require('./resolvers');
async function start(){
 const app=express(); app.use(cors({origin:process.env.CLIENT_ORIGIN||'http://localhost:5173'}));
 app.get('/health',(_,res)=>res.json({ok:true,service:'lesson-planner-graphql'}));
 const apollo=new ApolloServer({typeDefs,resolvers}); await apollo.start();
 app.use('/graphql',express.json({limit:'1mb'}),expressMiddleware(apollo));
 const port=Number(process.env.PORT||4000); const server=app.listen(port,()=>console.log(`GraphQL API ready at http://localhost:${port}/graphql`));
 const shutdown=async()=>{server.close();await apollo.stop();process.exit(0)};process.on('SIGINT',shutdown);process.on('SIGTERM',shutdown);
}
if(require.main===module)start().catch(e=>{console.error(e);process.exit(1)});
module.exports={start};
