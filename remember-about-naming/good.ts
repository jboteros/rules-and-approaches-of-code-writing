function filterAndPrintUsers(users: { id: number, name: string }[], userId: number) {
    let filteredUsers = users.filter(user => user.id === userId);
    filteredUsers.forEach(user => console.log(user.name));
}

let users = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
let userIdToFilter = 1;

filterAndPrintUsers(users, userIdToFilter);
