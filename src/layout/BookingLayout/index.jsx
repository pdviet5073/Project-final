import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import InforRoomBooking from "../../components/InforRoomBooking";
import './styles.css';

function BookingLayout({ component: Component, ...props }) {
  return (
    <Route
      {...props}
      render={(routerProps) => (
        <>
          <Header {...routerProps}/>
          <div className="main-booking">
            <Component  {...routerProps} />
            <InforRoomBooking  {...routerProps}/>
          </div>
          <div className="booking-footer"></div>
        </>
      )}
    />
  );
}

export default BookingLayout;
