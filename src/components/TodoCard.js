import React, { useState } from 'react';

const TodoCard = ({ task, toggleTaskCompletion, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleSaveEdit = () => {
    editTask(task.id, editedText);
    setIsEditing(false);
  };

  return (
    <li
      className="list-group-item d-flex justify-content-between align-items-center border-0 mb-2 rounded"
      style={{ backgroundColor: '#f4f6f7' }}
    >
      <div className="d-flex align-items-center">
        <input
          className="form-check-input me-2"
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTaskCompletion(task.id)}
        />
        {isEditing ? (
          <input
            type="text"
            className="form-control me-2"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
        ) : (
          <>
            {task.completed ? <s>{task.text}</s> : task.text}
            <span className="badge bg-primary ms-2">{task.category}</span>
          </>
        )}
      </div>

      <div>
        {isEditing ? (
          <button className="btn btn-success btn-sm me-2" onClick={handleSaveEdit}>
            Save
          </button>
        ) : (
          <button className="btn btn-warning btn-sm me-2" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        )}
        <button className="btn btn-danger btn-sm" onClick={() => deleteTask(task.id)}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoCard;
