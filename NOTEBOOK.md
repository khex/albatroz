# Some Thots
medium.com/@michelestieven/organizing-angular-applications-f0510761d65a

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