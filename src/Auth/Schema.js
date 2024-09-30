import * as Yup from "yup";

export const signInSchema = Yup.object().shape({
    email: Yup.string()
        .email("Please enter a valid email address")
        .required("Please enter a valid email address")
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/,
            "Please enter a valid email address"
        ),
    password: Yup.string()
        .required("Please enter your password")
        .min(8, "Password cannot be less then 8 characters")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%&'*+-.,:;<=>?^_`{|}~])/,
            "Strong passwords require at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character."
        ),
});

export const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string()
        .email("Please enter a valid email address")
        .required("Please enter a valid email address")
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/,
            "Please enter a valid email address"
        )
});

export const UpdateUserSchema = Yup.object().shape({
    full_name: Yup.string().matches(/^[a-zA-Z]+(?:\s+[a-zA-Z]+)+$/, 'Please enter your full name (first and last name).')
        .required("Please enter a full name"),
    username: Yup.string().required("Please enter a user name")
});

export const AddWinningAmountSchema = Yup.object().shape({
    created_at: Yup.date().required("Please select Date"),
    two_pm: Yup.string()
        .min(2, "The number length must be at least 2")
        .max(2, "The number length must be at least 2")
        .matches(/^[0-9]{2,}$/, "The number should not be less than zero")
        .optional(),
    five_pm: Yup.string()
        .min(2, "The number length must be at least 2")
        .max(2, "The number length must be at least 2")
        .matches(/^[0-9]{2,}$/, "The number should not be less than zero")
        .optional(),
    nine_pm: Yup.string()
        .min(2, "The number length must be at least 2")
        .max(2, "The number length must be at least 2")
        .matches(/^[0-9]{2,}$/, "The number should not be less than zero")
        .optional(),
});

export const SetBetLimitSchema = Yup.object().shape({
    set_date: Yup.date().required("Please select Date"),
    bet_number: Yup.number()
        .min(1, "The bet number must be at least 1")
        .max(99, "The bet number must be at most 99")
        .required("Please enter Bet Number"),
    max_bet_limit: Yup.number()
        .min(1, "The bet max bet limit must be at least 1")
        .required("Please enter Max Bet Limit")
});

export const ChangePasswordSchema = Yup.object().shape({
    currentPassword: Yup.string()
        .required("Please enter your password")
        .min(8, "Password cannot be less then 8 characters")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%&'*+-.,:;<=>?^_`{|}~])/,
            "Strong passwords require at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character."
        ),
    newPassword: Yup.string()
        .required("Please enter your password")
        .min(8, "Password cannot be less then 8 characters")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%&'*+-.,:;<=>?^_`{|}~])/,
            "Strong passwords require at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character."
        ),
    confirmPassword: Yup.string()
        .required("Please enter confirm password")
        .oneOf([Yup.ref("newPassword"), null], "Your password must match"),
});

export const UpdateAdminSchema = Yup.object().shape({
    full_name: Yup.string().matches(/^[a-zA-Z]+(?:\s+[a-zA-Z]+)+$/, 'Please enter your full name (first and last name).').required("Please enter your full name"),
    username: Yup.string().required("Please enter your user name")
});

export const AddFaqSchema = Yup.object().shape({
    question: Yup.string().required("Please enter question"),
    answer: Yup.string().required("Please enter answer")
});

export const UpdateWinningAmountSchema = Yup.object().shape({
    date: Yup.string().required("Please select Date"),
    two_pm: Yup.string()
        .min(2, "The number length must be at least 2")
        .max(2, "The number length must be at least 2")
        .matches(/^[0-9]{2,}$/, "The number should not be less than zero")
        .optional(),
    five_pm: Yup.string()
        .min(2, "The number length must be at least 2")
        .max(2, "The number length must be at least 2")
        .matches(/^[0-9]{2,}$/, "The number should not be less than zero")
        .optional(),
    nine_pm: Yup.string()
        .min(2, "The number length must be at least 2")
        .max(2, "The number length must be at least 2")
        .matches(/^[0-9]{2,}$/, "The number should not be less than zero")
        .optional(),
});