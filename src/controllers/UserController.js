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
