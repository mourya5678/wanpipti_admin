import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import ErrorMessage from "../Components/ErrorMessage";
import { Formik } from "formik";
import { ChangePasswordSchema } from '../Auth/Schema';
import Eye from '../Components/Eye';

const ChangePassword = () => {
    const navigate = useNavigate();
    const [isToggle, setIsToggle] = useState(false);
    const [isEye, setIsEye] = useState(false);
    const [isEye1, setIsEye1] = useState(false);
    const [isEye2, setIsEye2] = useState(false);
    const initialState = {
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
    };

    const onHandleChangePassword = async (values, { setSubmitting }) => {
        setSubmitting(false);
    };


    return (
        <main className={`ct_dashboard_main_bg ${isToggle && 'ct_collapsed_sidebar'}`}>
            <Sidebar onClick={() => setIsToggle(!isToggle)} />
            <div className="ct_right_content">
                <Header onClick={() => setIsToggle(!isToggle)} />
                <div className="ct_inner_dashbaord_main">
                    <div className="ct_white_bg p-4">
                        <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                            <h4 className="ct_fs_24 ps-md-4 ct_fw_600 text-white">Change Password</h4>
                            <div className="d-flex align-items-center gap-3">
                                <div className="ms-md-4 d-flex align-items-center gap-3" onClick={() => navigate(-1)}>
                                    <a href="javascript:void(0)" className=" ct_yellow_btn ct_outline_blue w-auto">Cancel</a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <Formik
                                    initialValues={initialState}
                                    validationSchema={ChangePasswordSchema}
                                    onSubmit={(values, actions) => {
                                        onHandleChangePassword(values, actions);
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
                                        <form className="ps-md-4">
                                            <div className="row mt-4">
                                                <div className="col-md-12 mb-4">
                                                    <div className="form-group">
                                                        <label className="mb-2 ct_fw_500 text-white">Current Password <span
                                                            className="ct_required_text">*</span></label>
                                                        <div className="position-relative">
                                                            <input
                                                                type={isEye ? "text" : "password"}
                                                                id="currentPassword"
                                                                className="ct_input form-control"
                                                                placeholder="Current Password"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.currentPassword}
                                                            />
                                                            <Eye isEye={isEye} onClick={() => setIsEye(!isEye)} />
                                                            <ErrorMessage
                                                                errors={errors}
                                                                touched={touched}
                                                                fieldName="currentPassword"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mb-4">
                                                    <div className="form-group">
                                                        <label className="mb-2 ct_fw_500 text-white">New Password<span
                                                            className="ct_required_text">*</span></label>
                                                        <div className="position-relative">
                                                            <input
                                                                type={isEye1 ? "text" : "password"}
                                                                id="newPassword"
                                                                className="ct_input form-control"
                                                                placeholder="New Password"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.newPassword}
                                                            />
                                                            <Eye isEye={isEye1} onClick={() => setIsEye1(!isEye1)} />
                                                            <ErrorMessage
                                                                errors={errors}
                                                                touched={touched}
                                                                fieldName="newPassword"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mb-4">
                                                    <div className="form-group">
                                                        <label className="mb-2 ct_fw_500 text-white">Confirm Password <span
                                                            className="ct_required_text">*</span></label>
                                                        <div className="position-relative">
                                                            <input
                                                                type={isEye2 ? "text" : "password"}
                                                                id="confirmPassword"
                                                                className="ct_input form-control"
                                                                placeholder="Confirm Password"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.confirmPassword}
                                                            />
                                                            <Eye isEye={isEye2} onClick={() => setIsEye2(!isEye2)} />
                                                            <ErrorMessage
                                                                errors={errors}
                                                                touched={touched}
                                                                fieldName="confirmPassword"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center gap-3">
                                                    <a href="javascript:void(0)" className="ct_yellow_btn  w-auto ">Update</a>
                                                </div>
                                            </div>
                                        </form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ChangePassword;