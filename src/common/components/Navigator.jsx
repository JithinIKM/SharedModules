import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { STATE_REDUCER_KEY } from '../../pages/common/constants';
import { actions } from '../../pages/common/slice';

const Navigator = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    to, options = {}, active = false
  } = useSelector((state) => state[STATE_REDUCER_KEY].navigate);
  useEffect(() => {
    if (active) {
      navigate(to, options);
      dispatch(actions.disableNavigate());
    }
  }, [active]);
};

export default Navigator;
