import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';

const FinancialReport = () => {
    const navigate = useNavigate();
    const { isToggle } = useSelector((state) => state.authReducer);

    return (
        <main className={`ct_dashboard_main_bg ${isToggle && 'ct_collapsed_sidebar'}`}>
            <Sidebar path="financial" />
            <div className="ct_right_content">
                <Header />
                <div className="ct_inner_dashbaord_main">
                    <div className="ct_white_bg">
                        <div className="d-flex align-items-center justify-content-between gap-2 mb-4">
                            <h4 className="ct_fs_24  ct_fw_600 text-white">Financial Report</h4>

                        </div>
                        <div className="table-responsive mt-4">
                            <table className="table ct_custom_table">
                                <thead>
                                    <tr>
                                        <th>S. No.</th>
                                        <th>User Name</th>
                                        <th>Amount </th>
                                        <th>Credit/Withdraw</th>
                                        <th>Closing Balance</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <img src="assets/img/user_1.png" alt="" className="ct_img_36" />
                                                <h5 className="ct_fs_14 ct_fw_600 mb-0 text-white">Alfonso Westervelt</h5>
                                            </div>
                                        </td>
                                        <td className="ct_green_text">+1500</td>
                                        <td>Credit</td>
                                        <td className="text-end">
                                            17000
                                    </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <img src="assets/img/user_1.png" alt="" className="ct_img_36" />
                                                <h5 className="ct_fs_14 ct_fw_600 mb-0 text-white">Alfonso Westervelt</h5>
                                            </div>
                                        </td>
                                        <td className="ct_green_text">+100</td>
                                        <td>Credit</td>
                                        <td className="text-end">
                                            17000
                                    </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <img src="assets/img/user_1.png" alt="" className="ct_img_36" />
                                                <h5 className="ct_fs_14 ct_fw_600 mb-0 text-white">Alfonso Westervelt</h5>
                                            </div>
                                        </td>
                                        <td className="text-danger">+100</td>
                                        <td>Withdraw</td>
                                        <td className="text-end">
                                            15
                                    </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <img src="assets/img/user_1.png" alt="" className="ct_img_36" />
                                                <h5 className="ct_fs_14 ct_fw_600 mb-0 text-white">Alfonso Westervelt</h5>
                                            </div>
                                        </td>
                                        <td className="ct_green_text">+1500</td>
                                        <td>Credit</td>
                                        <td className="text-end">
                                            17000
                                    </td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <img src="assets/img/user_1.png" alt="" className="ct_img_36" />
                                                <h5 className="ct_fs_14 ct_fw_600 mb-0 text-white">Alfonso Westervelt</h5>
                                            </div>
                                        </td>
                                        <td className="ct_green_text">+100</td>
                                        <td>Credit</td>
                                        <td className="text-end">
                                            17000
                                    </td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <img src="assets/img/user_1.png" alt="" className="ct_img_36" />
                                                <h5 className="ct_fs_14 ct_fw_600 mb-0 text-white">Alfonso Westervelt</h5>
                                            </div>
                                        </td>
                                        <td className="text-danger">+100</td>
                                        <td>Withdraw</td>
                                        <td className="text-end">
                                            15
                                    </td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <img src="assets/img/user_1.png" alt="" className="ct_img_36" />
                                                <h5 className="ct_fs_14 ct_fw_600 mb-0 text-white">Alfonso Westervelt</h5>
                                            </div>
                                        </td>
                                        <td className="ct_green_text">+1500</td>
                                        <td>Credit</td>
                                        <td className="text-end">
                                            17000
                                    </td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <img src="assets/img/user_1.png" alt="" className="ct_img_36" />
                                                <h5 className="ct_fs_14 ct_fw_600 mb-0 text-white">Alfonso Westervelt</h5>
                                            </div>
                                        </td>
                                        <td className="ct_green_text">+100</td>
                                        <td>Credit</td>
                                        <td className="text-end">
                                            17000
                                    </td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <img src="assets/img/user_1.png" alt="" className="ct_img_36" />
                                                <h5 className="ct_fs_14 ct_fw_600 mb-0 text-white">Alfonso Westervelt</h5>
                                            </div>
                                        </td>
                                        <td className="text-danger">+100</td>
                                        <td>Withdraw</td>
                                        <td className="text-end">
                                            15
                                    </td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <img src="assets/img/user_1.png" alt="" className="ct_img_36" />
                                                <h5 className="ct_fs_14 ct_fw_600 mb-0 text-white">Alfonso Westervelt</h5>
                                            </div>
                                        </td>
                                        <td className="text-danger">+100</td>
                                        <td>Withdraw</td>
                                        <td className="text-end">
                                            15
                                    </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default FinancialReport;