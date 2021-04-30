import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import projectActions from '../../../redux/project/actions';
import './List.scss';

export const List = ({}) => {
  const { list } = useSelector((state) => state.project);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className="list">
      <div className="list__table">
        <div className="list__table-header">
          <div>Project Info</div>
          <div>Project Manager</div>
          <div>Assigned to</div>
          <div>Status</div>
          <div className="action">Action</div>
        </div>
        <div className="list__table-info">
          {list.map((project) => (
	    <div key={project.id} className="list__table-project">
              <div className="name">{project.name}</div>
              <div className="manager">{project.manager}</div>
              <div className="assigned-to">{project.assignedTo}</div>
              <div className="status">
                {project.status ? (
                  <div className="status__true">Enabled</div>
                ) : (
                  <div className="status__false">Disabled</div>
                )}
              </div>
              <div className="action">
                <button
                  data-tip
                  data-for={`actions-${project.id}`}
                  data-event="click"
                  data-event-off="blur"
                >
		  <i className="fas fa-ellipsis-v"></i>
                </button>
                <ReactTooltip
                  backgroundColor="transparent"
                  clickable
                  id={`actions-${project.id}`}
                  className="operation__tooltip-wrapper"
                >
                  <div className="operation-item__tooltip">
                    <button
		      onClick={() => dispatch(projectActions.startRemove(project))}
                    >
                      Eliminar
                    </button>
                    <button
		      onClick={() => history.push(`/edit/${project.id}`)}
                    >
                      Editar
                    </button>
                  </div>
                </ReactTooltip>{' '}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
