import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core";

export function useForm(initialFValues, validateOnChange = false, validate) {


    const [values, setValues] = useState(initialFValues);
    const [personName, setPersonName] = React.useState([]);

    const [errors, setErrors] = useState({});

    const handleInputChange = e => {
        const { name, value } = e.target

        setValues({
            ...values,
            [name]: value
        })
        if (validateOnChange)
            validate({ [name]: value })
    }



    const resetForm = () => {
        setValues(initialFValues);
        setErrors({})
    }

    const handlenumberChange = e => {
        const { name, value } = e.target
        //console.log(name)
        //console.log(value)
        const onlyNums = e.target.value.replace(/[^0-9]/g, '');
        if (onlyNums.length < 10) {
            // this.setState({ value: onlyNums });
            setValues({
                ...values,
                [name]: onlyNums
            });
            if (validateOnChange)
                validate({ [name]: onlyNums })
        } else if (onlyNums.length === 10) {
            const number = onlyNums.replace(
                /(\d{3})(\d{3})(\d{4})/,
                '$1$2$3'
            );
            if (name == 'mobile') {
                errors.mobile = '';
            }
            if (name == 'incharge_mobile') {
                errors.incharge_mobile = '';
            }


            setValues({
                ...values,
                [name]: number
            });
            if (validateOnChange)
                validate({ [name]: number })
        }

    }


    const handlepinnumberChange = e => {
        const { name, value } = e.target
        //console.log(name)
        //console.log(value)
        const onlyNums = e.target.value.replace(/[^0-9]/g, '');
        if (onlyNums.length < 6) {
            // this.setState({ value: onlyNums });
            setValues({
                ...values,
                [name]: onlyNums
            });
            if (validateOnChange)
                validate({ [name]: onlyNums })
        } else if (onlyNums.length === 6) {
            const number = onlyNums.replace(
                /(\d{3})(\d{3})(\d{4})/,
                '$1$2$3'
            );


            setValues({
                ...values,
                [name]: number
            });
            if (validateOnChange)
                validate({ [name]: number })
        }
    }

    const handlenumberOnlyChange = e => {
        const { name, value } = e.target
        //console.log(name)
        //console.log(value)
        const onlyNums = e.target.value.replace(/[^0-9]/g, '');
        setValues({
            ...values,
            [name]: onlyNums
        });
        if (validateOnChange)
            validate({ [name]: value })
    }


    const handlepasswordChange = e => {
        const { name, value } = e.target
        //console.log(name);
        //console.log(value)
        //console.log(values.password)
        if (values.password == value) {
            errors.confirm_password = '';
            setValues({
                ...values,
                [name]: value
            })
        }
        else {
            errors.confirm_password = 'Password Mismatched';
            setValues({
                ...values,
                [name]: value

            })
            return;
        }


    }


    const handleCapture = ({ target }) => {
        const { name, value } = target
        // //console.log(target)
        // //console.log(name)
        // //console.log(value)
        if (value != '') {
            const fileReader = new FileReader();
            const name1 = target.accept.includes('image');

            fileReader.readAsDataURL(target.files[0]);
            fileReader.onload = (e) => {
                //console.log(e.target.result)
                setValues({
                    ...values,
                    [name]: e.target.result
                })
            };
        }

    };

    const handleaddressChange = e => {
        //console.log(e)
        const { name, label } = e
        //console.log(label)
        //console.log(values.address)
        setValues({
            ...values,
            address: label
        })
        //console.log(values.address)

    }

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        handlenumberChange,
        handlepinnumberChange,
        handlenumberOnlyChange,
        handlepasswordChange,
        handleaddressChange,
        handleCapture,
        resetForm

    }
}




export function Form(props) {
    const { children, ...other } = props;

    return (
        <form autoComplete="current-fullname" {...other}>
            {props.children}
        </form>
    )
}