import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { pipDeleteToken, pipGetProfile } from '../Auth/Pip';
import { pageRoutes } from '../Routes/pageRoutes';
import { toggleChange } from "../Redux/reducers/authReducer";
import { useDispatch, useSelector } from 'react-redux';
import { getMyProfileData } from '../Redux/actions/usersAction';
import Loader from './Loader';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isToggle } = useSelector((state) => state.authReducer);
    const { myProfile, isLoading } = useSelector((state) => state.usersReducer)
    const [userProfile, setUserProfile] = useState(myProfile ?? {});

    useEffect(() => {
        const userData = pipGetProfile();
        if (!userData) {
            dispatch(getMyProfileData());
        } else {
            setUserProfile(userData ?? myProfile);
        }
    }, []);

    const onHandleLogoutAdmin = () => {
        pipDeleteToken();
        navigate(pageRoutes.login);
    };

    if (isLoading) {
        return <Loader />
    }

    return (
        <div className="ct_right_header">
            <div className="ct_right_header_left">
                <div className="ct_toggle_bar" onClick={() => dispatch(toggleChange(!isToggle))}>
                    <i className="fa-solid fa-bars"></i>
                </div>
            </div>
            <div className="ct_right_header_right">
                <div className="ct_user_profile_head">
                    <a href="javascript:void(0)" onClick={() => navigate(pageRoutes.profile)}>
                        <img src={userProfile?.profile_image ?? "assets/img/user124.jpg"} className="ct_img_44" />
                        <div>
                            <h6 className="ct_fs_14 ct_fw_600 mb-0 text-white">{userProfile?.full_name ?? ""}</h6>
                            <p className="mb-0 ct_fs_12 ct_fw_400 text-white">{userProfile?.username ?? ""}</p>
                        </div>
                    </a>
                </div>
                <div>
                    <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#ct_logout_modal">
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.0117 0C4.51172 0 0.0117188 4.5 0.0117188 10C0.0117188 15.5 4.51172 20 10.0117 20C15.5117 20 20.0117 15.5 20.0117 10C20.0117 4.5 15.5117 0 10.0117 0ZM10.0117 15.9C6.81172 15.9 4.11172 13.3 4.11172 10C4.11172 8.3 4.91172 6.6 6.21172 5.5C6.61172 5.2 7.31172 5.2 7.61172 5.6C8.01172 6.1 7.91172 6.7 7.51172 7.1C6.61172 7.8 6.11172 8.9 6.11172 10.1C6.11172 12.2 7.81172 14 10.0117 14C12.2117 14 13.9117 12.3 13.9117 10.1C13.9117 9 13.4117 7.9 12.5117 7.1C12.1117 6.8 12.0117 6.1 12.4117 5.7C12.8117 5.3 13.4117 5.2 13.8117 5.6C15.1117 6.7 15.9117 8.4 15.9117 10.1C15.9117 13.3 13.2117 15.9 10.0117 15.9ZM10.0117 3.5C10.5117 3.5 11.0117 3.9 11.0117 4.5V8.2C11.0117 8.7 10.5117 9.2 10.0117 9.2C9.51172 9.2 9.01172 8.7 9.01172 8.2V4.5C9.01172 3.9 9.51172 3.5 10.0117 3.5Z" fill="#DC0202"></path>
                        </svg>
                    </a>
                </div>
            </div>
            <div className="modal fade ct_assets_modal" id="ct_logout_modal" tabindex="-1" aria-labelledby="ct_logout_modalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border-0 pt-0">
                            <button type="button" className="btn-close ct_cloose_btn" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-xmark"></i></button>
                        </div>
                        <div className="modal-body border-0 ">
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.0117 0C4.51172 0 0.0117188 4.5 0.0117188 10C0.0117188 15.5 4.51172 20 10.0117 20C15.5117 20 20.0117 15.5 20.0117 10C20.0117 4.5 15.5117 0 10.0117 0ZM10.0117 15.9C6.81172 15.9 4.11172 13.3 4.11172 10C4.11172 8.3 4.91172 6.6 6.21172 5.5C6.61172 5.2 7.31172 5.2 7.61172 5.6C8.01172 6.1 7.91172 6.7 7.51172 7.1C6.61172 7.8 6.11172 8.9 6.11172 10.1C6.11172 12.2 7.81172 14 10.0117 14C12.2117 14 13.9117 12.3 13.9117 10.1C13.9117 9 13.4117 7.9 12.5117 7.1C12.1117 6.8 12.0117 6.1 12.4117 5.7C12.8117 5.3 13.4117 5.2 13.8117 5.6C15.1117 6.7 15.9117 8.4 15.9117 10.1C15.9117 13.3 13.2117 15.9 10.0117 15.9ZM10.0117 3.5C10.5117 3.5 11.0117 3.9 11.0117 4.5V8.2C11.0117 8.7 10.5117 9.2 10.0117 9.2C9.51172 9.2 9.01172 8.7 9.01172 8.2V4.5C9.01172 3.9 9.51172 3.5 10.0117 3.5Z" fill="#DC0202"></path>
                            </svg>
                            <h4 className="text-center mb-4 ct_fw_600">Log Out Account</h4>
                            <p className="text-center ct_grey_text">
                                Are you sure, you want to logout? once you logout <br /> you need to login again
                        </p>
                            <div className="modal-footer border-0 justify-content-center">
                                <button type="button" className=" ct_yellow_btn ct_outline_blue w-auto ct_line_height_0" data-bs-dismiss="modal">Cancel</button>
                                <a href="javascript:void(0)" onClick={onHandleLogoutAdmin} data-bs-dismiss="modal" type="button" className=" bg-danger  ct_yellow_btn text-white w-auto justify-content-center" style={{ borderColor: "rgb(220, 53, 69)" }}>Yes Logout!</a >
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;