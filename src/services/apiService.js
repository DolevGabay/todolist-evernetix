const BASE_URL = 'http://localhost:5001';

export const fetchTodos = async () => {
  const response = await fetch(`${BASE_URL}/todos`);
  return response.json();
};

export const fetchCategories = async () => {
  const response = await fetch(`${BASE_URL}/categories`);
  return response.json();
};

export const createTodo = async (todo) => {
  const response = await fetch(`${BASE_URL}/todos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo),
  });
  return response.json();
};

export const createCategory = async (category) => {
  const response = await fetch(`${BASE_URL}/categories`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(category),
  });
  return response.json();
};

export const updateTodo = async (id, updates) => {
  const response = await fetch(`${BASE_URL}/todos/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates),
  });
  return response.json();
};

export const deleteTodo = async (id) => {
  const response = await fetch(`${BASE_URL}/todos/${id}`, {
    method: 'DELETE',
  });
  return response.json();
};
