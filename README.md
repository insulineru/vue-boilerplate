# Vue Boilerplate

## Функционал бойлерплейта

- Подключены наиболее используемые пакеты: [Router](https://github.com/vuejs/vue-router), [Vuex](https://github.com/vuejs/vuex), [i18n](https://github.com/kazupon/vue-i18n), [Vuetify](https://github.com/vuetifyjs/vuetify)
- Используется компонентный подход
- Настроена мультиязычность (стандартно русский и английский язык)
- Создана базовая разметка для приложения с помощью Vuetify
- Eslint для проверки ошибок
- Добавлена ночная тема с включением в Навбаре

## Установка проекта

- установите [NodeJS](https://nodejs.org/en/) (если требуется) и [Yarn](https://yarnpkg.com/en/docs/install)
- скачайте сборку с помощью [Git](https://git-scm.com/downloads):
  `git clone https://github.com/insulineru/vue-boilerplate.git`
- перейдите в скачанную папку со сборкой: `cd vue-boilerplate`
- скачайте необходимые зависимости: `yarn`
- чтобы начать работу, введите команду: `yarn serve` (режим разработки)
- чтобы собрать проект, введите команду `yarn build` (режим сборки)

## Деплой проекта

В сборке добавлен файл deploy.sh, который при минимальной донастройке можно использовать для деплоя вашего проекта на Github Pages. Для этого неообходимо:

- В файле vue.config.js указать
  `publicPath: process.env.NODE_ENV === "production" ? "/<REPONAME>/" : "/"`
  где вместо REPONAME указать название вашего репозитория на гитхабе.
- В файле deploy.sh
  `git push -f git@github.com:<USERNAME>/<REPONAME>.git master:gh-pages`
  заменить `<USERNAME>` на ваш логин на гитхабе, а `<REPONAME>` на название вашего репозитория.
- После этого в корневой директории проекта пропишите `sh deploy.sh` и при необходимости введите пароль от Github для пуша в репозиторий.
- Инструкция по добавлению на отдельный домен находится внутри файла `deploy.sh`

## Со стартовой страницей репозитория можно ознакомиться по адресу

https://insulineru.github.io/vue-boilerplate/
