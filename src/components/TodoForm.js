import React from 'react';

const TodoForm = ({
  newTask,
  setNewTask,
  selectedCategory,
  setSelectedCategory,
  categories,
  addingCategory,
  setAddingCategory,
  newCategory,
  setNewCategory,
  addTask,
  addCategory,
}) => {
  return (
    <form
      className="d-flex justify-content-center align-items-center mb-4"
      onSubmit={addTask}
    >
      <div className="form-outline flex-fill">
        <input
          type="text"
          id="form2"
          className="form-control"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="New task..."
        />
      </div>
      {!addingCategory ? (
        <select
          className="form-select ms-2"
          value={selectedCategory}
          onChange={(e) => {
            if (e.target.value === 'add') {
              setAddingCategory(true);
              setSelectedCategory('');
            } else {
              setSelectedCategory(e.target.value);
            }
          }}
          style={{ width: '200px' }}
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
          <option value="add">Add Category</option>
        </select>
      ) : (
        <div className="d-flex ms-2">
          <input
            type="text"
            className="form-control"
            placeholder="New category..."
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            style={{ width: '200px' }}
          />
          <button className="btn btn-success ms-2" onClick={addCategory}>
            Add
          </button>
        </div>
      )}
      <button type="submit" className="btn btn-info ms-2">
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
