function processUsers(users: any[]) {
    users.forEach(user => {
        if (!user.isActive) {
            console.error('User is not active');
            return;
        }
        if (user.age <= 18) {
            console.error('User is under 18');
            return;
        }
        if (!user.email) {
            console.error('User has no email');
            return;
        }
        // Do something with the user
    });
}