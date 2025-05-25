# Understanding Pass by Value and Pass by Reference in Javascript

The terms “Pass by Value” and “Pass by Reference” are fundamental concepts in programming, linked to how variables and data are managed in memory. In this article, we will dive into these concepts as they apply to JavaScript, a powerful and widely used programming language.

## Understanding Memory and Variables

Before we explore **pass by value** and **pass by reference**, it’s crucial to understand the basics of how memory and variables work.  
When you create a variable in JavaScript, it reserves a space in the computer’s memory to hold the value assigned to that variable.

```javascript
let x = 10;
```

Here, `x` is a label attached to the memory space where `10` is stored.

---

## Pass by Value

JavaScript is primarily a **pass by value** language.  
But what does this mean?

**Pass by value** means when a variable is assigned to another variable, the value stored in the variable is **copied** into the new variable.

They are independent of each other, each occupying its own memory space.

```javascript
let a = 10;
let b = a;

a = 20;

console.log(a); // Outputs: 20
console.log(b); // Outputs: 10
```

-   `a` and `b` are independent.
-   Changing `a` does **not** affect `b`.

In this example, we first declare a variable `a` and set it equal to `10`.  
We then declare another variable `b` and set it equal to `a`.  
At this point, both `a` and `b` are `10`.

However, when we change the value of `a` to `20`, `b` remains `10` because the value was **passed by value**—meaning the value `10` was copied to `b` when it was declared, and changes to `a` do not affect `b`.

---

## Pass by Reference

While JavaScript is primarily a “pass by value” language, it uses a concept called “pass by reference” when dealing with objects (including arrays and functions).

When an object is created in JavaScript, it is stored in a memory space, and the variable associated with it stores the memory address or reference where the object is stored.

If you assign this object variable to another variable, it does not copy the object. Instead, it copies the reference to the object. Both variables now point to the same memory space, which means changes through one variable are reflected when accessing the object through the other variable.

```javascript
let obj1 = { value: 10 };
let obj2 = obj1;

obj1.value = 20;

console.log(obj1.value); // Outputs: 20
console.log(obj2.value); // Outputs: 20
```

In this example, `obj1` and `obj2` are both references to the same object. When we change `obj1.value` to `20`, the change is reflected in `obj2.value` because both `obj1` and `obj2` point to the same memory space - the `object { value: 20 }`.

---

## Conclusion

In JavaScript, understanding the distinction between pass by value and pass by reference is critical. It affects how your code manipulates and stores data. By knowing how these concepts work, you can write more efficient and effective code and have a better understanding of the language’s underlying operations.

Remember, JavaScript handles primitives (Boolean, null, undefined, String, and Number) by value and objects (including arrays and functions) by reference. Therefore, changes to a copied primitive value will not affect the original, while changes to a copied object will reflect on the original.

Credit - [Medium](https://medium.com/front-end-weekly/understanding-pass-by-value-and-pass-by-reference-in-javascript-8e2a0806b175)
