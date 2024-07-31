import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import { pipViewDate } from '../Auth/Pip';
import { useSelector } from 'react-redux';

const BetsDetails = () => {
    const navigate = useNavigate();
    const { isToggle } = useSelector((state) => state.authReducer);
    const [todatDate, setTodayDate] = useState(new Date());

    return (
        <main className={`ct_dashboard_main_bg ${isToggle && 'ct_collapsed_sidebar'}`}>
            <Sidebar />
            <div className="ct_right_content">
                <Header />
                <div className="ct_inner_dashbaord_main">
                    <div className="ct_white_bg">
                        <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                            <div className="d-flex align-items-center gap-3">
                                <a href="javascript:void(0)" onClick={() => navigate(-1)} className="ct_back_text"><i className="fa-solid fa-arrow-left text-white"></i> Back</a>
                                <h4 className="ct_fs_24 ps-4 ct_fw_600 text-white mb-0"> Bets Detail</h4>
                            </div>
                        </div>
                        <div className="table-responsive mt-4">
                            <table className="table ct_custom_table">
                                <thead>
                                    <tr>
                                        <th>{pipViewDate(todatDate)}</th>
                                        <th>2:00 Pm</th>
                                        <th>5.00 Pm</th>
                                        <th>9.00 Pm</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>John Doe</td>
                                        <td>63</td>
                                        <td>36</td>
                                        <td>08</td>
                                        <td>
                                            <div className="ct_action_btns">
                                                <a href="javascript:void(0)" className="ct_view_btn w-auto px-3 ct_fw_400 ct_ff_poppins d-flex align-items-center gap-1" data-bs-toggle="modal" data-bs-target="#ct_view_bet"><i className="fa-solid fa-eye"></i>View More</a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>John Doe</td>
                                        <td>63</td>
                                        <td>36</td>
                                        <td>08</td>
                                        <td>
                                            <div className="ct_action_btns">
                                                <a href="javascript:void(0)" className="ct_view_btn w-auto px-3 ct_fw_400 ct_ff_poppins d-flex align-items-center gap-1" data-bs-toggle="modal" data-bs-target="#ct_view_bet"><i className="fa-solid fa-eye"></i>View More</a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>John Doe</td>
                                        <td>63</td>
                                        <td>36</td>
                                        <td>08</td>
                                        <td>
                                            <div className="ct_action_btns">
                                                <a href="javascript:void(0)" className="ct_view_btn w-auto px-3 ct_fw_400 ct_ff_poppins d-flex align-items-center gap-1" data-bs-toggle="modal" data-bs-target="#ct_view_bet"><i className="fa-solid fa-eye"></i>View More</a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>John Doe</td>
                                        <td>63</td>
                                        <td>36</td>
                                        <td>08</td>
                                        <td>
                                            <div className="ct_action_btns">
                                                <a href="javascript:void(0)" className="ct_view_btn w-auto px-3 ct_fw_400 ct_ff_poppins d-flex align-items-center gap-1" data-bs-toggle="modal" data-bs-target="#ct_view_bet"><i className="fa-solid fa-eye"></i>View More</a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>John Doe</td>
                                        <td>63</td>
                                        <td>36</td>
                                        <td>08</td>
                                        <td>
                                            <div className="ct_action_btns">
                                                <a href="javascript:void(0)" className="ct_view_btn w-auto px-3 ct_fw_400 ct_ff_poppins d-flex align-items-center gap-1" data-bs-toggle="modal" data-bs-target="#ct_view_bet"><i className="fa-solid fa-eye"></i>View More</a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>John Doe</td>
                                        <td>63</td>
                                        <td>36</td>
                                        <td>08</td>
                                        <td>
                                            <div className="ct_action_btns">
                                                <a href="javascript:void(0)" className="ct_view_btn w-auto px-3 ct_fw_400 ct_ff_poppins d-flex align-items-center gap-1" data-bs-toggle="modal" data-bs-target="#ct_view_bet"><i className="fa-solid fa-eye"></i>View More</a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>John Doe</td>
                                        <td>63</td>
                                        <td>36</td>
                                        <td>08</td>
                                        <td>
                                            <div className="ct_action_btns">
                                                <a href="javascript:void(0)" className="ct_view_btn w-auto px-3 ct_fw_400 ct_ff_poppins d-flex align-items-center gap-1" data-bs-toggle="modal" data-bs-target="#ct_view_bet"><i className="fa-solid fa-eye"></i>View More</a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>John Doe</td>
                                        <td>63</td>
                                        <td>36</td>
                                        <td>08</td>
                                        <td>
                                            <div className="ct_action_btns">
                                                <a href="javascript:void(0)" className="ct_view_btn w-auto px-3 ct_fw_400 ct_ff_poppins d-flex align-items-center gap-1" data-bs-toggle="modal" data-bs-target="#ct_view_bet"><i className="fa-solid fa-eye"></i>View More</a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>John Doe</td>
                                        <td>63</td>
                                        <td>36</td>
                                        <td>08</td>
                                        <td>
                                            <div className="ct_action_btns">
                                                <a href="javascript:void(0)" className="ct_view_btn w-auto px-3 ct_fw_400 ct_ff_poppins d-flex align-items-center gap-1" data-bs-toggle="modal" data-bs-target="#ct_view_bet"><i className="fa-solid fa-eye"></i>View More</a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>John Doe</td>
                                        <td>63</td>
                                        <td>36</td>
                                        <td>08</td>
                                        <td>
                                            <div className="ct_action_btns">
                                                <a href="javascript:void(0)" className="ct_view_btn w-auto px-3 ct_fw_400 ct_ff_poppins d-flex align-items-center gap-1" data-bs-toggle="modal" data-bs-target="#ct_view_bet"><i className="fa-solid fa-eye"></i>View More</a>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade " id="ct_view_bet" tabindex="-1" aria-labelledby="ct_view_betLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content py-4 ct_modal_bg_black ">
                        <div className="modal-header border-0 py-0">
                            <button type="button" className="btn-close ct_btn_close" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-xmark"></i></button>
                        </div>
                        <div className="modal-body py-0">
                            <div className="ct_view_user_detail">
                                <h4 className="ct_fs_28 ct_fw_600 mb-5 text-center text-white">View Bets</h4>
                                <div>
                                    <table className="w-100">
                                        <thead>
                                            <tr>
                                                <th className="text-white p-2" style={{ borderBottom: "1px solid rgb(255 255 255 / 50%)" }}>Time</th>
                                                <th className="text-white text-center p-2" style={{ borderBottom: "1px solid rgb(255 255 255 / 50%)" }}>Price</th>
                                                <th className="text-white text-end p-2" style={{ borderBottom: "1px solid rgb(255 255 255 / 50%)" }}>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="p-2"> <p className="mb-0 pt-3 text-white">2:00</p></td>
                                                <td className="p-2"><p className="mb-0 pt-3 text-white text-center">1500</p></td>
                                                <td className="p-2"> <p className="mb-0 pt-3 ct_green_text text-end">Win</p></td>
                                            </tr>
                                            <tr>
                                                <td className="p-2"> <p className="mb-0  text-white">2:00</p></td>
                                                <td className="p-2"><p className="mb-0 text-white text-center">1500</p></td>
                                                <td className="p-2"> <p className="mb-0 ct_green_text text-end">Win</p></td>
                                            </tr>
                                            <tr>
                                                <td className="p-2"> <p className="mb-0 text-white">2:00</p></td>
                                                <td className="p-2"><p className="mb-0 text-white text-center">1500</p></td>
                                                <td className="p-2"> <p className="mb-0 ct_green_text text-end">Win</p></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default BetsDetails;