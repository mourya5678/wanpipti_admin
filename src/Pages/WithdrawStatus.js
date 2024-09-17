import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { curSym } from '../Auth/Pip';
import Header from '../Components/Header';
import Loader from '../Components/Loader';
import Sidebar from '../Components/Sidebar';
import { getWithdrawData, UpdateWithdrawlStatus } from '../Redux/actions/usersAction';
import PaginationDropdown from '../Layout/PaginationDropdown';
import ReactPagination from '../Layout/ReactPagination';
import { pageRoutes } from '../Routes/pageRoutes';

const WithdrawStatus = () => {
    const navigate = useNavigate();
    const { isToggle } = useSelector((state) => state.authReducer);
    const { isLoading, all_withdrawl_request } = useSelector((state) => state?.usersReducer);
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(0);
    const [usersPerPage, setUserPerPages] = useState(5);

    const displayUsers = all_withdrawl_request?.slice(
        currentPage * usersPerPage,
        (currentPage + 1) * usersPerPage
    );

    useEffect(() => {
        dispatch(getWithdrawData());
    }, []);

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    const onHandleStatusChange = (e, val) => {
        console.log(e.target.value, val)
        const callback = (response) => {
            if (response?.success) {
                dispatch(getWithdrawData());
            }
        };
        const data = {
            transation_id: val,
            transaction_status: e.target.value == "Paid" ? true : false
        }
        dispatch(UpdateWithdrawlStatus({ payload: data, callback }))
    }

    if (isLoading) {
        return <Loader />
    }
    return (
        <main className={`ct_dashboard_main_bg ${isToggle && 'ct_collapsed_sidebar'}`}>
            <Sidebar path="withdraw" />
            <div className="ct_right_content">
                <Header />
                <div className="ct_inner_dashbaord_main">
                    <div className="ct_white_bg">
                        <div className="d-flex align-items-center justify-content-between gap-2 mb-4">
                            <h4 className="ct_fs_24  ct_fw_600 text-white">Withdraw Requests</h4>
                        </div>
                        <div className="table-responsive mt-4">
                            <table className="table ct_custom_table">
                                <thead>
                                    <tr>
                                        <th>S No.</th>
                                        <th>User Name</th>
                                        <th>Full Name</th>
                                        <th>Mobile Number</th>
                                        <th>Requested Amount</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                {displayUsers?.length != 0 ?
                                    <tbody>
                                        {displayUsers?.map((item, i) => (
                                            <tr>
                                                <td>{i + 1}</td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <h5 className="ct_fs_14 ct_fw_600 mb-0 text-white">{item?.user?.username ?? ''}</h5>
                                                    </div>
                                                </td>
                                                <td>{item?.user?.full_name ?? ''}</td>
                                                <td>{item?.user?.mobile_number ?? ''}</td>
                                                <td>{curSym}{" "}{item?.amount ?? 0}</td>
                                                <td>{item?.status == true ? "Paid" : "Not Paid"}</td>
                                                <td>
                                                    <div className="ct_action_btns">
                                                        <select className="form-control ct_input py-2 h-auto" value={item?.status == true ? "Paid" : "Not Paid"} onChange={(e) => onHandleStatusChange(e, item?.id)}>
                                                            <option value="Paid">Paid</option>
                                                            <option value="Not Paid">Not Paid</option>
                                                        </select>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    :
                                    <tfoot>
                                        <tr>
                                            <td className="text-center bg-transparent border-0" colSpan="5">
                                                <div className="text-center">
                                                    <p className="mb-0 mt-3 ct_fs_24 ct_fw_400 ct_ff_poppin ct_clr_8C98A9 text-center">No Withdraw Request Found</p>
                                                </div>
                                            </td>
                                        </tr>
                                    </tfoot>
                                }
                            </table>
                        </div>
                        <div className="mt-3">
                            {
                                all_withdrawl_request?.length != 0 && <div className="d-flex align-items-center flex-wrap justify-content-between gap-3 mb-3">
                                    <PaginationDropdown
                                        onChange={(val) => {
                                            setUserPerPages(val);
                                            setCurrentPage(0);
                                        }}
                                    />
                                    <ReactPagination
                                        pageCount={Math.ceil(
                                            all_withdrawl_request.length / usersPerPage
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

export default WithdrawStatus;