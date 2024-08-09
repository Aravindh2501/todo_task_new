READ THE FULL REQUIREMENT FIRST. DO THE APPLICATION WITH GOOD UI AND UX.

Task: Create an enhanced "Todo List" application with the following features:

1. Add new todo items
2. Mark todo items as complete
3. Delete todo items
4. Filter todo items (All, Active, Completed)
5. Store todo items in local storage
6. Categorize todos (e.g., work, personal, shopping)
7. Set due dates for todos
8. Search functionality
9. Implement dark mode using React context
10. Use custom hooks for better code organization
11. Implement basic form validation

Application should

1. Use custom hook `useTodos` for managing todo state and operations.
2. Incorporates the `ThemeContext` for dark mode functionality.
3. It includes new components like `SearchBar` and `CategoryFilter`.
4. Implement form validation in `AddTodoForm` using a library react-hook-form.
5. Implement keyboard shortcuts for common actions (e.g., adding a new todo, toggling dark mode)
6. Use the `useCallback` and `useMemo` hooks to optimize performance where appropriate.

You'll need to create the following components and files at least:

1. `ThemeContext.js`: Implement a context for managing the theme state.
2. `hooks/useTodos.js`: Create a custom hook for todo management logic.
3. `TodoItem.js`: A component for rendering individual todo items.
4. `AddTodoForm.js`: A form component for adding new todos with categories and due dates.
5. `SearchBar.js`: A component for the search functionality.
6. `CategoryFilter.js`: A component for filtering todos by category.

Note:

1. Please mention your name and github project url at the footer of the application
2. Host your application in netlify
3. Share netlify application url with us
