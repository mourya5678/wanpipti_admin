import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Header from '../Components/Header';
import Loader from '../Components/Loader';
import Sidebar from '../Components/Sidebar';
import { getAllGames } from '../Redux/actions/usersAction';
import { pageRoutes } from '../Routes/pageRoutes';
import { pipViewDate2, pipViewDate3 } from '../Auth/Pip';

const GamesManagement = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isToggle } = useSelector((state) => state.authReducer);
    const { isLoading, all_games } = useSelector((state) => state?.usersReducer);

    useEffect(() => {
        dispatch(getAllGames());
    }, []);

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
                                        <th>2:00 Pm</th>
                                        <th>5.00 Pm</th>
                                        <th>9.00 Pm</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {all_games?.length != 0 &&
                                        all_games?.map((item, i) => (
                                            <tr>
                                                <td>{i + 1}</td>
                                                <td>{pipViewDate3(item?.created_at) ?? 'NA'}</td>
                                                <td>{item?.["2 PM_winning_number"] ?? 'NA'}</td>
                                                <td>{item?.["5 PM_winning_number"] ?? 'NA'}</td>
                                                <td>{item?.["9 PM_winning_number"] ?? 'NA'}</td>
                                                <td>
                                                    <div className="ct_action_btns">
                                                        <button onClick={() => navigate(pageRoutes.bet_detail, { state: { created_at: pipViewDate3(item?.created_at), data: item } })} className="ct_view_btn w-auto px-3 ct_fw_400 ct_ff_poppins d-flex align-items-center gap-1">View Bets</button>
                                                        <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.update_winning_number)} className="ct_edit_btn"><i className="fa-solid fa-pen"></i></a>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                </tbody >
                            </table >
                        </div >
                    </div >
                </div >
            </div >
        </main >
    )
}

export default GamesManagement;