import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import * as ActionTypes from '../ActionTypes';

export const getOrder = (data) => async (dispatch) => {
    console.log("getOrder", data);

    try{

        const querySnapshot = await getDocs(collection(db, "Order"));

        let data = []

        querySnapshot.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() })
            console.log(data);
        });
        dispatch({ type: ActionTypes.GET_ORDER_DATA, payload: data })

    } catch (error) {
        console.log(error);
    }
}

export const addOrder = (data) => async (dispatch) => {
    console.log("addOrder",data);

    try{
        const docRef = await addDoc(collection(db, "Order"),data);
        console.log("Document written with ID: ", docRef.id);
        dispatch({ type: ActionTypes.ADD_ORDER_DATA, payload: { id: docRef.id, ...data } })
    } catch (error) {
        console.log(error);
    }
}