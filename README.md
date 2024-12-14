# **Alex Todo List**

A Todo List application built with React and Node.js, designed to efficiently manage tasks with categories, search functionality, and a dynamic progress bar.

---

## **Setup**

1. **Start the Application**
   - Run the following command in the root directory:
        ```bash
     npm install
     ```
     ```bash
     npm start
     ```
   - This will start both the frontend and backend servers.

2. **Access the Application**
   - Open your browser and navigate to:
     ```
     http://localhost:3000
     ```

---

## **Implemented Features**

### **Core Features**
- **Add Tasks:**
  - Create new tasks with a title and an optional category.
- **Task Management:**
  - Mark tasks as completed or active.
  - Edit and delete existing tasks.
- **Task Filtering:**
  - Filter tasks by `All`, `Active`, `Completed`, or specific categories.
- **Search:**
  - Search tasks by title.

### **Bonus Feature**
- **Progress Bar:**
  - Displays the percentage of completed tasks out of the total tasks.
  - Changes color dynamically based on the percentage:
    - **Red:** 0–30% completed.
    - **Orange:** 31–60% completed.
    - **Green:** 61–100% completed.

---

## **Future Improvements**

With more time, the following improvements could be added:

- **User Authentication:**
  - Allow multiple users to manage their own tasks.

- **Database Integration**
  - Establish a connection between the server and a database, such as MySQL, to manage relationships between users, tasks, and categories.

---


