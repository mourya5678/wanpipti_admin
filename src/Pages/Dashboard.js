import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import { pageRoutes } from '../Routes/pageRoutes';

const Dashboard = () => {
    const navigate = useNavigate();
    const { isToggle } = useSelector((state) => state.authReducer);

    return (
        <main className={`ct_dashboard_main_bg ${isToggle && 'ct_collapsed_sidebar'}`}>
            <Sidebar path="dashboard" />
            <div className="ct_right_content">
                <Header />
                <div className="ct_inner_dashbaord_main">
                    <h3 className="ct_fs_35 ct_fw_600 py-4 text-white">Dashboard</h3>
                    <div className="row">
                        <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 mb-4 mb-xxl-0">
                            <div className="ct_dashboard_card">
                                <div className="d-flex align-items-center justify-content-between gap-2">
                                    <div>
                                        <p className="ct_fw_600">All Users</p>
                                        <h2 className="ct_fs_28 ct_fw_600 text-white">40,689</h2>
                                    </div>
                                    <div className="ct_dash_card_icon" style={{ backgroundColor: "rgb(255 226 121 / 52%)" }}>
                                        <i className="fa-solid fa-users"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 mb-4 mb-xl-0">
                            <div className="ct_dashboard_card">
                                <div className="d-flex align-items-center justify-content-between gap-2">
                                    <div>
                                        <p className="ct_fw_600">Total Earning</p>
                                        <h2 className="ct_fs_28 ct_fw_600 text-white">$ 2514</h2>
                                    </div>
                                    <div className="ct_dash_card_icon" style={{ backgroundColor: "rgb(255 226 121 / 52%)" }}>
                                        <i className="fa-solid fa-sack-dollar"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 mb-4 mb-xl-0">
                            <div className="ct_dashboard_card">
                                <div className="d-flex align-items-center justify-content-between gap-2">
                                    <div>
                                        <p className="ct_fw_600">Total Bet Amount</p>
                                        <h2 className="ct_fs_28 ct_fw_600 text-white">$236</h2>
                                    </div>
                                    <div className="ct_dash_card_icon" style={{ backgroundColor: "rgb(255 226 121 / 52%)" }}>
                                        <i className="fa-solid fa-hand-holding-dollar"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 mb-4 mb-xl-0">
                            <div className="ct_dashboard_card">
                                <div className="d-flex align-items-center justify-content-between gap-2">
                                    <div>
                                        <p className="ct_fw_600">Total Wallet Amount</p>
                                        <h2 className="ct_fs_28 ct_fw_600 text-white">$262</h2>
                                    </div>
                                    <div className="ct_dash_card_icon" style={{ backgroundColor: "rgb(255 226 121 / 52%)" }}>
                                        <i className="fa-solid fa-wallet"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ct_white_bg ct_mt_28">
                        <div className="d-flex align-items-center justify-content-between gap-2 mb-4">
                            <h4 className="ct_fs_24  ct_fw_600 text-white mb-0">All Users</h4>
                            <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.all_users)} className="ct_yellow_text"> See More</a>
                        </div>
                        <div className="table-responsive mt-4">
                            <table className="table ct_custom_table">
                                <thead>
                                    <tr>
                                        <th> User Name</th>
                                        <th>Email Address</th>
                                        <th>Current Balance</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <img src="assets/img/user_1.png" alt="" className="ct_img_36" />
                                                <h5 className="ct_fs_14 ct_fw_600 mb-0 text-white">Alfonso Westervelt</h5>
                                            </div>
                                        </td>
                                        <td>Zoey.Boyle@gmail.com</td>
                                        <td>$5000</td>
                                        <td>
                                            <div className="ct_action_btns">
                                                <a href="javascript:void(0)" className="ct_view_btn" data-bs-toggle="modal" data-bs-target="#ct_user_view"><i className="fa-solid fa-eye"></i></a>
                                                <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.edit_user)} className="ct_edit_btn"><i className="fa-solid fa-pen"></i></a>
                                                <a href="javascript:void(0)" className="ct_delete_btn"><i className="fa-solid fa-trash-can"></i></a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <img src="assets/img/user_1.png" alt="" className="ct_img_36" />
                                                <h5 className="ct_fs_14 ct_fw_600 mb-0 text-white">Alfonso Westervelt</h5>
                                            </div>
                                        </td>
                                        <td>Zoey.Boyle@gmail.com</td>
                                        <td>$5000</td>
                                        <td>
                                            <div className="ct_action_btns">
                                                <a href="javascript:void(0)" className="ct_view_btn" data-bs-toggle="modal" data-bs-target="#ct_user_view"><i className="fa-solid fa-eye"></i></a>
                                                <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.edit_user)} className="ct_edit_btn"><i className="fa-solid fa-pen"></i></a>
                                                <a href="javascript:void(0)" className="ct_delete_btn"><i className="fa-solid fa-trash-can"></i></a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <img src="assets/img/user_1.png" alt="" className="ct_img_36" />
                                                <h5 className="ct_fs_14 ct_fw_600 mb-0 text-white">Alfonso Westervelt</h5>
                                            </div>
                                        </td>
                                        <td>Zoey.Boyle@gmail.com</td>
                                        <td>$5000</td>
                                        <td>
                                            <div className="ct_action_btns">
                                                <a href="javascript:void(0)" className="ct_view_btn" data-bs-toggle="modal" data-bs-target="#ct_user_view"><i className="fa-solid fa-eye"></i></a>
                                                <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.edit_user)} className="ct_edit_btn"><i className="fa-solid fa-pen"></i></a>
                                                <a href="javascript:void(0)" className="ct_delete_btn"><i className="fa-solid fa-trash-can"></i></a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <img src="assets/img/user_1.png" alt="" className="ct_img_36" />
                                                <h5 className="ct_fs_14 ct_fw_600 mb-0 text-white">Alfonso Westervelt</h5>
                                            </div>
                                        </td>
                                        <td>Zoey.Boyle@gmail.com</td>
                                        <td>$5000</td>
                                        <td>
                                            <div className="ct_action_btns">
                                                <a href="javascript:void(0)" className="ct_view_btn" data-bs-toggle="modal" data-bs-target="#ct_user_view"><i className="fa-solid fa-eye"></i></a>
                                                <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.edit_user)} className="ct_edit_btn"><i className="fa-solid fa-pen"></i></a>
                                                <a href="javascript:void(0)" className="ct_delete_btn"><i className="fa-solid fa-trash-can"></i></a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <img src="assets/img/user_1.png" alt="" className="ct_img_36" />
                                                <h5 className="ct_fs_14 ct_fw_600 mb-0 text-white">Alfonso Westervelt</h5>
                                            </div>
                                        </td>
                                        <td>Zoey.Boyle@gmail.com</td>
                                        <td>$5000</td>
                                        <td>
                                            <div className="ct_action_btns">
                                                <a href="javascript:void(0)" className="ct_view_btn" data-bs-toggle="modal" data-bs-target="#ct_user_view"><i className="fa-solid fa-eye"></i></a>
                                                <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.edit_user)} className="ct_edit_btn"><i className="fa-solid fa-pen"></i></a>
                                                <a href="javascript:void(0)" className="ct_delete_btn"><i className="fa-solid fa-trash-can"></i></a>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* user modal */}
            <div className="modal fade " id="ct_user_view" tabindex="-1" aria-labelledby="ct_user_viewLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content py-4 ct_modal_bg_black ">
                        <div className="modal-header border-0 py-0">
                            <button type="button" className="btn-close ct_btn_close" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-xmark"></i></button>
                        </div>
                        <div className="modal-body py-0">
                            <div className="ct_view_user_detail">
                                <h4 className="ct_fs_28 ct_fw_600 mb-5 text-center text-white">View User</h4>
                                <div className="ct_grid_3 ct_grid_3_responsive_3">
                                    <p className="mb-0 text-white">User Name</p>
                                    <p className="mb-0 text-white">:</p>
                                    <p className="mb-0 text-white">Alfonso Westervelt</p>
                                </div>
                                <div className="ct_grid_3 ct_grid_3_responsive_3 mt-4">
                                    <p className="mb-0 text-white">Email Address   </p>
                                    <p className="mb-0 text-white">:</p>
                                    <p className="mb-0 text-white">Zoey.Boyle@gmail.com</p>
                                </div>
                                <div className="ct_grid_3 ct_grid_3_responsive_3 mt-4">
                                    <p className="mb-0 text-white">Current Balance	</p>
                                    <p className="mb-0 text-white">:</p>
                                    <p className="mb-0 text-white">$5000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Dashboard;