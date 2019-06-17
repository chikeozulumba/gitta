import axios from 'axios';
import { items } from '../mocks/repos';

jest.spyOn(axios, 'get').mockImplementation(() => new Promise(resolve => resolve({
  data: {
    items,
  },
})));