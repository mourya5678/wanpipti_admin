import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import { pageRoutes } from '../Routes/pageRoutes';

const AdminProfile = () => {
    const navigate = useNavigate();
    const { isToggle } = useSelector((state) => state.authReducer);

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
                                <div className="ms-md-4 d-flex align-items-center gap-3" onClick={() => navigate(pageRoutes.update_profile)}>
                                    <a href="javascript:void(0)" className="ct_yellow_btn w-auto">Edit Profile</a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <form className="ps-md-4">
                                    <div className="d-flex align-items-center gap-3">
                                        <label for="ct_edit_profile_img" style={{ cursor: "pointer" }} className="position-relative">
                                            <img src="assets/img/user_1.png" alt="" className="ct_img_66" />
                                        </label>
                                        <div>
                                            <h5 className="ct_fs_20 mb-1 text-white">John Doe</h5>
                                            <p className="mb-0 text-white">Admin</p>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-md-12 mb-4">
                                            <div className="form-group">
                                                <label for="" className="mb-2 ct_fw_500 text-white">Full Name <span
                                                    className="ct_required_text">*</span></label>
                                                <input type="text" className="ct_input form-control" placeholder="Full Name"
                                                    value="Moni" readOnly />
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-4">
                                            <div className="form-group">
                                                <label for="" className="mb-2 ct_fw_500 text-white">Email <span
                                                    className="ct_required_text">*</span></label>
                                                <div className="position-relative">
                                                    <input type="email" className="ct_input form-control" placeholder="Email"
                                                        value="moniroy@gmail.com" readOnly />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-3" onClick={() => navigate(pageRoutes.change_password)}>
                                        <a href="javascript:void(0)" type="button"
                                            className="ct_yellow_btn mt-0 w-auto">Change Password</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default AdminProfile;