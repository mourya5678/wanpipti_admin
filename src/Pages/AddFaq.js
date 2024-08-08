import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import { Formik } from "formik";
import { AddFaqSchema } from '../Auth/Schema';
import ErrorMessage from '../Components/ErrorMessage';
import { AddNewQuiz } from '../Redux/actions/usersAction';
import { pageRoutes } from '../Routes/pageRoutes';
import Loader from '../Components/Loader';

const AddFaq = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isToggle } = useSelector((state) => state.authReducer);
    const { isLoading } = useSelector((state) => state.usersReducer);

    const initialState = {
        question: '',
        answer: ''
    };

    const onAddFaqQuestions = async (values, { setSubmitting }) => {
        setSubmitting(false);
        const callback = (response) => {
            if (response?.success) {
                navigate(-1);
            }
        };
        dispatch(AddNewQuiz({ payload: values, callback }));
    }

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
                        <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                            <h4 className="ct_fs_24 ps-md-4 ct_fw_600 text-white">Add FAQ</h4>
                        </div>
                        <div className="row">
                            <div className="col-md-8 mx-auto">
                                <Formik
                                    initialValues={initialState}
                                    validationSchema={AddFaqSchema}
                                    onSubmit={(values, actions) => {
                                        onAddFaqQuestions(values, actions);
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
                                                        <label for="" className="mb-2 ct_fw_500 text-white">Question<span
                                                            className="ct_required_text">*</span></label>
                                                        <input
                                                            type="text"
                                                            id="question"
                                                            className="ct_input form-control"
                                                            placeholder="Question"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.question}
                                                        />
                                                        <ErrorMessage
                                                            errors={errors}
                                                            touched={touched}
                                                            fieldName="question"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mb-4">
                                                    <div className="form-group">
                                                        <label for="" className="mb-2 ct_fw_500 text-white">Answer <span
                                                            className="ct_required_text">*</span></label>
                                                        <textarea
                                                            className="form-control ct_input h-auto"
                                                            rows="4"
                                                            placeholder="Answer"
                                                            id="answer"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.answer}
                                                        ></textarea>
                                                        <ErrorMessage
                                                            errors={errors}
                                                            touched={touched}
                                                            fieldName="answer"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="text-center">
                                                    <button type="submit" onClick={(e) => handleSubmit(e)} className="ct_yellow_btn ct_btn_h_48 ct_line_height_0 w-auto">Submit</button>
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

export default AddFaq;