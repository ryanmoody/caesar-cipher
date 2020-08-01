import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../App.css';

const Layout = (props) => {
  return (
    <div className='wrapper'>
      <Header />
        <main className='main'>
          {props.children}
        </main>
      <Footer />
    </div>
  );
};

export default Layout;