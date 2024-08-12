import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import { getUsersData, deleteUser } from '../Redux/actions/usersAction';
import { userModalData } from '../Redux/reducers/usersReducer';
import { pageRoutes } from '../Routes/pageRoutes';
import Loader from '../Components/Loader';
import ReactPagination from '../Layout/ReactPagination';
import PaginationDropdown from '../Layout/PaginationDropdown';

const AllUsers = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isToggle } = useSelector((state) => state.authReducer);
    const { isLoading, all_users, userData } = useSelector((state) => state?.usersReducer);
    const [currentPage, setCurrentPage] = useState(0);
    const [usersPerPage, setUserPerPages] = useState(10);

    const displayUsers = all_users?.slice(
        currentPage * usersPerPage,
        (currentPage + 1) * usersPerPage
    );

    useEffect(() => {
        dispatch(getUsersData());
    }, []);

    const handleDeleteUser = (val) => {
        const callback = (response) => {
            if (response?.success) {
                dispatch(getUsersData());
            }
        };
        dispatch(deleteUser({ payload: { user_id: val }, callback }));
    };

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    if (isLoading) {
        return <Loader />
    }
    return (
        <main className={`ct_dashboard_main_bg ${isToggle && 'ct_collapsed_sidebar'}`}>
            <Sidebar path="all-user" />
            <div className="ct_right_content">
                <Header />
                <div className="ct_inner_dashbaord_main">
                    <div className="ct_white_bg">
                        <div className="d-flex align-items-center justify-content-between gap-2 mb-4">
                            <h4 className="ct_fs_24  ct_fw_600 text-white">All Users</h4>
                        </div>
                        <div className="table-responsive mt-4">
                            <table className="table ct_custom_table">
                                <thead>
                                    <tr>
                                        <th>S No.</th>
                                        <th>User Name</th>
                                        <th>Full Name</th>
                                        <th>Email Address</th>
                                        <th>Current Balance</th>
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
                                                        <img src={item?.profile_image ?? "assets/img/user124.jpg"} alt="" className="ct_img_36" />
                                                        <h5 className="ct_fs_14 ct_fw_600 mb-0 text-white">{item?.username ?? ''}</h5>
                                                    </div>
                                                </td>
                                                <td>{item?.full_name ?? ''}</td>
                                                <td>{item?.email ?? ''}</td>
                                                <td>${item?.wallet?.wallet_balance ?? ''}</td>
                                                <td>
                                                    <div className="ct_action_btns">
                                                        <a href="javascript:void(0)" onClick={() => dispatch(userModalData(item))} className="ct_view_btn" data-bs-toggle="modal" data-bs-target="#ct_user_view"><i className="fa-solid fa-eye"></i></a>
                                                        <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.edit_user, { state: { data: item } })} className="ct_edit_btn"><i className="fa-solid fa-pen"></i></a>
                                                        <a href="javascript:void(0)" onClick={() => handleDeleteUser(item?.id)} className="ct_delete_btn"><i className="fa-solid fa-trash-can"></i></a>
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
                        <div className="mt-3">
                            {
                                all_users?.length > 0 && <div className="d-flex align-items-center flex-wrap justify-content-between gap-3 mb-3">
                                    <PaginationDropdown
                                        onChange={(val) => {
                                            setUserPerPages(val);
                                            setCurrentPage(0);
                                        }}
                                    />
                                    <ReactPagination
                                        pageCount={Math.ceil(
                                            all_users.length / usersPerPage
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
                                <h4 className="ct_fs_28 ct_fw_600 mb-5 text-center text-white">User Detail</h4>
                                <div className="text-center mb-4">
                                    <img src={userData?.profile_image ?? "assets/img/user124.jpg"} className="ct_img_148" />
                                </div>
                                <div className="ct_grid_3 justify-content-center ct_grid_3_responsive_3">
                                    <p className="mb-0 text-white">User Name</p>
                                    <p className="mb-0 text-white">:</p>
                                    <p className="mb-0 text-white ">{userData?.username ?? ''}</p>
                                </div>
                                <div className="ct_grid_3 justify-content-center ct_grid_3_responsive_3 mt-4">
                                    <p className="mb-0 text-white">Full Name</p>
                                    <p className="mb-0 text-white">:</p>
                                    <p className="mb-0 text-white ">{userData?.full_name ?? ''}</p>
                                </div>
                                <div className="ct_grid_3 mt-4 justify-content-center">
                                    <p className="mb-0 text-white">Email Address</p>
                                    <p className="mb-0 text-white">:</p>
                                    <p className="mb-0 text-white" style={{ wordBreak: "break-all" }}>{userData?.email}</p>
                                </div>
                                {console.log(userData)}
                                <div className="ct_grid_3 mt-4 justify-content-center">
                                    <p className="mb-0 text-white">Current Balance</p>
                                    <p className="mb-0 text-white">:</p>
                                    <p className="mb-0 text-white">${userData?.wallet?.wallet_balance}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default AllUsers;