import React, { useState } from 'react'
import {omit} from 'lodash'

const useForm = (callback) => {
    
    //Form values
    const [values, setValues] = useState({});
    //Errors
    const [errors, setErrors] = useState({});



    const validate = (event, name, value) => {
        //A function to validate each input values

        switch (name) {
            case 'username':

                if(value.length <= 4){
                    // we will set the error state

                    setErrors({
                        ...errors,
                        username:'Podane imię powinno zawierać minimum 5 znaków'
                    })
                }else{
                    // set the error state empty or remove the error for username input

                    //omit function removes/omits the value from given object and returns a new object
                    let newObj = omit(errors, "username");
                    setErrors(newObj);

                    
                }
                break;
        
            case 'wiek':
                if (
                    !new RegExp('^[1-9][0-9]*$').test(value)
                ) {
                    setErrors({
                        ...errors,
                        wiek: 'Musisz podać liczbę, zero nie może być pierwsze'
                    })
                }
                else if(value.length <= 1) {
                    // we will set the error state

                    setErrors({
                        ...errors,
                        wiek: 'Musisz podać dwucyfrową liczbę'
                    })
                }
                else if (value.length >2) {
                    // we will set the error state

                    setErrors({
                        ...errors,
                        wiek: 'Musisz podać dwucyfrową liczbę'
                    })
                }
                else {

                    let newObj = omit(errors, "wiek");
                    setErrors(newObj);

                }
                break;

            case 'wzrost':
                if (
                    !new RegExp('^[1-9][0-9]*$').test(value)
                ) {
                    setErrors({
                        ...errors,
                        wzrost: 'Musisz podać liczbę, zero nie może być pierwsze'
                    })
                }
                else if (value.length <= 2) {
                    // we will set the error state

                    setErrors({
                        ...errors,
                        wzrost: 'Musisz podać trzycyfrową liczbę'
                    })
                }
                else if (value.length > 3) {
                    // we will set the error state

                    setErrors({
                        ...errors,
                        wzrost: 'Musisz podać trzycyfrową liczbę'
                    })
                }
                else {

                    let newObj = omit(errors, "wzrost");
                    setErrors(newObj);

                }
                break;


            case 'waga':
                if (
                    !new RegExp('^[1-9][0-9]*$').test(value)
                ) {
                    setErrors({
                        ...errors,
                        waga: 'Musisz podać liczbę, zero nie może być pierwsze'
                    })
                }
                else if (value.length <= 1) {
                    // we will set the error state

                    setErrors({
                        ...errors,
                        waga: 'Musisz podać minimum dwucyfrową liczbę'
                    })
                }
                else if (value.length > 3) {
                    // we will set the error state

                    setErrors({
                        ...errors,
                        waga: 'Liczba nie może być większa niż trzycyfrowa'
                    })
                }
                else {

                    let newObj = omit(errors, "waga");
                    setErrors(newObj);

                }
                break;
            
            case 'password':
                if(
                    !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)
                ){
                    setErrors({
                        ...errors,
                        password:'Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers'
                    })
                }else{

                    let newObj = omit(errors, "password");
                    setErrors(newObj);
                    
                }
            break;
            
            default:
                break;
        }
    }

  //A method to handle form inputs
    const handleChange = (event) => {
        //To stop default events    
        event.persist();

        let name = event.target.name;
        let val = event.target.value;

        validate(event,name,val);
        //Let's set these values in state

        setValues({
            ...values,
            [name]:val,
        })

    }


    const handleSubmit = (event) => {
        if(event) event.preventDefault();

        if(Object.keys(errors).length === 0 && Object.keys(values).length !==0 ){
            callback();

        }else{
            alert("Wystapil blad podczas walidacji");
        }
    }


    return {
        values,
        errors,
        handleChange,
        handleSubmit
    }
}

export default useForm
