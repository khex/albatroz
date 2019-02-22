# Albatroz

## Links
 - code-maze.com/angular-material-navigation/
 - medium.com/@michelestieven/organizing-angular-applications-f0510761d65a

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

```
ng build --prod --base-href "/albatroz/" --deployUrl="/albatroz/"
```

### --base-href
  for proper source routing on GitHub Pages.

### --deploy-url
  Link for code sourses <script src="/albatroz/main.e09a...4b74.js"></script>

### --deleteOutputPath
  перезаписывает существующие файлы и не трогает остальные, как папки с картинками

```
npx ngh dir=dist/
```


## Development server
```
ng serve dist/
```
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
