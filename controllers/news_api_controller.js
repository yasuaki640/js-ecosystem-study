const NewsApi = require('newsapi');
const newsapi = new NewsApi(process.env.NEWS_API_ACCESS_KEY);

exports.index = function (req, res, next) {
    newsapi.v2.topHeadlines({
        country: 'jp'
    }).then(news => res.add(news));
};

exports.getTopLines = function (req, res, next, query, category) {
    newsapi.v2.topHeadlines({
        q: query,
        category: category,
        country: 'jp'
    }).then(news => res.add(news));
};