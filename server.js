'use strict';

const express = require('express');

const dotenv = require('dotenv');
dotenv.config({path: './.env'});

const NewsApi = require('newsapi');
const newsapi = new NewsApi(process.env.NEWS_API_ACCESS_KEY);

newsapi.v2.topHeadlines({
    q: '新型コロナ',
    category: 'business',
    language: 'ja'
}).then(news => console.log(news));


