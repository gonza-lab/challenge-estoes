import React, { useCallback } from 'react';
import { UiButton } from '../../ui/button/Button';
import { useHistory } from "react-router-dom";
import './SubHeader.scss';

export const ListSubHeader = ({  }) => {
  const history = useHistory();

  const onAdd = useCallback(() => {
    history.push('/add');
  }, [])

  return(
    <div className="list-subheader">
      <h2>My Projects</h2>
      <UiButton onClick={onAdd}>+ Add Project</UiButton>
    </div>
  );
};
