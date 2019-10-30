# React Apollo spa and Symfony Overblog GraphQL api example

Sample app with two separated parts: GraphQL API (created through the Symfony 4 PHP framework with Oveblog bundle) and SPA (the React app with Apollo qraphql).

It contains a basic CRUD of companies to demonstrate the use of Apollo GraphQL hooks in React, like useQuery, useMutation, and use of Apollo cache as an alternative to Redux.

The main components of the Symfony part:

- Overblog/GraphQL bundle
- Doctrine
- Doctrine Migrations

The main components of the React part:

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

4. Create the database and populate it with some sample data:
```bash
php bin/console doctrine:database:create
php bin/console doctrine:migrations:diff
php bin/console doctrine:migrations:migrate
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
