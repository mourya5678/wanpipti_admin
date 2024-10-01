import React from 'react'
import { useNavigate } from 'react-router';
import { pageRoutes } from '../Routes/pageRoutes';
import ErrorMessage from "../Components/ErrorMessage";
import { Formik } from "formik";
import { ForgotPasswordSchema } from '../Auth/Schema';
import { useDispatch, useSelector } from 'react-redux';
import { adminForgotPassword } from '../Redux/actions/authActions';
import Loader from '../Components/Loader';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isLoading } = useSelector((state) => state?.authReducer);
    const initialState = {
        email: ''
    };

    const handleForgotPassword = async (values, { setSubmitting }) => {
        setSubmitting(false);
        const callback = (response) => {
            if (response.success) navigate(pageRoutes?.login);
        };
        dispatch(adminForgotPassword({ payload: values, callback }));
    };

    if (isLoading) {
        return <Loader />
    }
    return (
        <section className="ct_login_main_bg">
            <div className="ct_login_inner_main">
                <div className="ct_login_left">
                    <div className="ct_padd_inline_212">
                        <div className="ct_admin_logo mx-auto text-center mb-4">
                            <img src="assets/img/Panaloto_logo1.png" alt="" style={{ width: "260px" }} />
                        </div>
                        <div>
                            <h3 className="ct_fs_35 ct_fw_700 ct_ff_poppin  text-center mb-3">FORGOT PASSWORD</h3>
                        </div>
                        <Formik
                            initialValues={initialState}
                            validationSchema={ForgotPasswordSchema}
                            onSubmit={(values, actions) => {
                                handleForgotPassword(values, actions);
                            }}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                            }) => (
                                <form className="ct_mt_30">
                                    <div className="form-group mb-4 position-relative mb-4">
                                        <input
                                            id="email"
                                            type="email"
                                            className="ct_login_input form-control ct_ff_poppin"
                                            placeholder="Email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                        />
                                        <i className="bi bi-envelope-open ct_login_icon_top"></i>
                                        <ErrorMessage
                                            errors={errors}
                                            touched={touched}
                                            fieldName="email"
                                        />
                                    </div>
                                    <div className="ct_admin_login ct_mt_30 text-center">
                                        <button type="submit" onClick={(e) => handleSubmit(e)}>Continue</button>
                                    </div>
                                    <div className="ct_mt_30 text-center">
                                        <p className="ct_ff_poppin ct_clr_8E8E8E">Already have an account?<a href="javascript:void(0)" onClick={() => navigate(pageRoutes.login)} className="ct_blue_text ms-3 ct_fw_700">Login</a></p>
                                    </div>
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
                <div className="ct_login_right_bg">
                    <h2 className="ct_yellow_text ct_fs_35 ct_anton_ff ct_fw_500  text-center w-100">Your good luck is waiting for you </h2>
                    <h3 className="ct_fs_35 ct_anton_ff ct_fw_500 text-white text-center ct_mt_30 w-100">Login Now!!!</h3>
                    <div className="mt-5">
                        <img src="assets/img/countdown_img.png" alt="" className="w-100" />
                    </div>
                    <div className="mt-5">
                        <img src="assets/img/enery_circle.png" alt="" className="w-100 ct_responsive_img_w_50" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ForgotPassword;