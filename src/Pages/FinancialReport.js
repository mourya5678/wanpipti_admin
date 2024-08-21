import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Header from '../Components/Header';
import Loader from '../Components/Loader';
import Sidebar from '../Components/Sidebar';
import { AllTrasactionWallet } from '../Redux/actions/usersAction';
import ReactPagination from '../Layout/ReactPagination';
import PaginationDropdown from '../Layout/PaginationDropdown';
import { curSym } from '../Auth/Pip';

const FinancialReport = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isToggle } = useSelector((state) => state.authReducer);
    const { isLoading, all_transaction } = useSelector((state) => state?.usersReducer);
    const [currentPage, setCurrentPage] = useState(0);
    const [usersPerPage, setUserPerPages] = useState(10);
    const displayUsers = all_transaction?.slice(
        currentPage * usersPerPage,
        (currentPage + 1) * usersPerPage
    );
    console.log({ all_transaction })
    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

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
                                {displayUsers && displayUsers?.length != 0 ?
                                    <tbody>
                                        {displayUsers?.map((item, i) => (
                                            <tr>
                                                <td>{i + 1}</td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <h5 className="ct_fs_14 ct_fw_600 mb-0 text-white">{item?.user?.full_name ?? ''}</h5>
                                                    </div>
                                                </td>
                                                <td className={`${item?.transaction_type == "Withdraw" || item?.transaction_type == "withdraw" || item?.transaction_type == "BetPlace" || item?.transaction_type == "betPlace" ? "ct_red_text" : "ct_green_text"}`}>{item?.transaction_type ?? ''}</td>
                                                <td className={`${item?.transaction_type == "Withdraw" || item?.transaction_type == "withdraw" || item?.transaction_type == "BetPlace" || item?.transaction_type == "betPlace" ? "ct_red_text" : "ct_green_text"}`}>{curSym}{item?.amount ?? 0}</td>
                                                <td className="text-end">{curSym}{item?.closing_balance ?? 0}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    :
                                    <tfoot>
                                        <tr>
                                            <td className="text-center bg-transparent border-0" colSpan="5">
                                                <div className="text-center">
                                                    <p className="mb-0 mt-3 ct_fs_24 ct_fw_400 ct_ff_poppin ct_clr_8C98A9 text-center">No report found</p>
                                                </div>
                                            </td>
                                        </tr>
                                    </tfoot>
                                }
                            </table>
                        </div>
                        <div className="mt-3">
                            {
                                all_transaction?.length > 0 && <div className="d-flex align-items-center flex-wrap justify-content-between gap-3 mb-3">
                                    <PaginationDropdown
                                        onChange={(val) => {
                                            setUserPerPages(val);
                                            setCurrentPage(0);
                                        }}
                                    />
                                    <ReactPagination
                                        pageCount={Math.ceil(
                                            all_transaction.length / usersPerPage
                                        )}
                                        onPageChange={handlePageClick}
                                        currentPage={currentPage}
                                    />
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default FinancialReport;