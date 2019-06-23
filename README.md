что это

Сайт, реализующий регистрацию/авторизацию пользователей
на странице текущего пользователя имеется возможность его отредактировать
имеется динамическая автодогрузка постов в блоге + возможность посмотреть отдельный пост
+ небольшой лендинг на главной
бэкенд: "коленочная" реализация сервера, хранящего данные в оперативной памяти (цель писать бэкенд не ставилась, просто не хотелось делать на фронте фейковые данные)

[Image alt](https://raw.githubusercontent.com/igorurr/test778/master/screens/1.png)
[Image alt](https://raw.githubusercontent.com/igorurr/test778/master/screens/2.png)
[Image alt](https://raw.githubusercontent.com/igorurr/test778/master/screens/3.png)

стек

typescript / react / redux / react-router / redux-thunk
formik / yup / material-ui / moment / classnames / react-helmet

Запуск проекта

npm i
npm run server - запуск бэка (localhost:3200)
npm start - запуск фронта (localhost:3000)

tslint + prettier

npm run tslint
npm run prettier