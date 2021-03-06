import { getMethods } from './Methods';

const methods = getMethods('/customer');

export const Servers = Object.freeze({
  get: (id) => methods.get(`?id=${id}`),
  add: (server) => methods.post('', server),
});
