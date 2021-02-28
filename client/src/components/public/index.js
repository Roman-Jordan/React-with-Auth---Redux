import React from 'react';
import Header from './headers';
import Body from './templates/landing';
const PublicMainView = (props) => {
  return (
    <>
      <Header {...props} />
      <Body {...props}/>
    </>
  );
};

export default PublicMainView;
