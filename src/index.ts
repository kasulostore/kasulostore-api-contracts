console.log('hello world');

export type User = {
  name: string;
  age: number;
};

export function createUser(name: string, age: number): User {
  return { name, age };
}
