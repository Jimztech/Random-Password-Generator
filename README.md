# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Description:
A Random Password Generator script to generate random passwords of a specified length and strength, containing a mix of uppercase letters, lowercase letters, numbers, and special characters. This project includes writing at least six (6) test cases

For file configuration:
Run: npm init.
Run: npm install, to install all dependencies.

Test cases:
In the LengthInput.test.js file:

We test if the length input changes its value correctly when the user types in a new value. We simulate this behavior using the fireEvent.change method from React Testing Library.

We use the jest.fn() to create a mock function for the setLength prop, and we expect it to be called with the correct value when the input value changes.


Here below is how the Password.test.jsx Random Password Generator Scripts with tests.
Testing the generated password's length.
Testing if the generated password has uppercase letters for strong strength.
Testing if the generated password has lowercase letters for medium strength.
Testing if the generated password has numbers for weak strength.
Testing if the generated password has special characters for strong strength.
Testing if the generated password has a mix of characters for medium strength.

Run: npm install --save-dev @testing-library/react @testing-library/jest-dom
