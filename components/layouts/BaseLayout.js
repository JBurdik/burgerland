import Header from "../shared/Header";
import React from 'react'

const BaseLayout = (props) => {
  const { className, children } = props;
  return (
    <React.Fragment>
      <Header />
      <main className={`main ${className}`}> {children} </main>
    </React.Fragment>
  );
};

export default BaseLayout;
