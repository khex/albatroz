# Some Thots
medium.com/@michelestieven/organizing-angular-applications-f0510761d65a

```
A: 192.30.252.153 > 185.199.111.153
https://help.github.com/en/articles/setting-up-an-apex-domain
ServiceWorker needs https!

tracert albatroz.lviv.ua
```
# ToDo
  [ ] `app/views/home/*.*` >> `app/views/*.*`
  [ ] repair hamburger menu

### AppModule
Самый верхний модуль в иерархии приложения.

### Feature Modules - Функциональные Модули [Views or Pages]
  - Все модули которые не относятся к AppModule эсть Feature Modules.
  - Они включают в себя components, directives and pipes, но не сервисы!
  - Импортирует CommonModule, а не BrowserModule.
  - Сan be lazy loaded.
  - Еach module should have its own routing module!

### Core Module - Основной Модуль [Global and Singleton services]
  - Для правильной работы lazy module все сервисы нужно обэдинить
    в одном общем модуле и ипортировать эго в AppModule.

### Shared Modules - Общие модули
  - For reuseble components.
  - We cannot provide services in our shared modules!

APP-+--AppModule
    |
    |--Views (Feature Modules)
    |  |--DashboardModule >> Lazy
    |  |--ContaractModule >> Lazy
    |
    |--CoreModule
    |  |--Auth
    |  |--User
    |
    |--ShareModule
        |--Components
        |--Pipes
        |--Directives

https://github.com/angular/flex-layout/wiki/Responsive-API

https://blog.angularindepth.com/angular-flex-layout-flexbox-and-grid-layout-for-angular-component-6e7c24457b63