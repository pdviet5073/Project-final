import React from "react";
import { Input,Button } from 'antd';
import "./styles.css";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-col-1">
          
          <div>
           <p>   Về Vntrip</p>
            <p> Liên hệ</p>
           <p>  Điều khoản sử dụng</p>
           <p>  Quy chế hoạt động</p>
            <p> Chính sách bảo mật</p>
            <p> Blog du lịch</p>
            <p> Tuyển dụng</p>
            <p> Hợp tác đại lý</p>
          </div>
        </div>
        <div className="footer-top-col-2">
          <img
            src="https://statics.vntrip.vn/images/logo/appStore.png"
            alt=""
          />
          <img
            src="https://statics.vntrip.vn/images/logo/googlePlay.png"
            alt=""
          />
        </div>
        <div className="footer-top-col-3">
          <span><b>Công ty TNHH ARYA OTA</b></span>
          <span><b>Tầng 5 Tòa nhà D</b></span>
          <span>Số 08 Hà Văn Tính, Liên Chiểu, Đà Nẵng</span>
          <span>Email: <span style={{color:"#0084cb"}}>cskh@arya.com</span></span>
          <span>Hotline: <span style={{color:"#ff8917"}}>0868869736</span></span>
        </div>
        <div className="footer-top-col-4">
          <span><span>Du lịch thông minh!</span> Đăng ký nhận tin để lên kế hoạch cho kỳ nghỉ tới ngay từ bây giờ:</span>
          <div>
            <Input placeholder="Email của bạn"></Input>
            <Button>Đăng ký</Button>
          </div>
          <div>
            <img src="https://statics.vntrip.vn/images/logo_bocongthuong_blue.png" alt=""/>
            <img src="https://statics.vntrip.vn/images/logo_bocongthuong_red.png" alt=""/>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-left">Bản quyền thuộc về Arya</div>
        <div className="footer-bottom-right">
          <a href="">
            <FaFacebookSquare />
            <span>Facebook</span>
          </a>
          <a href="">
            <FaInstagram />
            <span>Instagram</span>
          </a>
          <a href="">
            <AiOutlineYoutube />
            <span>YouTube</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
