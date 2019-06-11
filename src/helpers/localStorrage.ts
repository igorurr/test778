interface ILocalStorrage {
  name: string;
  read: (key: string) => any;
  write: (key: string, val: any) => void;
  each: any;
  remove: (key: string) => void;
  clearAll: () => void;
}

import * as storrage from "store/storages/localStorage";
export default storrage as ILocalStorrage;
