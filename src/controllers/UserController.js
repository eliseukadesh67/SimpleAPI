let users = [

    {
        id: 1,
        name: 'Gabriel Paiva',
    },
    
    {
        id: 2,
        name: 'Murilo Gomes',
    },
    
    {
        id: 3,
        name: 'Eliseu Kadesh',
    },

];

function getAll(){
    return users;
};

function addUser(id, name){
    users.push({id, name});

    return users[users.length - 1];
};

module.exports = {
    
    index(request, response) {
        const users = getAll();

        return response.json(users);
    },

    create(request, response){
        const { name } = request.body;
        const last = users[users.length - 1];
        const id = (last.id) + 1
        const lastUser = addUser(id, name);
        
        return response.json(lastUser);
    }
}
