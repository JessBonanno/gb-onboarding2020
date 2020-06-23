import React from 'react';

export default function BottomNav() {
  return (
    <div className='bottom-nav-container'>
      <button className='back-button nav-button'>Back</button>
      <body>
        <div class='pagination-wrapper'>
          <div class='pagination'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span class='active'></span>
          </div>
        </div>
      </body>
      <button className='done-button nav-button'>Done</button>
    </div>
  );
}
