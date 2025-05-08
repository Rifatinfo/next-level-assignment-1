# Next Level Assignment-1

This is a TypeScript core problem-solving task aimed at gaining a deeper understanding of the language. I put forth my best effort to complete all 8 tasks. Through this assessment, I was able to strengthen my foundational knowledge and gain a clearer understanding of TypeScript's core concepts.

---
# Blog Task

## Understanding TypeScript `keyof` keyword 

Keyof is a keyword in typescript and keyof operator take an object type and produces a string . It work to object key value and show its value .
This keyof used to get a union of all property names (keys) of a given type or interface . let's example `// Result: "id" | "name" | "email"`

```interface User {
  id: number;
  name: string;
  email: string;
}

type UserKeys = keyof User; 

---




## Use Cases

### 1. Input to keys of an object

function getValue<T, K extends keyof T> (obj: T , key:K) : T[K] {
    return obj[key];
}

const user = {id: 1, name : "Zara" , email : 'zara@gmail.com'};
const name = getValue(user, 'name'); 

---


## 2. Mapped Types

type UserStringMap = {
    id: string;
    name : string;
    email : string
}

type UserStringMap = {
    [k in keyof User] : string
}; 


---

## Understanding TypeScript `interface` and `type`
