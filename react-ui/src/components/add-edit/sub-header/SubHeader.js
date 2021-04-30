import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './Subheader.scss';

export const AddEditSubHeader = ({}) => {
  const history = useHistory();
  const { id } = useParams();


  const onBack = () => history.push('/');

  return (
    <div className="add-edit-subheader">
      <div onClick={onBack} className="add-edit-subheader__btn-back">
        <i className="fas fa-arrow-left"></i>
        <span>Back</span>
      </div>
      <h2>{ (!id) ? 'Add project' : 'Edit project' }</h2>
    </div>
  );
};
