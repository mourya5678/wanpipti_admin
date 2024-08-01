import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import ErrorMessage from "../Components/ErrorMessage";
import { Formik } from "formik";
import { UpdateAdminSchema } from '../Auth/Schema';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Components/Loader';
import { getMyProfileData, updateMyProfileData } from '../Redux/actions/usersAction';

const EditAdminProfile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { state } = useLocation();
    const { isToggle } = useSelector((state) => state.authReducer);
    const [changeProfile, setChangeProfile] = useState();
    const [profile, setProfile] = useState(state?.data?.profile_image)
    const { isLoading } = useSelector((state) => state.usersReducer);
    const initialState = {
        full_name: state?.data?.full_name ?? "",
        username: state?.data?.username ?? ""
    };
    console.log({ state })

    const onHandleUpdateProfile = async (values, { setSubmitting }) => {
        setSubmitting(false);
        const formData = new FormData();
        formData.append("username", values?.username);
        formData.append("full_name", values?.full_name);
        if (changeProfile) {
            formData.append("file", changeProfile);
        }
        const callback = (response) => {
            if (response?.success) {
                dispatch(getMyProfileData());
                navigate(-1);
            }
        };
        dispatch(updateMyProfileData({ payload: formData, callback }));
    };

    const onImageChange = (e) => {
        setChangeProfile(e?.target?.files[0]);
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
                        <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                            <h4 className="ct_fs_24 ps-md-4 ct_fw_600 text-white">Profile</h4>
                            <div className="d-flex align-items-center gap-3">
                                <div className="ms-md-4 d-flex align-items-center gap-3" onClick={() => navigate(-1)}>
                                    <a href="javascript:void(0)" className="ct_yellow_btn w-auto">Cancel</a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <Formik
                                    initialValues={initialState}
                                    validationSchema={UpdateAdminSchema}
                                    onSubmit={(values, actions) => {
                                        onHandleUpdateProfile(values, actions);
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
                                            <div className="d-flex align-items-center gap-3">
                                                <label style={{ cursor: "pointer" }} className="position-relative">
                                                    <input type="file" onChange={(e) => onImageChange(e)} className="d-none" id="ct_edit_profile_img" />
                                                    <img src={changeProfile ? URL.createObjectURL(changeProfile) : profile ?? "assets/img/user124.jpg"} alt="" className="ct_img_66" />
                                                    <div className="ct_edit_profile_icon_camera">
                                                        <i className="fa-solid fa-camera "></i>
                                                    </div>
                                                </label>
                                            </div>
                                            <div className="row mt-4">
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-group">
                                                        <label className="mb-2 ct_fw_500 text-white">Full Name <span
                                                            className="ct_required_text">*</span></label>
                                                        <input
                                                            type="text"
                                                            id="full_name"
                                                            className="ct_input form-control"
                                                            placeholder="Full Name"
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
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-group">
                                                        <label className="mb-2 ct_fw_500 text-white">User Name <span
                                                            className="ct_required_text">*</span></label>
                                                        <input
                                                            type="text"
                                                            id="username"
                                                            className="ct_input form-control"
                                                            placeholder="User Name"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.username}
                                                        />
                                                        <ErrorMessage
                                                            errors={errors}
                                                            touched={touched}
                                                            fieldName="username"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mb-4">
                                                    <div className="form-group">
                                                        <label for="" className="mb-2 ct_fw_500 text-white">Email <span
                                                            className="ct_required_text">*</span></label>
                                                        <div className="position-relative">
                                                            <input
                                                                type="email"
                                                                className="ct_input form-control"
                                                                placeholder="Email"
                                                                value={state?.data?.email}
                                                                readOnly
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center gap-3">
                                                <button type="submit" onClick={(e) => handleSubmit(e)}
                                                    className="ct_yellow_btn mt-0 w-auto">Update</button>
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

export default EditAdminProfile;