import { useState } from "react";
import SearchFilter from "./SearchFilter";

const users = [
  { id: 1, name: "Ali", age: 22 },
  { id: 2, name: "Sara", age: 25 },
  { id: 3, name: "Reza", age: 20 },
];

function UserCard({ name, age }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Age: {age}</p>
    </div>
  );
}

function Users() {
  const [search, newSearch] = useState("");

  const filteredUsers = users.filter((user) =>{
    return user.name.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div>
      <SearchFilter
        search={search}
        newSearch={newSearch}
      />

      <h2>Users</h2>

      {filteredUsers.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          age={user.age}
        />
      ))}
    </div>
  );
}

export default Users;