import { url } from './config.js';
import axios from 'axios';

export const blogLink1 = async () => {
  try {
    const res = await axios.get(`${url}/bloglinkone`);
    const data = res.data;
    return data;
  } catch (e) {
    alert(e);
  }
};

export const blogLink2 = async () => {
  try {
    const res = await axios.get(`${url}/bloglinktwo`);
    const data = res.data;
    return data;
  } catch (e) {
    alert(e);
  }
};

export const blogLink3 = async () => {
  try {
    const res = await axios.get(`${url}/bloglinkthree`);
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

export const detail = async (id) => {
  try {
    const res = await axios.get(`${url}/ztopnotice/${id}`);
    const data = res.data;
    return data;
  } catch (e) {
    alert(e);
  }
};
