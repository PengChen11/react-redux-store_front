# Virtual Store

An online shopping portal for a fictional store

[Click here to see phase 1 requirements](./docs/phase1.md);

## Business Requirements

Our application will power an online storefront that will allow our users to browse our product offerings by category, place items in their shopping cart, and check-out when they are ready to make their purchase

### Walkthrough Demo

![Virtual Store](https://code-401-javascript-guide.s3-us-west-2.amazonaws.com/assets/store.gif)

The core requirements and functionality are as follows:

- Display a list of our product categories
- Display a listing of products for each category, when the category is selected
- From the product listings:
  - Click to view a full detail page about the product
  - Add the product to your shopping cart
- Shopping cart (simple version) always visible on screen
- Full shopping cart and check out screen available from main navigation

## Technical Requirements

The application will be created with the following overall architecture and methodologies

1. React
2. ES6 Classes
3. Redux Store for Application State
4. Deployed API with Mongo storage for storing categories and products
5. Superagent or Axios for performing API Requests
6. Material UI for layout and styling
7. Test Driven Development, using Jest
8. Deployment to a cloud provider (Netlify, Amplify, or GitHub Pages)

### Application Structure (proposed)

```text
├── .gitignore
├── .eslintrc.json
├── __tests__
│   ├── app.test.js
│   ├── cart.test.js
├── src
│   ├── index.js
│   ├── app.js
│   ├── store
│   │   ├── index.js
│   │   ├── categories.js
│   │   ├── products.js
│   │   ├── cart.js
│   ├── components
│   │   ├── storefront
│   │   │   └── categories.js
│   │   │   └── current-category.js
│   │   │   └── products.js
│   │   │   └── storefront.js
│   │   ├── products
│   │   │   └── details.js
│   │   ├── cart
│   │   │   └── simplecart.js
│   │   │   └── checkout.js
│   │   ├── header
│   │   │   └── header.js
│   │   ├── footer
│   │   │   └── footer.js
└── package.json
```

## Development Process, Milestones

1. **Phase 1: Application Setup**
   - asic React Application
   - Redux State Management
   - State managed in memory
   - Material UI Components & Styling

2. **Phase 2: Shopping Cart**
   - Add items to a shopping cart
   - Update quantities
   - Remove items from the cart
   - Show the cart in real-time on the UI

3. **Phase 3: Live Data**
   - Connect the application a live API
   - Persist changes to products based on cart activity.

4. **Phase 4: Checkout & Detail Pages**
   - Refactor the store to use the latest Redux design pattern (Redux Toolkit)
   - Add a cart checkout page
   - Add a product details page
