// pass value not reference
import articles from "./articleData";
import _ from "lodash";

var uniqueId = function() {
  return (
    "id-" +
    Math.random()
      .toString(36)
      .substr(2, 16)
  );
};

var _clone = function(item) {
  // JSON.stringify: convert js value to JSON
  // JSON.parse: convert JSON to javascript object
  //return cloned copy so that the item is passed by value instead of by reference
  return JSON.parse(JSON.stringify(item));
};

var ArticleApi = {
  getAllArticles: function() {
    return _clone(articles);
  },

  getArticlesByType: function(type) {
    var articleByType = _.filter(articles.articles, { type: type });
    return _clone(articleByType);
  },

  saveArticle: function(article) {
    if (article.id) {
      var existingArticleIndex = _.indexOf(
        articles.articles,
        _.find(articles.articles, { id: articles.id })
      );
      articles.articles.splice(existingArticleIndex, 1, article);
    } else {
      article.id = uniqueId();
      articles.articles.push(article);
    }

    return _clone(article);
  },

  deleteArticle: function(id) {
    _.remove(articles, { id: id });
  }
};

export default ArticleApi;
