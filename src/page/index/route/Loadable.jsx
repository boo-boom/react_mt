import React from 'react';
import Loadable from 'react-loadable';

// 过场组件
const Loading = ({ error, pastDelay }) => {
  if(error) {
    return <div>Error...</div>
  } else if (pastDelay) {
    return <div>Loading...</div>
  } else {
    return null
  }
}

const LoadableComponent = (loader, loading=Loading) => {
  return Loadable({
    loader,
    loading,
    delay: 300
  })
}

export default LoadableComponent;
