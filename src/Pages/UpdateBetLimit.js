import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import ErrorMessage from "../Components/ErrorMessage";
import { pageRoutes } from '../Routes/pageRoutes';
import { Formik } from "formik";
import { SetBetLimitSchema } from '../Auth/Schema';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateBetLimitForNumber } from '../Redux/actions/usersAction';
import Loader from '../Components/Loader';
import { pipViewDate3 } from '../Auth/Pip';

const UpdateBetLimit = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const dispatch = useDispatch();
    const { isToggle } = useSelector((state) => state.authReducer);
    const { isLoading } = useSelector((state) => state?.usersReducer);
    const initialState = {
        set_date: pipViewDate3(state?.data?.set_date) ?? '',
        bet_number: state?.data?.bet_number ?? '',
        max_bet_limit: state?.data?.max_bet_limit ?? '',
    };

    const onHandleSetBetLimit = async (values, { setSubmitting }) => {
        setSubmitting(false);
        const callback = (response) => {
            if (response?.success) {
                navigate(-1);
            }
        };
        dispatch(UpdateBetLimitForNumber({ payload: values, callback }));
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
                    <div className="ct_white_bg">
                        <div className="d-flex align-items-center gap-3">
                            <a href="javascript:void(0)" onClick={() => navigate(-1)} className="ct_back_text"><i className="fa-solid fa-arrow-left text-white"></i> Back</a>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mx-auto">
                                <div className="ct_border_1_black">
                                    <Formik
                                        initialValues={initialState}
                                        validationSchema={SetBetLimitSchema}
                                        onSubmit={(values, actions) => {
                                            onHandleSetBetLimit(values, actions);
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
                                                                id="set_date"
                                                                type="text"
                                                                className="ct_input form-control"
                                                                value={pipViewDate3(values.set_date)}
                                                                readOnly
                                                            />
                                                            <ErrorMessage
                                                                errors={errors}
                                                                touched={touched}
                                                                fieldName="set_date"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mb-4">
                                                        <div className="form-group">
                                                            <label className="mb-2 text-white">Bet Number <span className="ct_required_text">*</span></label>
                                                            <input
                                                                id="bet_number"
                                                                type="number"
                                                                className="ct_input form-control"
                                                                readOnly
                                                                value={values.bet_number}
                                                                onWheel={() => document.activeElement.blur()}
                                                            />
                                                            <ErrorMessage
                                                                errors={errors}
                                                                touched={touched}
                                                                fieldName="bet_number"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mb-4">
                                                        <div className="form-group">
                                                            <label className="mb-2 text-white">Max Bet Limit<span className="ct_required_text">*</span></label>
                                                            <input
                                                                id="max_bet_limit"
                                                                type="number"
                                                                className="ct_input form-control"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.max_bet_limit}
                                                                onWheel={() => document.activeElement.blur()}
                                                            />
                                                            <ErrorMessage
                                                                errors={errors}
                                                                touched={touched}
                                                                fieldName="max_bet_limit"
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

export default UpdateBetLimit;