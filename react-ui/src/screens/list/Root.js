import React, { useEffect } from 'react';
import { ListSubHeader } from '../../components/list/sub-header/SubHeader';
import { List } from '../../components/list/list/List';

export const ScreensListRoot  = ({  }) => {
  return(
    <div>
      <ListSubHeader />
      <List />
    </div>
  );
};
