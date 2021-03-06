import { action, makeObservable, observable } from 'mobx';

class UserStore {
  id = null;

  constructor() {
    makeObservable(this, {
      id: observable,
      setId: action,
    });
  }

  setId(id) {
    this.id = id;
  }
}

export const createStore = (props) => {
  return new UserStore(props);
};
