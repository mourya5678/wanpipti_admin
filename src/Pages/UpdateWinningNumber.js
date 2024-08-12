import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import ErrorMessage from "../Components/ErrorMessage";
import { pageRoutes } from '../Routes/pageRoutes';
import { Formik } from "formik";
import { UpdateWinningAmountSchema } from '../Auth/Schema';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateGameDetail } from '../Redux/actions/usersAction';
import { pipViewDate2 } from '../Auth/Pip';

const UpdateWinningNumber = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isToggle } = useSelector((state) => state.authReducer);
    const { state } = useLocation();
    const initialState = {
        date: state?.created_at,
        two_pm: state?.data?.['2 PM_winning_number'] ?? '',
        five_pm: state?.data?.['5 PM_winning_number'] ?? '',
        nine_pm: state?.data?.['9 PM_winning_number'] ?? ''
    };

    const onHandleUpdateWinningNumbers = async (values, { setSubmitting }) => {
        setSubmitting(false);
        const callback = (response) => {
            if (response?.success) {
                navigate(-1);
            }
        };
        const data = {
            created_at: values?.date,
            games: [
                { "game_time": "2 PM", "status": "active", "winning_number": values?.two_pm },
                { "game_time": "5 PM", "status": "active", "winning_number": values?.five_pm },
                { "game_time": "9 PM", "status": "active", "winning_number": values?.nine_pm }
            ]
        }
        dispatch(UpdateGameDetail({ payload: data, callback }));
    };


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
                                <h4 className="ct_fs_24 ps-4 ct_fw_600 text-white mb-0">Edit Game Details</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mx-auto">
                                <div className="ct_border_1_black">
                                    <Formik
                                        initialValues={initialState}
                                        validationSchema={UpdateWinningAmountSchema}
                                        onSubmit={(values, actions) => {
                                            onHandleUpdateWinningNumbers(values, actions);
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
                                                <h4 className="ct_fs_24 text-center ct_fw_600 text-white">Game Details</h4>
                                                <div className="row mt-4">
                                                    <div className="col-md-12 mb-4">
                                                        <div className="form-group">
                                                            <label className="mb-2 text-white">Date<span className="ct_required_text">*</span></label>
                                                            <input
                                                                id="date"
                                                                type="text"
                                                                min={new Date()?.toISOString()?.split("T")[0]}
                                                                className="ct_input form-control"
                                                                value={values.date}
                                                                readOnly
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

export default UpdateWinningNumber;