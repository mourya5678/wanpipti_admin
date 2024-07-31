import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import ErrorMessage from "../Components/ErrorMessage";
import { pageRoutes } from '../Routes/pageRoutes';
import { Formik } from "formik";
import { UpdateUserSchema } from '../Auth/Schema';
import { useSelector } from 'react-redux';

const EditUsers = () => {
    const navigate = useNavigate();
    const { isToggle } = useSelector((state) => state.authReducer);

    const initialState = {
        full_name: "abhay mourya",
        email: "mourya45@mailinator.com"
    };

    const updateUserDetails = async (values, { setSubmitting }) => {
        setSubmitting(false);
    };

    return (
        <main className={`ct_dashboard_main_bg ${isToggle && 'ct_collapsed_sidebar'}`}>
            <Sidebar />
            <div className="ct_right_content">
                <Header />
                <div className="ct_inner_dashbaord_main">
                    <div className="ct_white_bg p-4">
                        <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                            <div className="d-flex align-items-center gap-3">
                                <a href="javascript:void(0)" onClick={() => navigate(-1)} className="ct_back_text"><i className="fa-solid fa-arrow-left text-white"></i> Back</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mx-auto">
                                <div className="ct_border_1_black">
                                    <Formik
                                        initialValues={initialState}
                                        validationSchema={UpdateUserSchema}
                                        onSubmit={(values, actions) => {
                                            updateUserDetails(values, actions);
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
                                            <form>
                                                <h4 className="ct_fs_24 text-center ct_fw_600 text-white">Edit User Details</h4>
                                                <div className="ct_edit_profile_img mt-4">
                                                    <label for="ct_edit_profile">
                                                        <input type="file" className="d-none" id="ct_edit_profile" />
                                                        <img src="../assets/img/user_profile.png" alt="" className="ct_img_148" />
                                                        <div className="ct_edit_profile_icon">
                                                            <i className="fa-solid fa-pencil"></i>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div className="row mt-4">
                                                    <div className="col-md-12 mb-4">
                                                        <div className="form-group">
                                                            <label className="mb-2 text-white">First Name(s) <span className="ct_required_text">*</span></label>
                                                            <input
                                                                type="text"
                                                                id="full_name"
                                                                className="ct_input form-control"
                                                                placeholder="First Name"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.full_name}
                                                            />
                                                            <ErrorMessage
                                                                errors={errors}
                                                                touched={touched}
                                                                fieldName="full_name"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mb-4">
                                                        <div className="form-group">
                                                            <label className="mb-2 text-white">Email Address <span className="ct_required_text">*</span></label>
                                                            <input
                                                                type="email"
                                                                className="ct_input form-control"
                                                                placeholder="Email Address"
                                                                value={values.email}
                                                                readOnly
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="text-center">
                                                        <button type="submit" onClick={(e) => handleSubmit(e)} className="ct_yellow_btn ct_btn_h_48 w-auto">Update</button>
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
            </div>
        </main>
    )
}

export default EditUsers;