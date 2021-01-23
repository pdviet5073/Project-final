import React, {useState} from 'react';
import { Route } from 'react-router-dom';
import Header from '../../components/Header';
import './styles.css';

function PaymentSuccessLayout({ component: Component, ...props }) {

  return (
    <Route
      {...props}
      render={(routerProps) => (
        <>
          <Header {...routerProps}/>
          <div className="container main-booking">
            <Component  {...routerProps} />
          </div>
          <div className="booking-footer"></div>
        </>
      )}
    />
  );
}

export default PaymentSuccessLayout;
