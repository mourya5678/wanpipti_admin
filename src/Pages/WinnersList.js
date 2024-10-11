import { message } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pipViewDate3, pipViewDate4 } from '../Auth/Pip';
import Header from '../Components/Header';
import Loader from '../Components/Loader';
import Sidebar from '../Components/Sidebar';
import PaginationDropdown from '../Layout/PaginationDropdown';
import ReactPagination from '../Layout/ReactPagination';
import { getAllGameResults } from '../Redux/actions/usersAction';

const WinnersList = () => {
    const { isToggle } = useSelector((state) => state.authReducer);
    const { isLoading, game_result } = useSelector((state) => state?.usersReducer);
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(0);
    const [usersPerPage, setUserPerPages] = useState(5);
    const [changeStatus, setChangeStatus] = useState('All');
    const [selectedData, setSelectedDate] = useState()
    const [all_game_result, setAllGameResult] = useState(game_result);
    const [isLoder, setIsLoder] = useState(false);

    const displayUsers = all_game_result?.slice(
        currentPage * usersPerPage,
        (currentPage + 1) * usersPerPage
    );

    useEffect(() => {
        dispatch(getAllGameResults());
    }, []);

    useEffect(() => {
        setAllGameResult(game_result)
    }, [game_result]);

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    const onHandleChangeStatus = (val, key) => {
        setIsLoder(true);
        let new_arr = [];
        if (key == "Status") {
            setChangeStatus(val);
            if (selectedData) {
                new_arr = game_result?.filter((item) => (
                    pipViewDate4(item?.game?.created_at) == selectedData && item
                ))
                if (val == "All") {
                    setAllGameResult(new_arr);
                } else if (val == "Win") {
                    const val3 = new_arr?.filter((item) => val == "Win" && item?.is_winning == true && item)
                    setAllGameResult(val3)
                } else if (val == "Lost") {
                    const val2 = new_arr?.filter((item) => val == "Lost" && item?.is_winning == false && item)
                    setAllGameResult(val2)
                }
            } else {
                const new_data = game_result?.filter((item) => val == "All" ? item : val == "Win" ? item?.is_winning == true && item : val == "Lost" && item?.is_winning == false && item);
                setAllGameResult(new_data);
            }
        } else if (key == "Date") {
            setSelectedDate(val);
            new_arr = game_result?.filter((item) => (
                pipViewDate4(item?.game?.created_at) == val && item
            ))
            if (changeStatus == "All") {
                setAllGameResult(new_arr);
            } else if (changeStatus == "Win") {
                const val3 = new_arr?.filter((item) => changeStatus == "Win" && item?.is_winning == true && item)
                setAllGameResult(val3)
            } else if (changeStatus == "Lost") {
                const val2 = new_arr?.filter((item) => changeStatus == "Lost" && item?.is_winning == false && item)
                setAllGameResult(val2)
            }
        }
    };

    const onHandleDonloadCsv = () => {
        let csv_arr = [];
        if (all_game_result?.length != 0) {
            for (var i = 0; i < all_game_result?.length; i++) {
                csv_arr.push({
                    'Date': pipViewDate4(all_game_result[i]?.game?.created_at) ?? 'NA',
                    'Game Time': all_game_result[i]?.game?.game_time ?? 'NA',
                    'User Name': all_game_result[i]?.user?.username ?? 'NA',
                    'User Contact': all_game_result[i]?.user?.mobile_number ?? 'NA',
                    'Winning Amount': all_game_result[i]?.winning_amount ?? 'NA',
                    'Win/Lost': all_game_result[i]?.is_winning == true ? "Win" : "Lost" ?? 'NA',
                })
            }
            const csv = convertArrayToCSV(csv_arr);
            const blob = new Blob([csv], { type: 'text/csv' });
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `Game Result`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            message.error("No games found!");
        }
    }

    const convertArrayToCSV = (arr) => {
        if (arr?.length != 0) {
            const headers = Object.keys(arr[0]);
            const rows = arr.map(obj =>
                headers.map(header => obj[header]).join(',')
            );
            return [headers.join(','), ...rows].join('\n');
        } else {
            message.error("No games found!")
        }
    };

    if (isLoading) {
        return <Loader />
    }
    return (
        <main className={`ct_dashboard_main_bg ${isToggle && 'ct_collapsed_sidebar'}`}>
            <Sidebar path="winners" />
            <div className="ct_right_content">
                <Header />
                <div className="ct_inner_dashbaord_main">
                    <h3 className="ct_fs_28 ct_fw_600 py-4 text-white">Game Result</h3>
                    <div className="ct_white_bg">
                        <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                            <div className="d-flex align-items-center gap-2 flex-wrap">
                                <span className="text-white">Filter By Status</span>
                                <select className="form-control" value={changeStatus} onChange={(e) => onHandleChangeStatus(e.target.value, "Status")}>
                                    <option value="All">All</option>
                                    <option value="Win">Win</option>
                                    <option value="Lost">Lost</option>
                                </select>
                            </div>
                            <div className="d-flex align-items-end gap-2">
                                <div className="d-flex align-items-center gap-2 flex-wrap">
                                    <span className="text-white">Filter By Date</span>
                                    <input className="form-control" type="date" value={selectedData} onChange={(e) => onHandleChangeStatus(e.target.value, "Date")} />
                                </div>
                                <div className="d-flex align-items-center gap-2 flex-wrap">
                                    <a href="javascript:void(0)" onClick={onHandleDonloadCsv} className="ct_yellow_btn w-auto ct_white_space_nowrap" style={{ height: "38px", lineHeight: "19px", paddingBlock: "9px" }}>Download Result</a>
                                </div>
                            </div>
                        </div>
                        <div className="table-responsive mt-4">
                            <table className="table ct_custom_table">
                                <thead>
                                    <tr>
                                        <th>S. No.</th>
                                        <th>Date</th>
                                        <th>Game Time</th>
                                        <th>User Name</th>
                                        <th>User Contact</th>
                                        <th>Winning Amount</th>
                                        <th>Win/Lost</th>
                                    </tr>
                                </thead>
                                {displayUsers?.length != 0 ?
                                    <tbody>
                                        {displayUsers?.map((item, i) => (
                                            changeStatus == 'All' ?
                                                <tr>
                                                    <td>{i + 1}</td>
                                                    <td>{pipViewDate3(item?.game?.created_at) ?? 'NA'}</td>
                                                    <td>{item?.game?.game_time ?? 'NA'}</td>
                                                    <td>{item?.user?.username ?? 'NA'}</td>
                                                    <td>{item?.user?.mobile_number ?? 'NA'}</td>
                                                    <td>₱ {item?.winning_amount ?? 'NA'}</td>
                                                    <td className="text-end">{item?.is_winning == true ? "Win" : "Lost"}</td>
                                                </tr>
                                                : changeStatus == "Win" ? item?.is_winning == true &&
                                                    <tr>
                                                        <td>{i + 1}</td>
                                                        <td>{pipViewDate3(item?.game?.created_at) ?? 'NA'}</td>
                                                        <td>{item?.game?.game_time ?? 'NA'}</td>
                                                        <td>{item?.user?.username ?? 'NA'}</td>
                                                        <td>{item?.user?.mobile_number ?? 'NA'}</td>
                                                        <td>₱ {item?.winning_amount ?? 'NA'}</td>
                                                        <td className="text-end">{item?.is_winning == true ? "Win" : "Lost"}</td>
                                                    </tr>
                                                    : changeStatus == "Lost" && item?.is_winning == false &&
                                                    <tr>
                                                        <td>{i + 1}</td>
                                                        <td>{pipViewDate3(item?.game?.created_at) ?? 'NA'}</td>
                                                        <td>{item?.game?.game_time ?? 'NA'}</td>
                                                        <td>{item?.user?.username ?? 'NA'}</td>
                                                        <td>{item?.user?.mobile_number ?? 'NA'}</td>
                                                        <td>₱ {item?.winning_amount ?? 'NA'}</td>
                                                        <td className="text-end">{item?.is_winning == true ? "Win" : "Lost"}</td>
                                                    </tr>
                                        ))
                                        }
                                    </tbody>
                                    :
                                    <tfoot>
                                        <tr>
                                            <td className="text-center bg-transparent border-0" colSpan="5">
                                                <div className="text-center">
                                                    <p className="mb-0 mt-3 ct_fs_24 ct_fw_400 ct_ff_poppin ct_clr_8C98A9 text-center">No Game Result found</p>
                                                </div>
                                            </td>
                                        </tr>
                                    </tfoot>
                                }
                            </table >
                        </div >
                        <div className="mt-3">
                            {
                                all_game_result?.length != 0 && <div className="d-flex align-items-center flex-wrap justify-content-between gap-3 mb-3">
                                    <PaginationDropdown
                                        onChange={(val) => {
                                            setUserPerPages(val);
                                            setCurrentPage(0);
                                        }}
                                    />
                                    <ReactPagination
                                        pageCount={Math.ceil(
                                            all_game_result.length / usersPerPage
                                        )}
                                        onPageChange={handlePageClick}
                                        currentPage={currentPage}
                                    />
                                </div>
                            }
                        </div>
                    </div>
                </div >
            </div >
        </main >
    )
}

export default WinnersList;