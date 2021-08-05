import { url } from './config.js';
import axios from 'axios';

export const blogLink = async () => {
  try{
    const res = await axios.get(`${url}/bloglink`);
    const data = JSON.stringify(res.data);

    return data;
  }
  catch(e){
    alert(e);
  }
};

export const corporateNews = async () => {
  try{
    const res = await axios.get(`${url}/corporatenews`);
    const data = JSON.stringify(typeof(res.data));
    console.log(data);
    return data;
  }
  catch(e){
    alert(e);
  }
};

export const nameCard = async () => {
  try{
    const res = await axios.get(`${url}/namecard`);
    const data = JSON.stringify(res.data);
    return data;
  }
  catch(e){
    alert(e);
  }
};

export const pressRelease = async () => {
  try{
    const res = await axios.get(`${url}/pressrelease`);
    const data = JSON.stringify(res.data);
    return data;
  }
  catch(e){
    alert(e);
  }
};
