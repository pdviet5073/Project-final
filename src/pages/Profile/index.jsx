import React, { useEffect, useState } from "react";
import { Tabs } from "antd";

import Account from "./account";
import Order from "./order";
import Review from "./review";
import Dashboard from "./dashboard";
import Voucher from "./voucher";
import { BiCalendarCheck, BiUserPin } from "react-icons/bi";
import { RiDashboardFill } from "react-icons/ri";
import { FaGifts } from "react-icons/fa";
import { MdAssessment } from "react-icons/md";

import "./styles.css";

function Profile() {
  const [styleLi, setStyleLi] = useState(4);
  console.log('Log:  ~ file: index.jsx ~ line 18 ~ Profile ~ styleLi', styleLi);
  const changeStyleLi = (number) => {
    setStyleLi(number);
  };
  const { TabPane } = Tabs;

  return (
    <div className="profile">
      <div className="container">
        <div className="profile-container ">
          <div className="profile-nav">
            <ul className="profile-list">
              <li
                onClick={() => changeStyleLi(0)}
                className={
                  styleLi === 0
                    ? `profile-nav-item-active`
                    : "profile-nav-item "
                }
              >
                <RiDashboardFill></RiDashboardFill>Dashboard
              </li>
              <li
                onClick={() => changeStyleLi(1)}
                className={
                  styleLi === 1
                    ? `profile-nav-item-active`
                    : "profile-nav-item "
                }
              >
                <FaGifts></FaGifts>Voucher của bạn
              </li>
              <li
                onClick={() => changeStyleLi(2)}
                className={
                  styleLi === 2
                    ? `profile-nav-item-active`
                    : "profile-nav-item "
                }
              >
                <BiCalendarCheck></BiCalendarCheck>Đặt chỗ của tôi
              </li>
              <li
                onClick={() => changeStyleLi(3)}
                className={
                  styleLi === 3
                    ? `profile-nav-item-active`
                    : "profile-nav-item "
                }
              >
                <MdAssessment></MdAssessment>Đánh giá
              </li>
              <li
                onClick={() => changeStyleLi(4)}
                className={
                  styleLi === 4
                    ? `profile-nav-item-active`
                    : "profile-nav-item "
                }
              >
                <BiUserPin></BiUserPin>Tài khoản
              </li>
              <li style={{ top: `calc(${styleLi} * 6rem)` }}></li>
            </ul>
          </div>
          <div className="profile-content">
          
              <div className="profile-item">
              {styleLi === 0  
                ? <Dashboard></Dashboard>
                : styleLi === 1
                ? <Voucher></Voucher>
                : styleLi === 2
                ? <Order></Order>
                : styleLi === 3
                ? <Review></Review>
                : <Account></Account>
                }
              </div>
        
         
          
              
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default Profile;
