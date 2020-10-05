const {
    createPool
} = require('mysql');

const pool = createPool({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "1234",
    database: "login",
    connectionLimit: 10
})

let fetch = (email) => {
    pool.query("select p_ward from user where e_id ='" + email + "'", (err, result, fields) => {
        if (err) {
            return console.log(err);
        }
        setvalue(result[0].p_ward);
    })
}
let setvalue = (value) => {
    return value;
};
let checkpass = (email, pass) => {
    fetch(email);
    console.log(value);

}
checkpass('sahilshaikhsss786@gmail.com', 'sadasd');

module.exports = {
    checkpass
};