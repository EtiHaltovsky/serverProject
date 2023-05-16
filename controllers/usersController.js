const users = [{'id':1, 'name': 'Orit'}, {'id':2, 'name': 'Alel'}, {'id':3, 'name': 'Shira'}];

const addUser=(user) => {
    users.push(user);
    return users;
}

module.exports = {addUser};






