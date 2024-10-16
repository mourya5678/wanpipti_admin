import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import { deleteUser, getDashboardData, getUsersData } from '../Redux/actions/usersAction';
import { userModalData } from '../Redux/reducers/usersReducer';
import { pageRoutes } from '../Routes/pageRoutes';
import Loader from '../Components/Loader';
import { curSym } from '../Auth/Pip';

const Dashboard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isToggle } = useSelector((state) => state.authReducer);
    const { isLoading, all_users, userData, dashboardData } = useSelector((state) => state?.usersReducer);

    useEffect(() => {
        dispatch(getUsersData());
        dispatch(getDashboardData());
    }, []);

    const handleDeleteUser = (val) => {
        const callback = (response) => {
            if (response?.success) {
                dispatch(getUsersData());
            }
        };
        dispatch(
            deleteUser({ payload: { user_id: val }, callback })
        );
    };

    if (isLoading) {
        return <Loader />
    }
    return (
        <main className={`ct_dashboard_main_bg ${isToggle && 'ct_collapsed_sidebar'}`}>
            <Sidebar path="dashboard" />
            <div className="ct_right_content">
                <Header />
                <div className="ct_inner_dashbaord_main">
                    <h3 className="ct_fs_35 ct_fw_600 py-4 text-white">Dashboard</h3>
                    <div className="row">
                        {console.log(dashboardData, "dashboardData")}
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 mb-4 mb-xxl-0">
                            <div className="ct_dashboard_card">
                                <div className="d-flex align-items-center justify-content-between gap-2">
                                    <div>
                                        <p className="ct_fw_600">Total Users</p>
                                        <h2 className="ct_fs_28 ct_fw_600 text-white">{dashboardData?.all_user_count ?? 0}</h2>
                                    </div>
                                    <div className="ct_dash_card_icon" style={{ backgroundColor: "rgb(255 226 121 / 52%)" }}>
                                        <i className="fa-solid fa-users"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 mb-4 mb-xl-0">
                            <div className="ct_dashboard_card">
                                <div className="d-flex align-items-center justify-content-between gap-2">
                                    <div>
                                        <p className="ct_fw_600">Total Games</p>
                                        <h2 className="ct_fs_28 ct_fw_600 text-white">{dashboardData?.all_game_count ?? 0}</h2>
                                    </div>
                                    <div className="ct_dash_card_icon" style={{ backgroundColor: "rgb(255 226 121 / 52%)" }}>
                                        {/* <i className="fa-solid fa-sack-dollar"></i> */}
                                        <i className="fa-solid fa-gamepad"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 mb-4 mb-xl-0">
                            <div className="ct_dashboard_card">
                                <div className="d-flex align-items-center justify-content-between gap-2">
                                    <div>
                                        <p className="ct_fw_600">Total Bet Amount</p>
                                        <h2 className="ct_fs_28 ct_fw_600 text-white">{curSym}{" "}{dashboardData?.total_bet_amount ?? 0}</h2>
                                    </div>
                                    <div className="ct_dash_card_icon" style={{ backgroundColor: "rgb(255 226 121 / 52%)" }}>
                                        <img src="assets/img/handlogo.svg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ct_white_bg ct_mt_28">
                        <div className="d-flex align-items-center justify-content-between gap-2 mb-4">
                            <h4 className="ct_fs_24  ct_fw_600 text-white mb-0">All Users</h4>
                            <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.all_users)} className="ct_yellow_text"> See More</a>
                        </div>
                        <div className="table-responsive mt-4">
                            <table className="table ct_custom_table">
                                <thead>
                                    <tr>
                                        <th>S No.</th>
                                        <th>User Name</th>
                                        <th>Full Name</th>
                                        <th>Mobile Number</th>
                                        <th>Current Balance</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                {all_users && all_users?.length != 0 ?
                                    <tbody>
                                        {all_users?.slice(0, 5)?.map((item, i) => (
                                            <tr>
                                                <td>{i + 1}</td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <img src={item?.profile_image ?? "assets/img/user124.jpg"} alt="" className="ct_img_36" />
                                                        <h5 className="ct_fs_14 ct_fw_600 mb-0 text-white">{item?.username ?? ''}</h5>
                                                    </div>
                                                </td>
                                                <td>{item?.full_name ?? ''}</td>
                                                <td>{item?.mobile_number ?? ''}</td>
                                                <td>{curSym}{" "}{item?.wallet?.wallet_balance ?? ''}</td>
                                                <td>
                                                    <div className="ct_action_btns">
                                                        <a href="javascript:void(0)" onClick={() => dispatch(userModalData(item))} className="ct_view_btn" data-bs-toggle="modal" data-bs-target="#ct_user_view"><i className="fa-solid fa-eye"></i></a>
                                                        <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.edit_user, { state: { data: item } })} className="ct_edit_btn"><i className="fa-solid fa-pen"></i></a>
                                                        <a href="javascript:void(0)" className="ct_delete_btn" onClick={() => handleDeleteUser(item?.id)}><i className="fa-solid fa-trash-can"></i></a>
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
                                                    <p className="mb-0 mt-3 ct_fs_24 ct_fw_400 ct_ff_poppin ct_clr_8C98A9 text-center">No users found</p>
                                                </div>
                                            </td>
                                        </tr>
                                    </tfoot>
                                }
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* user modal */}
            <div className="modal fade " id="ct_user_view" tabindex="-1" aria-labelledby="ct_user_viewLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content py-4 ct_modal_bg_black ">
                        <div className="modal-header border-0 py-0">
                            <button type="button" className="btn-close ct_btn_close" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-xmark"></i></button>
                        </div>
                        <div className="modal-body py-0">
                            <div className="ct_view_user_detail">
                                <h4 className="ct_fs_28 ct_fw_600 mb-5 text-center text-white">User Detail</h4>
                                <div className="text-center mb-4">
                                    <img src="assets/img/user124.jpg" className="ct_img_148" />
                                </div>
                                <div className="ct_grid_3 justify-content-center ct_grid_3_responsive_3">
                                    <p className="mb-0 text-white">User Name</p>
                                    <p className="mb-0 text-white">:</p>
                                    <p className="mb-0 text-white">{userData?.username ?? ''}</p>
                                </div>
                                <div className="ct_grid_3  justify-content-center ct_grid_3_responsive_3 mt-4">
                                    <p className="mb-0 text-white">Full Name</p>
                                    <p className="mb-0 text-white">:</p>
                                    <p className="mb-0 text-white">{userData?.full_name ?? ''}</p>
                                </div>
                                <div className="ct_grid_3  justify-content-center ct_grid_3_responsive_3 mt-4">
                                    <p className="mb-0 text-white">Mobile Number</p>
                                    <p className="mb-0 text-white">:</p>
                                    <p className="mb-0 text-white" style={{ wordBreak: "break-all" }}>{userData?.mobile_number ?? ''}</p>
                                </div>
                                <div className="ct_grid_3  justify-content-center ct_grid_3_responsive_3 mt-4">
                                    <p className="mb-0 text-white">Current Balance</p>
                                    <p className="mb-0 text-white">:</p>
                                    <p className="mb-0 text-white">{curSym}{" "}{userData?.wallet?.wallet_balance ?? 0}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default Dashboard;