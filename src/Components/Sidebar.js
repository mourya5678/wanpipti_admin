import React from 'react'
import { useNavigate } from 'react-router';
import { pageRoutes } from '../Routes/pageRoutes';
import { toggleChange } from "../Redux/reducers/authReducer";
import { useDispatch, useSelector } from 'react-redux';

const Sidebar = ({ path }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isToggle } = useSelector((state) => state.authReducer);

    return (
        <div className="ct_side_bar">
            <div className="ct_close_menu" onClick={() => dispatch(toggleChange(!isToggle))}>
                <i className="fa-solid fa-xmark"></i>
            </div>
            <div className="ct_logo">
                <img src="assets/img/Panaloto_logo1.png" alt="" />
            </div>
            <ul className="ct_side_menu">
                <li onClick={() => {
                    // dispatch(toggleChange(!isToggle))
                    navigate(pageRoutes.dashboard + '/')
                }}>
                    <a href="javascript:void(0)" className={path == "dashboard" && "active"}>Dashboard</a>
                </li>
                <li onClick={() => {
                    // dispatch(toggleChange(!isToggle))
                    navigate(pageRoutes.all_users)
                }}>
                    <a href="javascript:void(0)" className={path == "all-user" && "active"}>All Users</a>
                </li>
                <li onClick={() => {
                    // dispatch(toggleChange(!isToggle))
                    navigate(pageRoutes.game_manage)
                }}>
                    <a href="javascript:void(0)" className={path == "games" && "active"}>Game Management</a>
                </li>
                <li onClick={() => {
                    // dispatch(toggleChange(!isToggle))
                    navigate(pageRoutes.financial_report)
                }}>
                    <a href="javascript:void(0)" className={path == "financial" && "active"}>Financial Report</a>
                </li>
                <li onClick={() => {
                    // dispatch(toggleChange(!isToggle))
                    navigate(pageRoutes.all_bets)
                }}>
                    <a href="javascript:void(0)" className={path == "set-bet" && "active"}>Bet Settings</a>
                </li>
                <li onClick={() => {
                    // dispatch(toggleChange(!isToggle))
                    navigate(pageRoutes.withdraw)
                }}>
                    <a href="javascript:void(0)" className={path == "withdraw" && "active"}>Withdrawal Requests</a>
                </li>
                <li onClick={() => {
                    // dispatch(toggleChange(!isToggle))
                    navigate(pageRoutes.winner_list)
                }}>
                    <a href="javascript:void(0)" className={path == "winners" && "active"}>Game Result</a>
                </li>
                <li onClick={() => {
                    // dispatch(toggleChange(!isToggle))
                    navigate(pageRoutes.all_faq)
                }}>
                    <a href="javascript:void(0)" className={path == "faq" && "active"}>FAQ</a>
                </li>
            </ul>
        </div >
    )
}

export default Sidebar;