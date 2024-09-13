import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Header from '../Components/Header';
import Loader from '../Components/Loader';
import Sidebar from '../Components/Sidebar';
import { getAllGames } from '../Redux/actions/usersAction';
import { pageRoutes } from '../Routes/pageRoutes';
import { pipViewDate2, pipViewDate3 } from '../Auth/Pip';
import ReactPagination from '../Layout/ReactPagination';
import PaginationDropdown from '../Layout/PaginationDropdown';
import { message } from 'antd';

const GamesManagement = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isToggle } = useSelector((state) => state.authReducer);
    const { isLoading, all_games } = useSelector((state) => state?.usersReducer);
    const [currentPage, setCurrentPage] = useState(0);
    const [usersPerPage, setUserPerPages] = useState(5);

    const displayUsers = all_games?.slice(
        currentPage * usersPerPage,
        (currentPage + 1) * usersPerPage
    );

    useEffect(() => {
        dispatch(getAllGames());
    }, []);

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    const updateNavigation = (date, item) => {
        navigate(pageRoutes.update_winning_number, { state: { created_at: pipViewDate2(date), data: item, isToday: false } });
        // let today = new Date();
        // let bDate = new Date(date);
        // let todayDate = today.getDate();
        // let bDateDate = bDate.getDate();
        // let todayMonth = today.getMonth();
        // let bDateMonth = bDate.getMonth();
        // if (todayMonth < bDateMonth) {
        //     navigate(pageRoutes.update_winning_number, { state: { created_at: pipViewDate2(date), data: item, isToday: false } })
        // } else if (todayMonth > bDateMonth) {
        //     message.error("Result has already been declared for the user, it cannot be updated now!");
        // } else {
        //     if (todayDate < bDateDate) {
        //         navigate(pageRoutes.update_winning_number, { state: { created_at: pipViewDate2(date), data: item, isToday: false } })
        //     } else if (todayDate > bDateDate) {
        //         message.error("Result has already been declared for the user, it cannot be updated now!");
        //     } else {
        //         navigate(pageRoutes.update_winning_number, { state: { created_at: pipViewDate2(date), data: item, isToday: true } })
        //     }
        // }
    };

    if (isLoading) {
        return <Loader />
    }
    return (
        <main className={`ct_dashboard_main_bg ${isToggle && 'ct_collapsed_sidebar'}`}>
            <Sidebar path="games" />
            <div className="ct_right_content">
                <Header />
                <div className="ct_inner_dashbaord_main">
                    <h3 className="ct_fs_28 ct_fw_600 py-4 text-white">Game Management</h3>
                    <div className="ct_white_bg">
                        <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                            <h4 className="ct_fs_24  ct_fw_600 text-white mb-0">Winning Numbers</h4>
                            <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.add_winning_number)} className="ct_yellow_btn w-auto"><i className="fa-solid fa-plus"></i> Add</a>
                        </div>
                        <div className="table-responsive mt-4">
                            <table className="table ct_custom_table">
                                <thead>
                                    <tr>
                                        <th>S. No.</th>
                                        <th>Date</th>
                                        <th>2:00 PM</th>
                                        <th>5.00 PM</th>
                                        <th>9.00 PM</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                {displayUsers?.length != 0 ?
                                    <tbody>
                                        {displayUsers?.map((item, i) => (
                                            <tr>
                                                <td>{i + 1}</td>
                                                <td>{pipViewDate3(item?.created_at) ?? 'NA'}</td>
                                                <td>{item?.["2 PM_winning_number"] ? item?.["2 PM_winning_number"]?.toString()?.length == 1 ? `0${item?.["2 PM_winning_number"]}` : item?.["2 PM_winning_number"] : 'NA'}</td>
                                                <td>{item?.["5 PM_winning_number"] ? item?.["5 PM_winning_number"]?.toString()?.length == 1 ? `0${item?.["5 PM_winning_number"]}` : item?.["5 PM_winning_number"] : 'NA'}</td>
                                                <td>{item?.["9 PM_winning_number"] ? item?.["9 PM_winning_number"]?.toString()?.length == 1 ? `0${item?.["9 PM_winning_number"]}` : item?.["9 PM_winning_number"] : 'NA'}</td>
                                                <td>
                                                    <div className="ct_action_btns">
                                                        <button onClick={() => navigate(pageRoutes.bet_detail, { state: { created_at: pipViewDate3(item?.created_at), data: item } })} className="ct_view_btn w-auto px-3 ct_fw_400 ct_ff_poppins d-flex align-items-center gap-1">View Bets</button>
                                                        <a href="javascript:void(0)" onClick={() => updateNavigation(item?.created_at, item)
                                                            // navigate(pageRoutes.update_winning_number, { state: { created_at: pipViewDate2(item?.created_at), data: item } })
                                                        } className="ct_edit_btn"><i className="fa-solid fa-pen"></i></a>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                        }
                                    </tbody >
                                    :
                                    <tfoot>
                                        <tr>
                                            <td className="text-center bg-transparent border-0" colSpan="5">
                                                <div className="text-center">
                                                    <p className="mb-0 mt-3 ct_fs_24 ct_fw_400 ct_ff_poppin ct_clr_8C98A9 text-center">No games found</p>
                                                </div>
                                            </td>
                                        </tr>
                                    </tfoot>
                                }
                            </table >
                        </div >
                        <div className="mt-3">
                            {
                                all_games?.length > 0 && <div className="d-flex align-items-center flex-wrap justify-content-between gap-3 mb-3">
                                    <PaginationDropdown
                                        onChange={(val) => {
                                            setUserPerPages(val);
                                            setCurrentPage(0);
                                        }}
                                    />
                                    <ReactPagination
                                        pageCount={Math.ceil(
                                            all_games.length / usersPerPage
                                        )}
                                        onPageChange={handlePageClick}
                                        currentPage={currentPage}
                                    />
                                </div>
                            }
                        </div>
                    </div >
                </div >
            </div >
        </main >
    )
}

export default GamesManagement;