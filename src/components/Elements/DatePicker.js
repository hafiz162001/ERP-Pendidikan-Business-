import { ErrorMessage, Field } from 'formik'
import React from 'react'
import DateView from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function DatePicker(props) {
    const {label, name, ...rest} = props
    return (
        <div className='mb-3'>
            <label className='form-label' htmlFor={name}> {label} </label>
            
                <Field name={name}>
                    {
                        ({form, field}) => {
                            const {setFieldValue} = form
                            const {value} = field
                            return <DateView
                                className='form-control' 
                                id={name} {...field} {...rest} 
                                selected={value} 
                                onChange={val => setFieldValue(name, val)}
                                dateFormat="yyyy-MM-dd"
                                peekNextMonth
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                                /> 
                        }
                    }
                </Field>
           
            <ErrorMessage name={name}  component="div" className="invalid-feedback"/>
        </div>
    )
}

export default DatePicker