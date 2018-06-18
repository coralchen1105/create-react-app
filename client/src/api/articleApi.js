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
      console.log(article.id);
      articles.articles.push(article);
    }

    return _clone(article);
  },

  deleteArticle: function(id) {
    _.remove(articles, { id: id });
  }
};

export default ArticleApi;
