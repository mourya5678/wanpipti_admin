import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Header from '../Components/Header';
import Loader from '../Components/Loader';
import Sidebar from '../Components/Sidebar';
import { deleteFaq, getAllFaq } from '../Redux/actions/usersAction';
import { pageRoutes } from '../Routes/pageRoutes';

const AllFaq = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isToggle } = useSelector((state) => state.authReducer);
    const { isLoading, all_faq } = useSelector((state) => state.usersReducer);

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
                            <h4 className="ct_fs_24  ct_fw_600 text-white">All FAQ</h4>
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
                                {all_faq && all_faq?.length != 0 &&
                                    <tbody>
                                        {all_faq?.map((item, i) => (
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
                                }
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default AllFaq;