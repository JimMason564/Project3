import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { QUERY_DATA_SET } from './utils/queries';


const setForm = () => {
    function Sets ({ Sets }) {
        const { loading, error, data } = useQuery(QUERY_DATA_SET);
      
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;

  return (
  
  );
  }
};

export default setForm
