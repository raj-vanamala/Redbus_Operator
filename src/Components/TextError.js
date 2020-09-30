import React from 'react';

function TextError(props) {
  return (
    <div style={{color: "white",fontFamily : "'Times New Roman', Times, serif"}}>
      {props.children}
    </div>
  );
}

export default TextError;
