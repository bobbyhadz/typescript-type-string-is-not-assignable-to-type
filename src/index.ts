export {};

// Type 'string' is not assignable to type in TypeScript

// EXAMPLE 1 - Use a type assertion to solve the error

type EmailStatus = 'draft' | 'read' | 'unread';

// 👇️ type is EmailStatus (not string)
let status = 'draft' as EmailStatus; // 👈️ use type assertion
status = 'read';

const current: EmailStatus = status;

console.log(current); // 👉️ "read"

// ---------------------------------------------------

// // EXAMPLE 2 - Type your values correctly

// type Letter = 'a' | 'b';
// const arr: Letter[] = ['a', 'b'];

// const obj: { letter: string } = {
//   letter: 'a',
// };

// arr.push(obj.letter as Letter); // 👈️ type assertion

// ---------------------------------------------------

// // EXAMPLE 3 - Use a const assertion to solve the error

// type EmailStatus = 'draft' | 'read' | 'unread';

// // 👇️ type is readonly ["unread"]
// const arr2 = ['unread'] as const;

// const arr3: EmailStatus[] = ['draft', 'read'];

// const arr4: EmailStatus[] = [...arr2, ...arr3];

// ---------------------------------------------------

// // EXAMPLE 4 - Use a type assertion to solve the error

// type EmailStatus = 'draft' | 'read' | 'unread';

// // 👇️ type is EmailStatus[]
// const arr2 = ['unread'] as EmailStatus[];

// const arr3: EmailStatus[] = ['draft', 'read'];

// const arr4: EmailStatus[] = [...arr2, ...arr3];

// ---------------------------------------------------

// // Type String is not assignable to type Enum in TypeScript

// // EXAMPLE 5 - Access the property on the Enum to solve the error

// export enum EmailStatus {
//   Read = 'READ',
//   Unread = 'UNREAD',
//   Draft = 'DRAFT',
// }

// // ✅ Solution 1
// const status: EmailStatus = EmailStatus.Read;

// // ✅ Solution 2
// const status2: EmailStatus = 'READ' as EmailStatus;

// ---------------------------------------------------

// // Type 'X' is not assignable to type 'Y' in TypeScript

// // EXAMPLE 6 - Using a union type to solve the error

// let name: string | number = 'Bobby Hadz';

// // ✅ Works now
// name = 100;
// console.log(name);

// ---------------------------------------------------

// // EXAMPLE 7 - Using a type assertion to solve the error

// interface Person {
//   name?: string; // 👈️ optional (might be undefined)
//   country: string;
// }

// const person: Person = {
//   name: 'Bobby Hadz',
//   country: 'Chile',
// };

// const name: string = person.name as string; // 👈️ type assertion
// console.log(name);

// ---------------------------------------------------

// // EXAMPLE 8 - Using a type guard to solve the error

// interface Person {
//   name?: string; // 👈️ optional (might be undefined)
//   country: string;
// }

// const person: Person = {
//   name: 'Bobby Hadz',
//   country: 'Chile',
// };

// const name: string = typeof person.name === 'string' ? person.name : '';
// console.log(name);

// ---------------------------------------------------

// // EXAMPLE 9 - Using an `if` statement to solve the error

// interface Person {
//   name?: string; // 👈️ optional (might be undefined)
//   country: string;
// }

// const person: Person = {
//   name: 'Bobby Hadz',
//   country: 'Chile',
// };

// let name = '';

// if (typeof person.name === 'string') {
//   name = person.name;
// }

// console.log(name); // 👉️ "Bobby Hadz"
