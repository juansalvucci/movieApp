import React from 'react';
import CircularProgress from "@material-ui/core/CircularProgress"

function Loading() {
  return (    
    <div className="loading">
      <CircularProgress disableShrink />        
    </div>    
  );
}

export default Loading;