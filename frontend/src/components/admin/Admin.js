import React, { useEffect } from "react"
import { categoriesApi } from "../../api/categoriesApi"
import { useSelector, useDispatch } from "react-redux"
import { token } from "../../features/auth/authSlice"

export default function Admin() {

    const tokenState = useSelector(token)
    // const response = async () => await fetch(`${process.env.REACT_APP_BACKEND_PROTOCOL}://${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}/api/categories/item/1`,
    // { headers: {  Authorization: `Bearer ${tokenState}` }});
    // console.log(response)
    // const data = response.json()

     (async function () {
const response = await  fetch(`${process.env.REACT_APP_BACKEND_PROTOCOL}://${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}/api/categories/item/1`,
{ headers: {  Authorization: `Bearer ${tokenState}` }});
console.log(response)

     })()




    // .then(response => {console.log(response)})
    // .then(p => {console.log(p)})
    // .catch(error => console.log(error));


    useEffect(() =>
    {
        try {

            // fetch(`${process.env.REACT_APP_BACKEND_PROTOCOL}://${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}/api/categories/item/1`,
            // { headers: {  Authorization: `Bearer ${tokenState}` }})
            // .then(response => {console.log(response)})
            // .then(p => {console.log(p)})
            // .catch(error => console.log(error));




            // categoriesApi.getCategory(tokenState, 1)
            // .then(response => response.data)
            // .then(p => console.log(p));
        } catch (error) {
            console.log(error);
        }


    } ,[]);

    return (
        <div>
            <h1>Admin page</h1>
        </div>
    )
}