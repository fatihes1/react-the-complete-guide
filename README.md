# React The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller Tutorial

## Contents

- [Introduction The React](/codes/01-starting-setup)
- [Styling React Components & Elements](/codes/02-styling-component)
- [Practice Project: React Basics](/codes/03-complete-practice-project)
- [Fragment & Portals & Refs](/codes/04-fragment-portals-refs)
- [Advanced React](/codes/05-advanced-react)
    - [Side Effect](/codes/05-advanced-react/01-side-effect)
    - [Use Reducer](/codes/05-advanced-react/02-use-reducer)
- [Food Order Practice Aoo](/codes/06-food-order-app-practice)
- [Optimizing App](/codes/07-optimization-techniques)
    - [useMemo Usage](/codes/07-optimization-techniques/01-using-useMemo)
- [Class Based Components](/codes/08-class-based-components)
- [Working with HTTP Request](/codes/09-sending-http-request)
    - [Introduction](/codes/09-sending-http-request/01-starting-project)
    - [Intermediate](/codes/09-sending-http-request/02-preparing-project-for-the-next-step)
- [Working with Custom Hooks](/codes/10-custom-react-hooks)
    - [Introduction](/codes/10-custom-react-hooks/01-starting-project)
    - [Intermediate](/codes/10-custom-react-hooks/02-more-realistic-example)
- [Working with Forms](/codes/11-working-with-forms)
- [Practice Project: React Hooks](/codes/12-practice-project)
- [Redux](/codes/13-diving-into-redux)
    - [Introduction](/codes/13-diving-into-redux/01-intro-to-redux)
    - [Intermediate](/codes/13-diving-into-redux)
- [Redux Advanced](/codes/14-advanced-redux)
- [Multi-Page SPA App](/codes/15-building-multi-page-spa)
- [SPA with React Router](/codes/16-SPA-with-react-router)
- [Adding Authentication](/codes/17-adding-authentication)
- [Deploying React App](/codes/18-deploying-react-app)
- [Introduction to Next.js](/codes/19-intro-to-nextjs)
- [Intermediate Next.js](/codes/20-intermediate-next)
- [Animating React Apps](/codes/21-animating-react-apps/01-starting-project)
- [Replace Redux with React Context](/codes/22-replacing-redux-w-hooks/01-starting-project)
- [Testing React Apps](/codes/23-testing-react-apps-w-unit-tests)
- [React with TypeScript](/codes/24-react-with-typescript)
    - [Introduction TypeScript](/codes/24-react-with-typescript/01-starting-project)
    - [React Project with TypeScript](/codes/24-react-with-typescript/02-react-ts-starting)
    - [React Project with TypeScript & Context API](/codes/24-react-with-typescript/03-react-ts-w-context-api)


## What is React? And why would we use it?

React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.

React makes building complex, interactive and reactive user interfaces easy. It is a great tool for building single page applications.

### React.js
- A client-side JavaScript library for building user interfaces
- All about building modern, reactive, and fast user interfaces for the web
- Declarative, component-focused approach

Mobile apps and desktop apps feels very "reactive": Things happen instantly, and the user is in control. React brings this same experience to the web.
You do not wait for new pages to load, but you can navigate through your app instantly. React is fast, scalable, and simple.

Traditionally, in web apps, you click a link and wait for a new web page to load. You click a button and wait for some action to complete.


### JavaScript To The Rescue
- JavaScript runs in the browser - on the loaded page.
- You can manipulate the HTML structure (DOM) of the page.
- No (visible) requests to the server required. No need to wait for a new HTML page as a response.


### Building Single-Page Applications
- Single-page applications (SPAs) are web applications that load a single HTML page and dynamically update that page as the user interacts with the app.
- "Widget" approach on a multi-page-application. Some pages are still rendered on and served by a backend server.
- Single-page applications are a new way of building web applications that are fast, interactive, and maintainable.
- SPA approach: Server only sends one HTML page, thereafter, React takes over and controls the UI.

### React.js and Alternatives
- Angular: Google's framework for building web applications. Complete component-based UI framework, packed with features. Uses TypeScript. Can ve overkill for smaller projects.
- React.js: Facebook's framework for building web applications. Lean and focused component-based UI library. Certain features (e.g. routing) are added via community packages.
- Vue.js: Complete component-based UI framework, includes most core features. A bit less popular than React.js & Angular.


