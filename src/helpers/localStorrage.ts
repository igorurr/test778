interface ILocalStorrage {
  name: string;
  read: (key: string) => any;
  write: (key: string, val: any) => void;
  each: any;
  remove: (key: string) => void;
  clearAll: () => void;
}

export { default } from "store/storages/localStorage";
