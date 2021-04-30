import React from 'react';
import { AddEditSubHeader } from '../../components/add-edit/sub-header/SubHeader';
import { AddEditForm } from '../../components/add-edit/form/Form';
import './Root.scss';

export const ScreensAddEditRoot = ({  }) => {
  return(
    <div className="add-edit-root">
      <AddEditSubHeader />
      <AddEditForm />
    </div>
  );
};
