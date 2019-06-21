import { IUser } from "./types/user";
import { IPost } from "./types/blog";

import moment from "moment";

export const users: IUser[] = [
  {
    id: 1,
    login: "admin",
    password: "admin",
    email: "admin@admin.admin",
    phone: "+75555555555",
    firstName: "admin",
    secondName: "adminovich",
    thirdName: "adminov",
  },
  {
    id: 2,
    login: "chedmin",
    password: "chedmin",
    email: "chedmin@adminich.chedmin",
    phone: "+75544422244",
    firstName: "adminich",
    secondName: "adminichovich",
    thirdName: "adminichov",
  },
];

export const posts: IPost[] = [
  {
    id: 1,
    title: "1 post",
    smallContent: "1 post content",
    fullContent: "1 post content full",
    user: 1,
    date: moment("13.06.2010 11:11", "DD.MM.YYYY HH:mm")
      .utc()
      .valueOf(),
  },
  {
    id: 2,
    title: "2 post",
    smallContent: "2 post content",
    fullContent: "2 post content full",
    user: 2,
    date: moment("06.06.2019 18:07", "DD.MM.YYYY HH:mm")
      .utc()
      .valueOf(),
  },
  {
    id: 3,
    title: "3 post",
    smallContent: "3 post content",
    fullContent: "3 post content full",
    user: 1,
    date: moment("12.06.2010 14:40", "DD.MM.YYYY HH:mm")
      .utc()
      .valueOf(),
  },
  {
    id: 4,
    title: "4 post",
    smallContent: "4 post content",
    fullContent: "4 post content full",
    user: 2,
    date: moment("13.06.2010 11:11", "DD.MM.YYYY HH:mm")
      .utc()
      .valueOf(),
  },
  {
    id: 5,
    title: "5 post",
    smallContent: "5 post content",
    fullContent: "5 post content full",
    user: 1,
    date: moment("06.06.2019 18:07", "DD.MM.YYYY HH:mm")
      .utc()
      .valueOf(),
  },
  {
    id: 6,
    title: "6 post",
    smallContent: "6 post content",
    fullContent: "6 post content full",
    user: 1,
    date: moment("12.06.2010 14:40", "DD.MM.YYYY HH:mm")
      .utc()
      .valueOf(),
  },
  {
    id: 7,
    title: "1 post",
    smallContent: "7 post content",
    fullContent: "7 post content full",
    user: 2,
    date: moment("13.06.2010 11:11", "DD.MM.YYYY HH:mm")
      .utc()
      .valueOf(),
  },
  {
    id: 8,
    title: "8 post",
    smallContent: "8 post content",
    fullContent: "8 post content full",
    user: 2,
    date: moment("06.06.2019 18:07", "DD.MM.YYYY HH:mm")
      .utc()
      .valueOf(),
  },
  {
    id: 9,
    title: "9 post",
    smallContent: "9 post content",
    fullContent: "9 post content full",
    user: 1,
    date: moment("12.06.2010 14:40", "DD.MM.YYYY HH:mm")
      .utc()
      .valueOf(),
  },
  {
    id: 10,
    title: "10 post",
    smallContent: "10 post content",
    fullContent: "10 post content full",
    user: 1,
    date: moment("13.06.2010 11:11", "DD.MM.YYYY HH:mm")
      .utc()
      .valueOf(),
  },
  {
    id: 11,
    title: "11 post",
    smallContent: "11 post content",
    fullContent: "11 post content full",
    user: 1,
    date: moment("06.06.2019 18:07", "DD.MM.YYYY HH:mm")
      .utc()
      .valueOf(),
  },
  {
    id: 12,
    title: "12 post",
    smallContent: "12 post content",
    fullContent: "12 post content full",
    user: 1,
    date: moment("06.06.2019 18:07", "DD.MM.YYYY HH:mm")
      .utc()
      .valueOf(),
  },
  {
    id: 13,
    title: "13 post",
    smallContent: "13 post content",
    fullContent: "13 post content full",
    user: 1,
    date: moment("12.06.2010 14:40", "DD.MM.YYYY HH:mm")
      .utc()
      .valueOf(),
  },
  {
    id: 14,
    title: "14 post",
    smallContent: "14 post content",
    fullContent: "14 post content full",
    user: 1,
    date: moment("13.06.2010 11:11", "DD.MM.YYYY HH:mm")
      .utc()
      .valueOf(),
  },
  {
    id: 15,
    title: "15 post",
    smallContent: "15 post content",
    fullContent: "15 post content full",
    user: 1,
    date: moment("06.06.2019 18:07", "DD.MM.YYYY HH:mm")
      .utc()
      .valueOf(),
  },
  {
    id: 16,
    title: "16 post",
    smallContent: "16 post content",
    fullContent: "16 post content full",
    user: 1,
    date: moment("12.06.2010 14:40", "DD.MM.YYYY HH:mm")
      .utc()
      .valueOf(),
  },
  {
    id: 17,
    title: "17 post",
    smallContent: "17 post content",
    fullContent: "17 post content full",
    user: 1,
    date: moment("13.06.2010 11:11", "DD.MM.YYYY HH:mm")
      .utc()
      .valueOf(),
  },
  {
    id: 18,
    title: "18 post",
    smallContent: "18 post content",
    fullContent: "18 post content full",
    user: 1,
    date: moment("06.06.2019 18:07", "DD.MM.YYYY HH:mm")
      .utc()
      .valueOf(),
  },
  {
    id: 19,
    title: "19 post",
    smallContent: "19post content",
    fullContent: "19 post content full",
    user: 1,
    date: moment("12.06.2010 14:40", "DD.MM.YYYY HH:mm")
      .utc()
      .valueOf(),
  },
  {
    id: 20,
    title: "20 post",
    smallContent: "20 post content",
    fullContent: "20 post content full",
    user: 1,
    date: moment("13.06.2010 11:11", "DD.MM.YYYY HH:mm")
      .utc()
      .valueOf(),
  },
  {
    id: 21,
    title: "21 post",
    smallContent: "21 post content",
    fullContent: "21 post content full",
    user: 1,
    date: moment("06.06.2019 18:07", "DD.MM.YYYY HH:mm")
      .utc()
      .valueOf(),
  },
  {
    id: 22,
    title: "22 post",
    smallContent: "22 post content",
    fullContent: "22 post content full",
    user: 1,
    date: moment("06.06.2019 18:07", "DD.MM.YYYY HH:mm")
      .utc()
      .valueOf(),
  },
];
