import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProfile } from '../actions';

const SampleFile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProfile());
  }, []);

  return (
    <div>SampleFile</div>
  );
};

export default SampleFile;
