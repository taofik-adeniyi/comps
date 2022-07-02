import * as yup from "yup";

export const registerAccountSchema = yup.object({
    name: yup.string().required().label('Name is a required field, cannot be blank'),
    email: yup.string().min(3, 'must be at least 3 characters long').email('must be a valid email').required().label('Email is a required field, cannot be blank'),
    phoneNumber: yup.string().required().label('Phone Number is a required field, cannot be blank'),
    password: yup.string().min(8, 'Password is too short - should be 8 chars minimum.').required().label('Password is a required field, cannot be blank')
})