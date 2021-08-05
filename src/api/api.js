import { url } from './config.js';
import axios from 'axios';

export const blogLink = async () => {
  try {
    const res = await axios.get(`${url}/bloglink`);
<<<<<<< HEAD
    console.log('b' + res.data);
    return res.data;
  } catch (e) {
=======
    const data = JSON.stringify(res.data);

    return data;
  }
  catch(e){
>>>>>>> 889363f68734e1778e0ee197003db15919e894a8
    alert(e);
  }
};

export const corporateNews = async () => {
  try {
    const res = await axios.get(`${url}/corporatenews`);
<<<<<<< HEAD
    console.log('c' + res.data);
    return res.data;
  } catch (e) {
=======
    const data = JSON.stringify(typeof(res.data));
    console.log(data);
    return data;
  }
  catch(e){
>>>>>>> 889363f68734e1778e0ee197003db15919e894a8
    alert(e);
  }
};

export const nameCard = async () => {
  try {
    const res = await axios.get(`${url}/namecard`);
<<<<<<< HEAD
    console.log('n' + res.data);
    return res.data;
  } catch (e) {
=======
    const data = JSON.stringify(res.data);
    return data;
  }
  catch(e){
>>>>>>> 889363f68734e1778e0ee197003db15919e894a8
    alert(e);
  }
};

export const pressRelease = async () => {
  try {
    const res = await axios.get(`${url}/pressrelease`);
<<<<<<< HEAD
    console.log('p' + res.data);
    return res.data;
  } catch (e) {
=======
    const data = JSON.stringify(res.data);
    return data;
  }
  catch(e){
>>>>>>> 889363f68734e1778e0ee197003db15919e894a8
    alert(e);
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
