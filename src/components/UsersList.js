import { useEffect, useState } from "react";

const UsersList = () => {
  const [userList, setUserList] = useState([]);
  const [filterist, setFilterList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchUsers();
  }, [searchText]);

  const fetchUsers = async () => {
    console.log("sdfsdf");
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/users");
      const json = await data.json();
      setUserList(json);
      setFilterList(json);
    } catch (error) {
      throw console.error("Users API Failed");
    }
  };

  const handleChange = (searchText) => {
    const filterArr = userList.filter((user) =>
      searchText.length > 0
        ? user.name.toLowerCase().includes(searchText.toLowerCase())
        : userList
    );

    setFilterList(filterArr);
  };

  if (userList.length === 0) return <p>User not found</p>;

  return (
    <div>
      <div>
        <input
          type="text"
          value={searchText}
          name="search"
          onChange={(e) => {
            setSearchText(e.target.value);
            handleChange(e.target.value);
          }}
        />
        <button onClick={() => handleChange(searchText)}>Search</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {filterist.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
