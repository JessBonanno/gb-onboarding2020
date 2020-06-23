import React from 'react';

export default function Options() {
  const selections = [
    'Blood Glucose',
    'Medication',
    'Food Tracking',
    'Exercise',
    'Weight Management',
    'Blood Pressure',
    'A1C',
  ];


  return <div className='selections-container'>
      {selections.map(selection => (
          <div className='selections'>{selection}</div>
      ))}
  </div>;
}
