import { IStrongManItem } from "../../../components/Index/StrongMan/StrongManItem";

// на этапе инициализации getData, routes === undefined
const getData = (routes: any): IStrongManItem[] => [
  {
    link: routes.blog.link(),
    title: "Блог",
    position: {
      horizontal: { top: 12, right: 89 },
      vertical: { top: 6, right: 71 },
    },
  },
  {
    link: routes.user.link(1),
    title: "Страница пользователя, но надо авторизоваться",
    position: {
      horizontal: { top: 11, right: 11 },
      vertical: { top: 16, right: 14 },
    },
  },
  {
    link: routes.userMy.link(),
    title: "Просто очень хороший человек, но вы сначала залогиньтесь",
    position: {
      horizontal: { top: 30, left: 63 },
      vertical: { top: 27, left: 2 },
    },
  },
  {
    link: routes.blogPost.link(3),
    title: "Фоточка классной пицки",
    position: {
      horizontal: { top: 40, right: 3 },
      vertical: { top: 36, left: 47 },
    },
  },

  {
    title: "Загрузить через форму пару картинок: тоже пока в планах",
    position: {
      horizontal: { top: 31, right: 76 },
      vertical: { top: 45, right: 37 },
    },
  },
  {
    title:
      "Редактировать этот компонент онлайн без регистрации: обязательно чрез React Lazy",
    position: {
      horizontal: { top: 2, right: 32 },
      vertical: { top: 57, left: 37 },
    },
  },
  {
    title: "Сделать пользователя этой странички счастливым",
    position: {
      horizontal: { top: 6, left: 20 },
      vertical: { top: 71, right: 47 },
    },
  },
  {
    title: "Устроиться на классную работу",
    position: {
      horizontal: { top: 57, right: 70 },
      vertical: { top: 90, left: 55 },
    },
  },
  {
    title: "вжух и react-localize-redux",
    position: {
      horizontal: { top: 75, left: 5 },
      vertical: { top: 82, left: 33 },
    },
  },
  {
    title: "Скоро тут будет ещё что нибудь",
    position: {
      horizontal: { top: 55, left: 73 },
      vertical: { top: 3, right: 7 },
    },
  },
  {
    title: "вжух и react-router-ga",
    position: {
      horizontal: { top: 87, right: 16 },
      vertical: { top: 89, right: 79 },
    },
  },
];

export default getData;
