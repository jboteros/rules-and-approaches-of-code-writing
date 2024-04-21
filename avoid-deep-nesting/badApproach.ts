function processUsers(users: any[]) {
    users.forEach(user => {
        if (user.isActive) {
            if (user.age > 18) {
                if (user.email) {
                    // Do something with the user
                } else {
                    console.error('User has no email');
                }
            } else {
                console.error('User is under 18');
            }
        } else {
            console.error('User is not active');
        }
    });
}