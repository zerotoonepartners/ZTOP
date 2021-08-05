import { url } from './config.js';
import axios from 'axios';

export const corporatenews = async () => {
  try {
    const res = await axios.get(`${url}/corporatenews`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const pressrelease = async () => {
  try {
    const res = await axios.get(`${url}/pressrelease`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const namecard = async () => {
  try {
    const res = await axios.get(`${url}/namecard`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const bloglink = async () => {
  try {
    const res = await axios.get(`${url}/bloglink`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getData = async () => {
  try {
    const corporatenews = await axios.get(`${url}/corporatenews`);
    return corporatenews.data;
  } catch (e) {
    console.log(e);
  }
};
