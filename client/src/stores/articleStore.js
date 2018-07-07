import Dispatcher from "../dispatcher/appDispatcher";
import actionTypes from "../constants/actionTypes";
import { EventEmitter } from "events";
import $ from "jquery";

class ArticleStore extends EventEmitter {
  constructor() {
    super();
    Dispatcher.register(this._registerToActions.bind(this));
  }

  _state = {
    article: [],
    message: "",
    editingBook: null
  };
  _props = {
    url: "http://localhost:5000/api/articles"
  };

  _saveArticle(article) {
    $.ajax({
      url: this._props.url,
      dataType: "json",
      method: "POST",
      data: article,
      cache: false,
      success: function(data) {
        this._state.message = "Successfully added book!";
        this._state.article = data;
      },
      error: function(xhr, status, err) {
        console.log(err);
        console.log("error");
      }
    });
  }
  _registerToActions(action) {
    switch (action.actionType) {
      case actionTypes.CREATE_ACTICLE:
        this._saveArticle(action.payload);

        this.emit("change");
        break;

      default:
    }
  }

  // addChangeListener, removeChangeListener and emitChange is the way that react component
  // would like to be notified as they change, the response with callback function as react component
  // care the change occurring within our stores updates

  // Hooks a React component's callback to the CHANGE event.
  addChangeListener(callback) {
    //the callback is response function  to react component, not use callback function now
    this.on("change", callback);
  }
  // Removes the listener from the CHANGED event.
  removeChangeListener(callback) {
    this.removeListener("change", callback);
  }
}

export default new ArticleStore();
