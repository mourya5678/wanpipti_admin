import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import { pipViewDate, pipViewDate3 } from '../Auth/Pip';
import { useDispatch, useSelector } from 'react-redux';
import { getGamesById } from '../Redux/actions/usersAction';
import Loader from '../Components/Loader';
import { viewUserBetDetails } from '../Redux/reducers/usersReducer';
import ReactPagination from '../Layout/ReactPagination';
import PaginationDropdown from '../Layout/PaginationDropdown';

const BetsDetails = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { state } = useLocation();
    const { isToggle } = useSelector((state) => state.authReducer);
    const { isLoading, games_bet_details, user_bet_details } = useSelector((state) => state?.usersReducer);
    const [currentPage, setCurrentPage] = useState(0);
    const [usersPerPage, setUserPerPages] = useState(10);

    const displayUsers = games_bet_details?.slice(
        currentPage * usersPerPage,
        (currentPage + 1) * usersPerPage
    );
    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    useEffect(() => {
        const data = {
            created_at: state?.created_at
        }
        dispatch(getGamesById({ payload: data }));
    }, []);


    if (isLoading) {
        return <Loader />
    }
    return (
        <main className={`ct_dashboard_main_bg ${isToggle && 'ct_collapsed_sidebar'}`}>
            <Sidebar />
            <div className="ct_right_content">
                <Header />
                <div className="ct_inner_dashbaord_main">
                    <div className="ct_white_bg">
                        <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                            <div className="d-flex align-items-center gap-3">
                                <a href="javascript:void(0)" onClick={() => navigate(-1)} className="ct_back_text"><i className="fa-solid fa-arrow-left text-white"></i> Back</a>
                                <h4 className="ct_fs_24 ps-4 ct_fw_600 text-white mb-0"> Bets Detail</h4>
                            </div>
                        </div>
                        <div className="table-responsive mt-4">
                            <table className="table ct_custom_table">
                                <thead>
                                    <tr>
                                        <th>{state?.created_at}</th>
                                        <th>2:00 Pm</th>
                                        <th>5.00 Pm</th>
                                        <th>9.00 Pm</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                {displayUsers && displayUsers?.length != 0 ?
                                    <tbody>
                                        {displayUsers?.map((item) => (
                                            <tr>
                                                <td>{item?.user_name}</td>
                                                <td>{item?.['2pm_choosen_number'] ?? 'NA'}</td>
                                                <td>{item?.['5pm_choosen_number'] ?? 'NA'}</td>
                                                <td>{item?.['9pm_choosen_number'] ?? 'NA'}</td>
                                                <td>
                                                    <div className="ct_action_btns" onClick={() => dispatch(viewUserBetDetails(item))}>
                                                        <a href="javascript:void(0)" className="ct_view_btn w-auto px-3 ct_fw_400 ct_ff_poppins d-flex align-items-center gap-1" data-bs-toggle="modal" data-bs-target="#ct_view_bet"><i className="fa-solid fa-eye"></i>View More</a>
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
                                                    <p className="mb-0 mt-3 ct_fs_24 ct_fw_400 ct_ff_poppin ct_clr_8C98A9 text-center">No bets found</p>
                                                </div>
                                            </td>
                                        </tr>
                                    </tfoot>
                                }
                            </table>
                        </div>
                        <div className="mt-3">
                            {
                                games_bet_details?.length > 0 && <div className="d-flex align-items-center flex-wrap justify-content-between gap-3 mb-3">
                                    <PaginationDropdown
                                        onChange={(val) => {
                                            setUserPerPages(val);
                                            setCurrentPage(0);
                                        }}
                                    />
                                    <ReactPagination
                                        pageCount={Math.ceil(
                                            games_bet_details.length / usersPerPage
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
            <div className="modal fade " id="ct_view_bet" tabindex="-1" aria-labelledby="ct_view_betLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content py-4 ct_modal_bg_black ">
                        <div className="modal-header border-0 py-0">
                            <button type="button" className="btn-close ct_btn_close" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-xmark"></i></button>
                        </div>
                        <div className="modal-body py-0">
                            <div className="ct_view_user_detail">
                                <h4 className="ct_fs_28 ct_fw_600 mb-5 text-center text-white">View Bets</h4>
                                <div>
                                    <table className="w-100">
                                        <thead>
                                            <tr>
                                                <th className="text-white p-2" style={{ borderBottom: "1px solid rgb(255 255 255 / 50%)" }}>Time</th>
                                                <th className="text-white text-center p-2" style={{ borderBottom: "1px solid rgb(255 255 255 / 50%)" }}>Bet Number</th>
                                                <th className="text-white text-end p-2" style={{ borderBottom: "1px solid rgb(255 255 255 / 50%)" }}>Bet Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="p-2"> <p className="mb-0 pt-3 text-white">2:00</p></td>
                                                <td className="p-2"><p className="mb-0 pt-3 text-white text-center">{user_bet_details?.['2pm_bet_amount'] ?? 'NA'}</p></td>
                                                <td className="p-2"> <p className="mb-0 pt-3 text-white text-end">{user_bet_details?.['2pm_choosen_number'] ?? "NA"}</p></td>
                                            </tr>
                                            <tr>
                                                <td className="p-2"> <p className="mb-0  text-white">5:00</p></td>
                                                <td className="p-2"><p className="mb-0 text-white text-center">{user_bet_details?.['5pm_choosen_number'] ?? 'NA'}</p></td>
                                                <td className="p-2"> <p className="mb-0 text-white text-end">{user_bet_details?.['5pm_bet_amount'] ?? 'NA'}</p></td>
                                            </tr>
                                            <tr>
                                                <td className="p-2"> <p className="mb-0 text-white">9:00</p></td>
                                                <td className="p-2"><p className="mb-0 text-white text-center">{user_bet_details?.['9pm_choosen_number'] ?? 'NA'}</p></td>
                                                <td className="p-2"> <p className="mb-0 text-white text-end">{user_bet_details?.['9pm_bet_amount'] ?? 'NA'}</p></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default BetsDetails;