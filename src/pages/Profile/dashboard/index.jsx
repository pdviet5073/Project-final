import React from 'react';

import './styles.css';

function Dashboard() {
  return (
    <div>
  {/* Modal HTML */}
  <div id="myModal" className="modal fade">
        <div className="modal-dialog modal-confirm">
          <div className="modal-content">
            <div className="modal-header">
              <div className="icon-box">
                <i className="material-icons">&#xE876;</i>
              </div>
              <h4 className="modal-title">Đặt phòng thành công!</h4>
            </div>
            <div className="modal-body">
              <p className="text-center">
                Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi
              </p>
            </div>
            <div className="modal-footer">
              <button className="btn btn-success btn-block" data-dismiss="modal">
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;