import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Header from '../Components/Header';
import Loader from '../Components/Loader';
import Sidebar from '../Components/Sidebar';
import { deleteFaq, getAllFaq } from '../Redux/actions/usersAction';
import { pageRoutes } from '../Routes/pageRoutes';
import ReactPagination from '../Layout/ReactPagination';
import PaginationDropdown from '../Layout/PaginationDropdown';

const AllFaq = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isToggle } = useSelector((state) => state.authReducer);
    const { isLoading, all_faq } = useSelector((state) => state.usersReducer);
    const [currentPage, setCurrentPage] = useState(0);
    const [usersPerPage, setUserPerPages] = useState(5);

    const displayUsers = all_faq?.message ? [] : all_faq?.length != 0 && all_faq?.slice(
        currentPage * usersPerPage,
        (currentPage + 1) * usersPerPage
    );

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    useEffect(() => {
        dispatch(getAllFaq());
    }, []);

    const onHandleDelete = (val) => {
        const callback = (response) => {
            if (response?.success) {
                dispatch(getAllFaq());
            }
        };
        dispatch(deleteFaq({ payload: { user_id: val }, callback }));
    };

    if (isLoading) {
        return <Loader />
    }
    return (
        <main className={`ct_dashboard_main_bg ${isToggle && 'ct_collapsed_sidebar'}`}>
            <Sidebar path="faq" />
            <div className="ct_right_content">
                <Header />
                <div className="ct_inner_dashbaord_main">
                    <div className="ct_white_bg">
                        <div className="d-flex align-items-center justify-content-between gap-2 mb-4">
                            <h4 className="ct_fs_24  ct_fw_600 text-white">FAQ</h4>
                            <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.add_faq)} className="ct_yellow_btn w-auto"><i className="fa-solid fa-plus"></i> Add</a>
                        </div>
                        <div className="table-responsive mt-4">
                            <table className="table ct_custom_table">
                                <thead>
                                    <tr>
                                        <th>S No.</th>
                                        <th>Question</th>
                                        <th>Answer</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                {displayUsers && displayUsers?.length != 0 ?
                                    <tbody>
                                        {displayUsers?.map((item, i) => (
                                            <tr>
                                                <td>{i + 1}</td>
                                                <td>{item?.question}</td>
                                                <td>{item?.answer}</td>
                                                <td>
                                                    <div className="ct_action_btns">
                                                        <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.edit_faq, { state: item })} className="ct_edit_btn"><i className="fa-solid fa-pen"></i></a>
                                                        <a href="javascript:void(0)" onClick={() => onHandleDelete(item?.id)} className="ct_delete_btn"><i className="fa-solid fa-trash-can"></i></a>
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
                                                    <p className="mb-0 mt-3 ct_fs_24 ct_fw_400 ct_ff_poppin ct_clr_8C98A9 text-center">No faq found</p>
                                                </div>
                                            </td>
                                        </tr>
                                    </tfoot>
                                }
                            </table>
                        </div>
                        <div className="mt-3">
                            {
                                all_faq?.length != 0 && <div className="d-flex align-items-center flex-wrap justify-content-between gap-3 mb-3">
                                    <PaginationDropdown
                                        onChange={(val) => {
                                            setUserPerPages(val);
                                            setCurrentPage(0);
                                        }}
                                    />
                                    <ReactPagination
                                        pageCount={Math.ceil(
                                            all_faq?.length / usersPerPage
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
        </main >
    )
}

export default AllFaq;