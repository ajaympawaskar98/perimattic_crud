const db = require("../db/db");

let Users = (users) =>{
    this.fullname = users.fullname;
    this.email = users.email;
    this.phone = users.phone;
    this.address = users.address;
}

Users.addUser = (fullname,email,phone , address) =>{
    return new Promise ((resolve , reject)=>{
        let sql = `INSERT INTO users(fullname,email,phone,address) VALUES('${fullname}','${email}','${phone}','${address}')`;
        db.query(sql, (err, res, fields) => {
            if (err) {
              console.log("error", err);
              return reject(err);
            }
            return resolve(res);
          });
    })
}

Users.getUserById = (userid) => {
    return new Promise((resolve, reject) => {
      let sql = `SELECT fullname,email,phone,address from users WHERE id = '${userid}'`;
      db.query(sql, (err, res) => {
        if (err) {
          return reject(err);
        }
  
        return resolve(res);
      });
    });
  };

  Users.fetchAll = () => {
    return new Promise((resolve, reject) => {
      let sql = `SELECT * FROM users`;
      db.query(sql, (err, res) => {
        if (err) {
          return reject(err);
        }
  
        return resolve(res);
      });
    });
  };
  
  Users.update = (userid,fullname, email,phone ,address) => {
    return new Promise((resolve, reject) => {
      let sql = `UPDATE users SET fullname = '${fullname}' , email = '${email}' , phone = '${phone}' , address = '${address}' WHERE id = '${userid}'`;
      db.query(sql, (err, res) => {
        if (err) {
          return reject(err);
        }
        return resolve(res);
      });
    });
  };

  Users.delete = (userid) => {
    return new Promise((resolve, reject) => {
      let sql = `DELETE from users WHERE id = '${userid}'`;
      db.query(sql, (err, res) => {
        if (err) {
          return reject(err);
        }
  
        return resolve(res);
      });
    });
  };

module.exports = Users;