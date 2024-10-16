import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import Loader from '../Components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { pageRoutes } from '../Routes/pageRoutes';
import { deleteSetBet, getBetLimitData } from '../Redux/actions/usersAction';
import { betLimitModalData } from '../Redux/reducers/usersReducer';
import { pipViewDate2 } from '../Auth/Pip';
import ReactPagination from '../Layout/ReactPagination';
import PaginationDropdown from '../Layout/PaginationDropdown';

const GetAllBetsData = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isToggle } = useSelector((state) => state.authReducer);
    const { isLoading, bet_data, betLimitData } = useSelector((state) => state?.usersReducer);
    const [currentPage, setCurrentPage] = useState(0);
    const [usersPerPage, setUserPerPages] = useState(5);

    const displayUsers = bet_data?.slice(
        currentPage * usersPerPage,
        (currentPage + 1) * usersPerPage
    );

    useEffect(() => {
        dispatch(getBetLimitData());
    }, []);

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    const deleteBetLimitData = async (val) => {
        await dispatch(deleteSetBet({ payload: val })).then((res) => {
            dispatch(getBetLimitData());
        }).catch((err) => {
            console.log(err)
        })
    };

    if (isLoading) {
        return <Loader />
    }
    return (
        <main className={`ct_dashboard_main_bg ${isToggle && 'ct_collapsed_sidebar'}`}>
            <Sidebar path="set-bet" />
            <div className="ct_right_content">
                <Header />
                <div className="ct_inner_dashbaord_main">
                    <div className="ct_white_bg">
                        <div className="d-flex align-items-center justify-content-between gap-2 mb-4">
                            <h4 className="ct_fs_24  ct_fw_600 text-white">All Bets Limit </h4>
                            <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.set_bet_limit)} className="ct_yellow_btn w-auto"><i className="fa-solid fa-plus"></i> Add</a>
                        </div>
                        <div className="table-responsive mt-4">
                            <table className="table ct_custom_table">
                                <thead>
                                    <tr>
                                        <th>S No.</th>
                                        <th>Date</th>
                                        <th>Bet Number</th>
                                        <th>Bet Limit</th>
                                        <th>Game Time</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {displayUsers?.length != 0 &&
                                        displayUsers?.map((item, i) => (
                                            <tr>
                                                <td>{i + 1}</td>
                                                <td>{pipViewDate2(item?.set_date) ?? 'NA'}</td>
                                                <td>{item?.bet_number ? item?.bet_number?.toString()?.length == 1 ? `0${item?.bet_number}` : item?.bet_number : 'NA'}</td>
                                                <td>{item?.max_bet_limit ?? 'NA'}</td>
                                                <td>{item?.game_time ?? 'NA'}</td>
                                                <td>
                                                    <div className="ct_action_btns">
                                                        <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.update_bets, { state: { data: item } })} className="ct_edit_btn"><i className="fa-solid fa-pen"></i></a>
                                                        <a href="javascript:void(0)" onClick={() => deleteBetLimitData(item?.id)} className="ct_delete_btn"><i className="fa-solid fa-trash-can"></i></a>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-3">
                            {
                                bet_data?.length != 0 && <div className="d-flex align-items-center flex-wrap justify-content-between gap-3 mb-3">
                                    <PaginationDropdown
                                        onChange={(val) => {
                                            setUserPerPages(val);
                                            setCurrentPage(0);
                                        }}
                                    />
                                    <ReactPagination
                                        pageCount={Math.ceil(
                                            bet_data.length / usersPerPage
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
            <div className="modal fade " id="ct_user_view" tabindex="-1" aria-labelledby="ct_user_viewLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content py-4 ct_modal_bg_black ">
                        <div className="modal-header border-0 py-0">
                            <button type="button" className="btn-close ct_btn_close" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-xmark"></i></button>
                        </div>
                        <div className="modal-body py-0">
                            <div className="ct_view_user_detail">
                                <h4 className="ct_fs_28 ct_fw_600 mb-5 text-center text-white">Bet Detail</h4>
                                <div className="ct_grid_3">
                                    <p className="mb-0 text-white">Date</p>
                                    <p className="mb-0 text-white">:</p>
                                    <p className="mb-0 text-white">{pipViewDate2(betLimitData?.set_date) ?? ''}</p>
                                </div>
                                <div className="ct_grid_3 mt-4">
                                    <p className="mb-0 text-white">Bet Number</p>
                                    <p className="mb-0 text-white">:</p>
                                    <p className="mb-0 text-white">{betLimitData?.bet_number ?? ''}</p>
                                </div>
                                <div className="ct_grid_3 mt-4">
                                    <p className="mb-0 text-white">Bet Limit</p>
                                    <p className="mb-0 text-white">:</p>
                                    <p className="mb-0 text-white">{betLimitData?.max_bet_limit ?? ''}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default GetAllBetsData;