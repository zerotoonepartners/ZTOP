import { url } from './config.js';
import axios from 'axios';

export const blogLink = async () => {
  try {
    const res = await axios.get(`${url}/bloglink`);
    const data = res.data;

    return data;
  } catch (e) {
    alert(e);
  }
};

export const ztopNotice = async () => {
  try {
    const res = await axios.get(`${url}/ztopnotice`);
    const data = res.data;
    return data;
  } catch (e) {
    alert(e);
  }
};

export const nameCard = async () => {
  try {
    const res = await axios.get(`${url}/namecard`);
    const data = res.data;
    return data;
  } catch (e) {
    alert(e);
  }
};

export const news = async () => {
  try {
    const res = await axios.get(`${url}/news`);
    const data = res.data;
    return data;
  } catch (e) {
    alert(e);
  }
};

