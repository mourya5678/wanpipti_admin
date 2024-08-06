import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Header from '../Components/Header';
import Loader from '../Components/Loader';
import Sidebar from '../Components/Sidebar';
import { AllTrasactionWallet } from '../Redux/actions/usersAction';

const FinancialReport = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isToggle } = useSelector((state) => state.authReducer);
    const { isLoading, all_transaction } = useSelector((state) => state?.usersReducer);

    useEffect(() => {
        dispatch(AllTrasactionWallet());
    }, []);

    if (isLoading) {
        return <Loader />
    }
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
                                        <th>S No.</th>
                                        <th>User Name</th>
                                        <th>Credit/Withdraw</th>
                                        <th>Amount </th>
                                        <th>Closing Balance</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {all_transaction?.length != 0 &&
                                        all_transaction?.map((item, i) => (
                                            <tr>
                                                <td>{i + 1}</td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <h5 className="ct_fs_14 ct_fw_600 mb-0 text-white">{item?.user?.full_name ?? ''}</h5>
                                                    </div>
                                                </td>
                                                <td className={`${item?.transaction_type == "withdraw" || item?.transaction_type == "betPlace" ? "ct_red_text" : "ct_green_text"}`}>{item?.transaction_type ?? ''}</td>
                                                <td className={`${item?.transaction_type == "withdraw" || item?.transaction_type == "betPlace" ? "ct_red_text" : "ct_green_text"}`}>{item?.amount ?? 0}</td>
                                                <td className="text-end">{item?.closing_balance ?? 0}</td>
                                            </tr>
                                        ))}
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