import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import ErrorMessage from "../Components/ErrorMessage";
import { pageRoutes } from '../Routes/pageRoutes';
import { Formik } from "formik";
import { AddWinningAmountSchema } from '../Auth/Schema';

const AddWinningNumber = () => {
    const navigate = useNavigate();
    const [isToggle, setIsToggle] = useState(false);
    const initialState = {
        date: '',
        two_pm: '',
        five_pm: '',
        nine_pm: ''
    };

    const onHandleAddWinningNumbers = async (values, { setSubmitting }) => {
        setSubmitting(false);
    };


    return (
        <main className={`ct_dashboard_main_bg ${isToggle && 'ct_collapsed_sidebar'}`}>
            <Sidebar onClick={() => setIsToggle(!isToggle)} />
            <div className="ct_right_content">
                <Header onClick={() => setIsToggle(!isToggle)} />
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
                                                                id="date"
                                                                type="date"
                                                                min={new Date()?.toISOString()?.split("T")[0]}
                                                                className="ct_input form-control"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.date}
                                                            />
                                                            <ErrorMessage
                                                                errors={errors}
                                                                touched={touched}
                                                                fieldName="date"
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