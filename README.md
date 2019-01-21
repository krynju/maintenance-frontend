# MaintenanceFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Backend

To run the backend a few env vars have to be set.

* `ORA_USER`
* `ORA_PASSWORD`
* `ORA_CONNECTION`

To connect to the *ora3inf* server, set `ORA_CONNECTION` to `ora3inf` and put the following config in the **Oracle Client configuration file** (see [this](https://oracle.github.io/node-oracledb/doc/api.html#tnsadmin)):

```text
ora3inf =
 (DESCRIPTION =
   (ADDRESS = (PROTOCOL = TCP)(HOST = ora3.elka.pw.edu.pl)(PORT = 1521))
   (CONNECT_DATA =
     (SID = ora3inf)
   )
 )
```

Then to run it execute from the root of the project:

```bash
npm run server
```
