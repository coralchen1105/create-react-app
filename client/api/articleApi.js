"use strict";

var articles = require("./articleApi").articles;
var _ = require("lodash");

var uniqueId = function() {
  return (
    "id-" +
    Math.random()
      .toString(36)
      .substr(2, 16)
  );
};

var _clone = function(item) {
  return JSON.parse(JSON.stringify(item));
};

var ArticleApi = {
  getAllArticles: function() {
    return _clone(articles);
  },

  getArticlesByType: function(type) {
    var articleByType = _.find(articles, { type: type });
    return _clone(articleByType);
  },

  saveArticle: function(article) {
    if (article.id) {
      var existingArticleIndex = _.indexOf(
        articles,
        _.find(articles, { id: articles.id })
      );
      articles.splice(existingArticleIndex, 1, article);
    } else {
      article.id = uniqueId;
      articles.push(article);
    }

    return _clone(article);
  }
};
