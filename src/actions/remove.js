import { getState } from "../store";

/* FIXME:
*
* export a function that removes a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
*
*/

const remove = (element) => {
    var index = getState().indexOf(element);
    if (index > -1)
    {
        getState().splice(index, 1);
    }
};

export default remove;