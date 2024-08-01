import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Header from '../Components/Header';
import Loader from '../Components/Loader';
import Sidebar from '../Components/Sidebar';
import { getAllGames } from '../Redux/actions/usersAction';
import { pageRoutes } from '../Routes/pageRoutes';

const GamesManagement = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isToggle } = useSelector((state) => state.authReducer);
    const { isLoading, all_games } = useSelector((state) => state?.usersReducer);

    useEffect(() => {
        dispatch(getAllGames());
    }, []);

    if (isLoading) {
        <Loader />
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
                                                <td>26/07/2024</td>
                                                <td>63</td>
                                                <td>36</td>
                                                <td>08</td>
                                                <td>
                                                    <div className="ct_action_btns">
                                                        <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.bet_detail)} className="ct_view_btn w-auto px-3 ct_fw_400 ct_ff_poppins d-flex align-items-center gap-1">View Bets</a>
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