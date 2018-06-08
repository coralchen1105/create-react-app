import Dispatcher from "../dispatcher/appDispatcher";
import ArticleApi from "../../api/articleApi";
import { CREATE_ARTICLE } from "../constants/actionTypes";

class ArticleAction {
  createArticle(article) {
    // new data already pass from user interface and save to newArticle object
    var newArticle = ArticleApi.saveArticle(article);
    // dispatcher object get the payload which is get from user interface
    // and broadcast to all stores that the new data got change
    Dispatcher.dispatch({
      actionType: CREATE_ARTICLE,
      article: newArticle
    });
  }
}

export default ArticleAction;
