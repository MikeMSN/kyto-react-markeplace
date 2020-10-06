import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";
import phones from "./phones";
import phonesPage from "./phonesPage";
import phonePage from "./phonePage";
import basket from "./basket";

export default history => combineReducers({
    phones,
    phonesPage,
    phonePage,
    basket,
    router: connectRouter(history)
})