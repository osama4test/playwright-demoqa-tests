export async function createUserViaAPI(user: { email: string; password: string }) {
  console.log(`Creating user: ${user.email}`);
  // Simulate API request...
  return { status: 201, id: 'abc123' };
}
