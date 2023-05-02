const db = require('./db')

async function GetRavkavList() {

    const data = await db.query(`
    select * 
    from USERS
    `);
       
    return data;
}


module.exports = {
    GetRavkavList

}