import React from 'react';

const FilterControls = ({onChange, onClear}) => {
  return (
    <div>
      <button onClick={() => onChange([{field:"wage_type", value:"Hourly", comp:"="}])}>Filter</button>
      <button onClick={onClear}>Clear Filters</button>
    </div>
  )
}

export default FilterControls;