function processUser(id: number) {
  // Fetch user
  let user;
  try {
    user = fetch(`https://api.example.com/users/${id}`);
  } catch (error) {
    console.error(error);
    return;
  }

  // Validate user
  if (!user.name || !user.email) {
    console.error("Invalid user");
    return;
  }

  // Process user
  try {
    // Some complex processing...
  } catch (error) {
    console.error(error);
    return;
  }

  // Return processed user
  return user;
}
