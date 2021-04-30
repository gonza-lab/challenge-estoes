import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import project from '../../redux/project/actions'
import { ListSubHeader } from '../../components/list/sub-header/SubHeader';
import { List } from '../../components/list/list/List';

export const ScreensListRoot  = ({  }) => {
  const dispatch = useDispatch();
    
  useEffect(() => {
    dispatch(project.startReadAll());
  });

  return(
    <div>
      <ListSubHeader />
      <List />
    </div>
  );
};
