import Dispatcher from "../dispatcher/appDispatcher";
import actionTypes from "../constants/actionTypes";
import { EventEmitter } from "events";

class ArticleStore extends EventEmitter {
  constructor() {
    super();
    Dispatcher.register(this._registerToActions.bind(this));
  }

  newArticle = [];
  _registerToActions(action) {
    switch (action.actionType) {
      case actionTypes.CREATE_ACTICLE:
        this.newArticle.push(action.payload);
        console.log(this.newArticle);
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
