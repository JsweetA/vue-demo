import Fly from 'flyio/dist/npm/fly';
import { baseUrl } from '../apiConfig';


const fly = new Fly();
export const request = ({ url, params, method = 'GET', headers = {}, describe = '', callback }) => {
  return new Promise((resolve, reject) => {
    fly
      .request(`${baseUrl}${url}`, params, {
        method,
        headers: {
          'content-type': 'application/json',
          accept: '*/*',
          'satoken': getToken(),
          ...headers,
        },
      })
      .catch((e) => {
        console.log('error', e);
        if (callback) callback(e);
        reject(e);
      });
  });
};

export default request;
