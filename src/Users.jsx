const users = [
  { id: 1, name: "Ali", age: 22 },
  { id: 2, name: "Sara", age: 25 },
  { id: 3, name: "Reza", age: 20 },
];
function UserCard ({name, age}) {
    return (
        <div>
            <h3>{name}</h3>
            <p>Age:{age}</p>
        </div>
    )   
}
function Users() {
    return (
        <div>
            <h2>users</h2>
            {users.map((user) =>
            <UserCard
            key = {user.id}
            name = {user.name}
            age =   {user.age}
            />
            )}
        </div>
    );
}
export default Users;