import React, { useEffect, useState } from "react";

function UserTable() {
  const [users, setUsers] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [page, setPage] = useState(1);

  const ITEMS_PER_PAGE = 5;

  useEffect(() => {
    async function loadUsers() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    }
    loadUsers();
  }, []);

  const sortedUsers = [...users].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.name.localeCompare(b.name);
    }
    return b.name.localeCompare(a.name);
  });

  const start = (page - 1) * ITEMS_PER_PAGE;
  const paginatedUsers = sortedUsers.slice(start, start + ITEMS_PER_PAGE);

  const totalPages = Math.ceil(users.length / ITEMS_PER_PAGE);

  return (
    <div style={{ padding: 20 }}>
      <button
        onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
        Sort by Name ({sortOrder})
      </button>

      <table border="1" cellPadding="8" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {paginatedUsers.map((u) => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: 20 }}>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </button>

        <span style={{ margin: "0 10px" }}>
          Page {page} / {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}

export default UserTable;
