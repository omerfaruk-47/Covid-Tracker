import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { headers } from "./../constants/index";

//api'lerden bayrak ve ülkelerin corona verilerini alıcak ve slice aktıracak asenkron thunk aksiyonu

export const getData = createAsyncThunk("countryData", async (isoCode) => {
  //api isteğinde kullanılacak parametreleri belirle
  const params = { q: isoCode };

  //api 'dan corona bilgilerini al
  const req1 = axios.get(`https://covid-19-statistics.p.rapidapi.com/reports`, {
    params,
    headers,
  });

  // ülke  detaylarını verilerini api'den al
  const req2 = axios.get(`https://restcountries.com/v3.1/name/${isoCode}`);

  //her iki api isteğini senkron/ pararlel bir şekilde gönder
  const responses = await Promise.all([req1, req2]);

  //covid bilgilerindeki region nesnesini covid nesnesi içerisine dağıt
  const covid = {
    ...responses[0].data.data[0],
    ...responses[0].data.data[0].region,
  };

  delete covid.region;
  delete covid.cities;

  // payloadı return etmek
  return {
    covid,
    country: responses[1].data[0],
  };
});
