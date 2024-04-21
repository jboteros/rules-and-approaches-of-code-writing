async function fetchUser(id: number) {
  try {
    const response = await fetch(`https://api.example.com/users/${id}`);
    const user = await response.json();
    return user;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

function validateUser(user: any) {
  if (!user.name || !user.email) {
    throw new Error("Invalid user");
  }
}



async function handleUser(id: number) {
  const user = await fetchUser(id);
  validateUser(user);
  const processedUser = processUser(user);
  return processedUser;
}

function processUser(user: any) {
  try {
    // TODO: Add some complex processing...
    return user;
  } catch (error) {
    console.error(error);
    throw error;
  }
}