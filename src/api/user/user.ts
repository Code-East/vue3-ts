import request from '../index';
import type { ListParams, ListModel } from '../model/userModel';

export const getList = (params: ListParams) => {
  return request.get<ListModel>('/list', { params });
};
