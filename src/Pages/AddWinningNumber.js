import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import ErrorMessage from "../Components/ErrorMessage";
import { pageRoutes } from '../Routes/pageRoutes';
import { Formik } from "formik";
import { pipViewDate2 } from "../Auth/Pip";
import { AddWinningAmountSchema } from '../Auth/Schema';
import { useDispatch, useSelector } from 'react-redux';
import { addWinningNumber } from '../Redux/actions/usersAction';
import Loader from '../Components/Loader';
import { message } from 'antd';

const AddWinningNumber = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isToggle } = useSelector((state) => state.authReducer);
    const { isLoading } = useSelector((state) => state?.usersReducer);
    const initialState = {
        created_at: '',
        two_pm: '',
        five_pm: '',
        nine_pm: ''
    };

    const onHandleAddWinningNumbers = async (values, { setSubmitting }) => {
        setSubmitting(false);
        if (values?.two_pm || values?.five_pm || values?.nine_pm) {
            const callback = (response) => {
                if (response?.success) {
                    navigate(-1);
                }
            };
            const data = {
                created_at: pipViewDate2(values?.created_at),
                games: [
                    { "game_time": "2 PM", "status": "active", "winning_number": values?.two_pm ?? '' },
                    { "game_time": "5 PM", "status": "active", "winning_number": values?.five_pm ?? '' },
                    { "game_time": "9 PM", "status": "active", "winning_number": values?.nine_pm ?? '' }
                ]
            }
            dispatch(addWinningNumber({ payload: data, callback }));
        } else {
            message.error("Please enter winning number anyone of them")
        }
    };

    if (isLoading) {
        return <Loader />
    }
    return (
        <main className={`ct_dashboard_main_bg ${isToggle && 'ct_collapsed_sidebar'}`}>
            <Sidebar />
            <div className="ct_right_content">
                <Header />
                <div className="ct_inner_dashbaord_main">
                    <div className="ct_white_bg p-4">
                        <div className="d-flex align-items-center justify-content-between gap-2 mb-4">
                            <div className="d-flex align-items-center gap-3">
                                <a href="javascript:void(0)" onClick={() => navigate(-1)} className="ct_back_text"><i className="fa-solid fa-arrow-left text-white"></i> Back</a>
                                <h4 className="ct_fs_24 ps-4 ct_fw_600 text-white mb-0">Add Winning Number</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mx-auto">
                                <div className="ct_border_1_black">
                                    <Formik
                                        initialValues={initialState}
                                        validationSchema={AddWinningAmountSchema}
                                        onSubmit={(values, actions) => {
                                            onHandleAddWinningNumbers(values, actions);
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
                                                <div className="row mt-4">
                                                    <div className="col-md-12 mb-4">
                                                        <div className="form-group">
                                                            <label className="mb-2 text-white">Date<span className="ct_required_text">*</span></label>
                                                            <input
                                                                id="created_at"
                                                                type="date"
                                                                min={new Date()?.toISOString()?.split("T")[0]}
                                                                className="ct_input form-control"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.created_at}
                                                            />
                                                            <ErrorMessage
                                                                errors={errors}
                                                                touched={touched}
                                                                fieldName="created_at"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mb-4">
                                                        <div className="form-group">
                                                            <label className="mb-2 text-white">2:00 Pm <span className="ct_required_text">*</span></label>
                                                            <input
                                                                id="two_pm"
                                                                type="number"
                                                                className="ct_input form-control"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.two_pm}
                                                                onWheel={() => document.activeElement.blur()}
                                                            />
                                                            <ErrorMessage
                                                                errors={errors}
                                                                touched={touched}
                                                                fieldName="two_pm"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mb-4">
                                                        <div className="form-group">
                                                            <label className="mb-2 text-white">5:00 Pm<span className="ct_required_text">*</span></label>
                                                            <input
                                                                id="five_pm"
                                                                type="number"
                                                                className="ct_input form-control"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.five_pm}
                                                                onWheel={() => document.activeElement.blur()}
                                                            />
                                                            <ErrorMessage
                                                                errors={errors}
                                                                touched={touched}
                                                                fieldName="five_pm"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mb-4">
                                                        <div className="form-group">
                                                            <label className="mb-2 text-white">9:00 Pm<span className="ct_required_text">*</span></label>
                                                            <input
                                                                id="nine_pm"
                                                                type="number"
                                                                className="ct_input form-control"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.nine_pm}
                                                                onWheel={() => document.activeElement.blur()}
                                                            />
                                                            <ErrorMessage
                                                                errors={errors}
                                                                touched={touched}
                                                                fieldName="nine_pm"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="text-center">
                                                        <a href="javascript:void(0)" type="submit" onClick={(e) => handleSubmit(e)} className="ct_yellow_btn ct_btn_h_48 w-auto">Save</a>
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

export default AddWinningNumber;