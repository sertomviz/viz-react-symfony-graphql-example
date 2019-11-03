# React Apollo spa and Symfony Overblog GraphQL api example

Sample app with two separated parts: GraphQL API (created through the Symfony 4 PHP framework with Oveblog bundle) and SPA (the React app with Apollo qraphql).

It's a basic CRUD of companies to demonstrate the use of Apollo GraphQL hooks in React (useQuery, useMutation) and use of Apollo cache as an alternative to Redux.

The main components of Symfony part:

- Overblog/GraphQL bundle
- Doctrine
- Validator
- Fixtures

The main components of React part:

- Apollo
- Webpack
- Formik & Yup
- Bootstrap 4

## Installation

### Symfony

1. Install application dependencies:
```bash
cd api
composer install
```
2. Configure parameters in the `config/packages/doctrine.yaml` and `.env` files according to your needs.

4. Create the database and schema:
```bash
php bin/console doctrine:database:create
php bin/console doctrine:migrations:diff
php bin/console doctrine:migrations:migrate
```

5. Optionally load sample data
```bash
php bin/console doctrine:fixtures:load
```

### React

1. Install application dependencies:
```bash
cd spa
yarn install
```
3. Change API URL in the `src/constants/appConstants.js` to match your Symfony installation.
4. Run the application in a development mode:
```bash
yarn run dev
```

## Links

Documentation:

* [OverblogGraphQLBundle](https://github.com/overblog/GraphQLBundle)
* [React Apollo](https://github.com/apollographql/react-apollo)
