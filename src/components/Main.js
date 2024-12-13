import React, { useState, useEffect } from 'react';
import TodoCard from './TodoCard';
import TodoForm from './TodoForm';
import ProgressBar from './ProgressBar'; 
import {
  fetchTodos,
  fetchCategories,
  createTodo,
  createCategory,
  updateTodo,
  deleteTodo,
} from '../services/apiService';

const Main = () => {
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [addingCategory, setAddingCategory] = useState(false);
  const [newCategory, setNewCategory] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const initializeData = async () => {
      const todos = await fetchTodos();
      const categories = await fetchCategories();
      setTasks(todos);
      setCategories(categories);
    };
    initializeData();
  }, []);

  const addTask = async (e) => {
    e.preventDefault();
    if (!newTask) return;
    const newTodo = await createTodo({
      text: newTask,
      category: selectedCategory || 'Uncategorized',
    });
    setTasks([...tasks, newTodo]);
    setNewTask('');
  };

  const addCategory = async (e) => {
    e.preventDefault();
    if (!newCategory) return;
    const category = await createCategory({ name: newCategory });
    setCategories([...categories, category.name]);
    setAddingCategory(false);
    setNewCategory('');
  };

  const toggleTaskCompletion = async (id) => {
    const task = tasks.find((t) => t.id === id);
    const updatedTask = await updateTodo(id, { completed: !task.completed });
    setTasks(tasks.map((t) => (t.id === id ? updatedTask : t)));
  };

  const deleteTaskHandler = async (id) => {
    await deleteTodo(id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const getFilteredTasks = () => {
    let filteredTasks = tasks;
    if (filter === 'active') filteredTasks = filteredTasks.filter((task) => !task.completed);
    if (filter === 'completed') filteredTasks = filteredTasks.filter((task) => task.completed);
    if (filter === 'category') filteredTasks = filteredTasks.filter((task) => task.category === selectedCategory);
    if (showSearch && searchQuery) {
      filteredTasks = filteredTasks.filter((task) =>
        task.text.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return filteredTasks;
  };

  const completedTasksCount = tasks.filter((task) => task.completed).length;
  const totalTasksCount = tasks.length;

  return (
    <section className="vh-100 gradient-custom">
      <p
        className="h1 text-center mt-3 mb-4 pb-3 text-primary"
        style={{ paddingTop: '100px' }}
      >
        <i className="fas fa-check-square me-1"></i>
        <u>Alex Todo List</u>
      </p>
      <div className="container py-5 h-100">
        <TodoForm
          newTask={newTask}
          setNewTask={setNewTask}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
          addingCategory={addingCategory}
          setAddingCategory={setAddingCategory}
          newCategory={newCategory}
          setNewCategory={setNewCategory}
          addTask={addTask}
          addCategory={addCategory}
        />

        <ul className="nav nav-tabs mb-4 pb-2 d-flex align-items-center justify-content-between">
          <div className="d-flex">
            <li className="nav-item">
              <button
                className={`nav-link ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${filter === 'active' ? 'active' : ''}`}
                onClick={() => setFilter('active')}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${filter === 'completed' ? 'active' : ''}`}
                onClick={() => setFilter('completed')}
              >
                Completed
              </button>
            </li>
            <li className="nav-item">
              <select
                className="form-select nav-link"
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setFilter('category');
                }}
              >
                <option value="">Category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </li>
          </div>
          <li className="nav-item ms-auto">
            <button
              className="btn btn-secondary d-flex align-items-center"
              onClick={() => setShowSearch(!showSearch)}
            >
              <i className="bi bi-search"></i>
            </button>
          </li>
        </ul>

        {showSearch && (
          <div className="mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search todos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        )}
        <ProgressBar completed={completedTasksCount} total={totalTasksCount}/>
        <ul className="list-group mb-0">
          {getFilteredTasks().map((task) => (
            <TodoCard
              key={task.id}
              task={task}
              toggleTaskCompletion={toggleTaskCompletion}
              deleteTask={deleteTaskHandler}
              editTask={(id, text) => updateTodo(id, { text })}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Main;
