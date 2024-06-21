import { handleError } from "@apollo/client/link/http/parseAndCheckHttpResponse";
import { useState } from "react";

export const useForm = keys => {
    const [form, setForm] = useState({
        values: Object.keys(keys).reduce((container, item) => {
            container = {
                ...container,
                [item]: ''
            }
            return container;
        }, {}),
        touched: Object.keys(keys).reduce((container, item) => {
            container = {
                ...container,
                [item]: false
            }
            return container;
        }, {}),
        errors: Object.keys(keys).reduce((container, item) => {
            container = {
                ...container,
                [item]: true
            }
            return container;
        }, {}),
        initialValues: Object.keys(keys).reduce((container, item) => {
            container = {
                ...container,
                [item]: ''
            }
            return container;
        }, {}),
    });
    return [{
        values: form.values,
        errors: form.errors,
        touched: form.touched,
        handleErrors: Object.keys(form.initialValues).some(key => form.errors[key]),
        handleReset: () => {
            setForm(form => ({
                ...form,
                values: form.initialValues,
                touched: Object.keys(form.touched).reduce((container, item) => {
                    container = {
                        ...container,
                        [item]: false
                    }
                    return container;
                }, {}),
                errors: Object.keys(form.errors).reduce((container, item) => {
                    container = {
                        ...container,
                        [item]: true
                    }
                    return container;
                }, {}),
            }));
        },
        handleTouched: ({ target: { name } }) => {
            setForm(form => ({
                ...form,
                touched: {
                    ...form.touched,
                    [name]: true
                }
            }));
        },
        handleChange: ({ target: { name, value } }) => {
            setForm(form => ({
                ...form,
                values: {
                    ...form.values,
                    [name]: value
                },
                errors: {
                    ...form.errors,
                    [name]: (value || '').length === 0
                },
                touched: {
                    ...form.touched,
                    [name]: true
                }
            }));
        }
    }];
};
export default useForm;