const { Pool } = require('pg');
let pool;
function getPool(){
  if(!pool){
    if(!process.env.DATABASE_URL) throw new Error('DATABASE_URL is required. Copy .env.example to .env first.');
    pool=new Pool({connectionString:process.env.DATABASE_URL});
  }
  return pool;
}
async function query(text,params){return getPool().query(text,params)}
async function closePool(){if(pool){await pool.end();pool=null}}
module.exports={query,closePool};
