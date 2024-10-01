import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Cookies from 'js-cookie';
import { Formik } from "formik";
import { signInSchema } from '../Auth/Schema';
import Eye from '../Components/Eye';
import RememberMe from '../Components/RememberMe';
import { pageRoutes } from '../Routes/pageRoutes';
import ErrorMessage from "../Components/ErrorMessage";
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Components/Loader';
import { adminLogin } from '../Redux/actions/authActions';

const Login = () => {
    const navigate = useNavigate();
    const [isEye, setIsEye] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const { isLoading } = useSelector((state) => state?.authReducer);
    const dispatch = useDispatch();
    const initialState = {
        email: Cookies.get('admin_user_email') ?? "",
        password: Cookies.get('admin_user_password' ?? ""),
    };

    const handleLogin = async (values, { setSubmitting }) => {
        setSubmitting(false);
        if (isChecked) {
            Cookies.set('admin_user_email', values?.email, { expires: 365 });
            Cookies.set('admin_user_password', values?.password, { expires: 365 });
        }
        const callback = (response) => {
            if (response.success) navigate(pageRoutes?.dashboard + '/');
        };
        dispatch(adminLogin({ payload: values, callback }));
    };

    if (isLoading) {
        return <Loader />
    }
    return (
        <div>
            <section className="ct_login_main_bg">
                <div className="ct_login_inner_main">
                    <div className="ct_login_left">
                        <div className="ct_padd_inline_212">
                            <div className="ct_admin_logo mx-auto text-center mb-4">
                                <img src="assets/img/Panaloto_logo1.png" alt="" style={{ width: "260px" }} />
                            </div>
                            <div>
                                <h3 className="ct_fs_35 ct_fw_700 ct_ff_poppin  text-center mb-4">LOGIN</h3>
                            </div>
                            <Formik
                                initialValues={initialState}
                                validationSchema={signInSchema}
                                onSubmit={(values, actions) => {
                                    handleLogin(values, actions);
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
                                                type="email"
                                                id="email"
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
                                        <div className="form-group mb-4 position-relative mb-4">
                                            <input
                                                type={isEye ? "text" : "password"}
                                                id="password"
                                                className="ct_login_input form-control ct_ff_poppin"
                                                placeholder="Password"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.password}
                                            />
                                            <i className="bi bi-lock ct_login_icon_top"></i>
                                            <Eye isEye={isEye} onClick={() => setIsEye(!isEye)} data="text-dark" />
                                            <ErrorMessage
                                                errors={errors}
                                                touched={touched}
                                                fieldName="password"
                                            />
                                        </div>
                                        <div className="d-flex align-items-center gap-3 justify-content-between flex-wrap">
                                            <RememberMe isChecked={isChecked} onClick={() => setIsChecked(!isChecked)} />
                                            <div onClick={() => navigate(pageRoutes.forgot_password)}>
                                                <a href="javascript:void(0)" className="ct_clr_8E8E8E ct_ff_poppin">Forgot Passowrd ?</a>
                                            </div>
                                        </div>
                                        <div className="ct_admin_login ct_mt_30 text-center">
                                            <button type="submit" onClick={(e) => handleSubmit(e)}>Login Now</button>
                                        </div>
                                    </form>
                                )}
                            </Formik>
                        </div>
                    </div>
                    <div className="ct_login_right_bg">
                        <h2 className="ct_yellow_text ct_fs_35 ct_anton_ff ct_fw_500  text-center w-100 ">Your good luck is waiting for you </h2>
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
        </div>
    )
}

export default Login;