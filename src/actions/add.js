import { getState, setState } from "../store";

/* FIXME:
*
* export a function that adds a new element to the store.
*
* Rules:
* - add must be able to take either a single element
* or an array of new elements
* - you must use the functions from "../store"
*
*/

const add = (arr) => {
    if (typeof(arr) === 'string')
        getState().push(arr);
    else if (Array.isArray(arr))
        setState([...getState(), ...arr])
    };

export default add;
