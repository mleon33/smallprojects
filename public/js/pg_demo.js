import { Pool, Client } from 'pg';

const pool = new Pool({
    user: "atoms",
    host: "172.16.34.70",
    database: "task",
    password: "atoms",
    port: 5432
});

pool.query("select * from hnsc_def_custom limit 1", (err, res)=>{
    console.log(err,res);
    console.log(res);
    pool.end()
});

function sayHello(name){
    console.log("Hello " + name);
};

sayHello("Marco");
