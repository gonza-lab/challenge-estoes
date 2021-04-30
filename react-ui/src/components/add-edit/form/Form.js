import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import project from '../../../redux/project/actions';
import { UiForm } from '../../ui/form/Form';
import { UiInputLabel } from '../../ui/input-label/InputLabel';
import { UiButton } from '../../ui/button/Button';
import './Form.scss';

export const AddEditForm = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const { errorMsg, list } = useSelector((state) => state.project);

  const onSubmit = (data) => {
    if (!id) {
      dispatch(project.startAdd(data, history));
    } else {
      dispatch(project.startUpdate(id, data, history));
    }
  };

  useEffect(() => {
    if (id) {
      const project = list.find((project) => project.id == id);
      if (!project) history.push('/');

      setValue('name', project.name);
      setValue('description', project.description);
      setValue('manager', project.manager);
      setValue('assignedTo', project.assignedTo);
      setValue('status', project.status);
    }
  }, [id]);

  return (
    <div className="add-edit-form">
      <UiForm onSubmit={handleSubmit(onSubmit)}>
        <UiInputLabel>
          <label htmlFor="name">Project name</label>
          <input {...register('name', { required: true })} id="name" />
          <span>{errors.name && 'Project name required'}</span>
        </UiInputLabel>
        <UiInputLabel>
          <label htmlFor="description">Description</label>
          <input
            {...register('description', { required: true })}
            id="description"
          />
          <span>{errors.description && 'Description required'}</span>
        </UiInputLabel>
        <UiInputLabel>
          <label htmlFor="manager">Project manager</label>
          <select id="manager" {...register('manager', { required: true })}>
            <option>Ignacio Truffa</option>
            <option>Walt Cosani</option>
            <option>Gonzalo Flores :D</option>
          </select>
        </UiInputLabel>
        <UiInputLabel>
          <label htmlFor="assignedTo">Assgined to</label>
          <select
            id="assignedTo"
            {...register('assignedTo', { required: true })}
          >
            <option>Ignacio Truffa</option>
            <option>Walt Cosani</option>
            <option>Gonzalo Flores :D</option>
          </select>
        </UiInputLabel>
        <UiInputLabel>
          <label htmlFor="status">Status</label>
          <select {...register('status', { required: true })}>
            <option value={true}>Enabled</option>
            <option value={false}>Disabled</option>
          </select>
        </UiInputLabel>
        <div className={'ui-form__error ' + (errorMsg ? 'show' : '')}>
          {errorMsg}
        </div>
        <UiButton type="submit">
          {id ? 'Save changes' : 'Create project'}
        </UiButton>
      </UiForm>
    </div>
  );
};
