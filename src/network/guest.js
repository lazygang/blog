import {request} from './request'

export function pushguest(guestdata) {
  return request({
    url:'guest/',
    method:'post',
    data:guestdata
  });
}

export function getguest() {
    return request({
      url:'guest/content',
    });
  }

