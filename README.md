## Getting Started

To get started running the client for Prospect, clone this repository and run `npm install` to install all dependencies

### Authentication

For the client to connect to Firebase Authentication at runtime, it requires the following secrets to be defined as environment variables:

```
REACT_APP_FIREBASE_KEY="SECRET_VALUE_HERE"
REACT_APP_FIREBASE_APP_ID="SECRET_VALUE_HERE"
REACT_APP_FIREBASE_DOMAIN="SECRET_VALUE_HERE"
REACT_APP_FIREBASE_DATABASE="SECRET_VALUE_HERE"
REACT_APP_FIREBASE_SENDER_ID="SECRET_VALUE_HERE"
REACT_APP_FIREBASE_PROJECT_ID="SECRET_VALUE_HERE"
REACT_APP_FIREBASE_STORAGE_BUCKET="SECRET_VALUE_HERE"
REACT_APP_FIREBASE_MEASUREMENT_ID="SECRET_VALUE_HERE"
```

**Locally:** For convenience, during local development you can place all of the secrets inside of a `.env.build` file in the root of your project directory and they will be provided as environment variables. This file is ignored by git so that secrets are not pushed to the repository.

**Static Hosting:** Your static hosting provider should allow a way for you to provide these environment variables to your application at runtime.

## Available Commands

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run lint`

Lints all files in the source directory. Append the `:fix` option to let the linter automatically fix the files with issues.

### `npm run relay`

Runs `npm run update-schema` and `npm run relay-compile`. Append `:local` option to pull local GraphQL schema.

### `npm run update-schema`

Updates the local GraphQL schema to match the latest schema on the server. Run with the `:local` option to request the GraphQL schema from a local server running on port `8080`. This is useful when developing the client and server simultaneously.

### `npm run relay-compile`

Compiles the `__generated__` relay.js files needed for the GraphQL data layer

## Design

### Design Principles

#### React Context & Hooks

The application accesses much of its needed logic through the React Context and Hooks APIs. Below is a simplified snippet of the root React component.

```
const App = () => {
  return (
    <AuthProvider>            // Provides authentication state to all sub-components
      <EnvironmentProvider>   // Provides access to the HTTP layer to all sub-components
        <BrowserRouter>       // Provides access to routing utilities to all sub-components
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <ThemeProvider>   // Provides theme variables to Material UI sub-components
              ...
            </ThemeProvider>
          </MuiPickersUtilsProvider>
        </BrowserRouter>
      </EnvironmentProvider>
    </AuthProvider>
  );
};
```

By wrapping the application in Authentication, Environment, Routing and Theme providers, all sub-components have access to these contexts and can access values provided by using React hooks as shown in the snippet below:

```
const Login = () => {
  const auth = useAuth();               // Gives sub-component access to the auth state
  const environment = useEnvironment(); // Gives sub-component access to the HTTP environment
  const { location } = useHistory();    // Gives sub-component access to router state such as history and location
  ...
};
```

### Technologies Used

- **Authentication:** [Firebase Authentication](https://firebase.google.com/docs/auth/) is super simple to set up and manage. Their SDK made it really easy to tie auth into our application with middleware on the backend to authenticate the endpoints
- **Charting:** [Chart.js](https://www.chartjs.org/) is a popular javascript charting library
- **Data Layer:** [GraphQL](https://GraphQL.org/) is a new API paradigm that is becoming popular. It allows the client to grab all of the data it needs (and only the data it needs) in a single API call. GraphQL replaces a REST architecture
- **Forms:** [Formik](https://jaredpalmer.com/formik/) is a popular form management library for React
  - **Schema Validation:** [Yup](https://github.com/jquense/yup) is an object schema validation library that integrates easily with Formik
- **Framework:** [React](https://reactjs.org/)
  - This project was bootstrapped with [Create React App](https://facebook.github.io/create-react-app/docs/getting-started)
  - This project heavily uses the React [Hooks](https://reactjs.org/docs/hooks-intro.html) and [Context](https://reactjs.org/docs/context.html) APIs
- **HTTP Layer:** [Relay](https://relay.dev/) is a Facebook library that integrates GraphQL with React to provide a datastore and HTTP layer. It allows each component to declare the data it needs, and then makes API calls when needed.
- **Linting:** [Prettier](https://prettier.io/) is a linting/formatting library that keeps code in a single format
- **Routing:** [ReactRouter](https://reacttraining.com/react-router/web/guides/quick-start) is a popular declarative routing library for React.
- **Styles:** [Material UI](https://material-ui.com/) is a popular UI component library
