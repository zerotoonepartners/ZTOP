import { url } from './config.js';
import axios from 'axios';

export const blogLink = async () => {
  try{
    const res = await axios.get(`${url}/bloglink`);
    console.log("b"+res.data);
    return res.data;
  }
  catch(e){
    alert(e);
  }
};

export const corporateNews = async () => {
  try{
    const res = await axios.get(`${url}/corporatenews`);
    console.log("c"+res.data);
    return res.data;
  }
  catch(e){
    alert(e);
  }
};

export const nameCard = async () => {
  try{
    const res = await axios.get(`${url}/namecard`);
    console.log("n"+res.data);
    return res.data;
  }
  catch(e){
    alert(e);
  }
};

export const pressRelease = async () => {
  try{
    const res = await axios.get(`${url}/pressrelease`);
    console.log("p"+res.data);
    return res.data;
  }
  catch(e){
    alert(e);
  }
};
