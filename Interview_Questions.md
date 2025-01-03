# Interview Questions and Answers

## 1. What is React?
React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. 


## 2. Advantages of React
- **Component-Based Architecture**: React allows developers to build encapsulated components that manage their own state, then compose them to make complex UIs.
- **Virtual DOM**: React uses a virtual DOM to improve performance by minimizing direct manipulation of the actual DOM.
- **Reusable Components**: Components can be reused across different parts of an application, reducing code duplication.
- **Strong Community Support**: React has a large community and a wealth of resources, tutorials, and third-party libraries.

## 3. Disadvantages of React
- **Learning Curve**: React has a steep learning curve, especially for beginners who are not familiar with JavaScript ES6 and JSX.
- **Boilerplate Code**: Setting up a React project can involve a lot of boilerplate code and configuration.
- **Rapid Changes**: The React ecosystem evolves quickly, which can make it challenging to keep up with the latest best practices and updates.

## 4. Difference Between Real DOM and Virtual DOM
- **Real DOM**: The Real DOM updates the entire tree structure of HTML tags, which can be slow and inefficient for large applications.
- **Virtual DOM**: The Virtual DOM is a lightweight copy of the Real DOM. React uses the Virtual DOM to batch updates and apply them efficiently, improving performance.

## 5
. What is Hooks and why used in React?
- **Hook in React** is a **special function** that lets you **use React features (like state or side effects) in functional components** without needing to write a class.  

- Think of it as a **toolbox for functional components** to make them more powerful and capable.  

For example:  
- `useState` lets you **add state** to a component.  
- `useEffect` lets you **run code when the component renders or updates**.  

Hooks **always start with "use"** (e.g., `useState`, `useEffect`).  

## 6. Which hook is used to manage state?
- The useState hook is used to manage state in React functional components.
  
## 7. What is state? What is props? What is difference state and props?

## 🌟 **State**  
- **State** is like a **memory box** inside a **component**.  
- It **stores data** that can **change** over time (e.g., button clicks, form input).  
- **Example:** A counter that increases every time you press a button.  

**Example of State:**  
```javascript
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0); // State initialized with 0

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
```

---

## 🌟 **Props**  
- **Props** are like **delivery boxes** that **pass data from a parent component to a child component**.  
- They are **read-only**—child components **cannot change props** directly.  
- **Example:** Passing a username from one component to another.  

**Example of Props:**  
```javascript
function Greeting(props) {
    return <h1>Hello, {props.name}!</h1>;
}

function App() {
    return <Greeting name="Priyank" />;
}
```

---

## 🌟 **Difference Between State and Props**  

| **State** | **Props** |  
|-----------|----------|  
| Managed **inside** the component | Passed **from parent to child** |  
| **Can be changed** (mutable) | **Cannot be changed** (read-only) |  
| Used for **dynamic data** | Used for **passing data** |  
| Example: Counter value | Example: Username passed to a child |  

### 🚀 **Easy Analogy:**  
- **State** is like your **personal diary** (you can write and change it).  
- **Props** are like a **letter from your parents** (you can read it but not change its content).  

