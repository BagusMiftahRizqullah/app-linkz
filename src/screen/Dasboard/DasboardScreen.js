import React from "react";
import Sidebar from "../../components/Sidebar";
function DasboardScreen() {
  const people = [
    {
      id_user: 6,

      UID: "UID1233211233",
      token:
        "$argon2id$v=19$m=65536,t=3,p=4$SZUfE63xv4UQvD8eOHsO0w$3tNjMqe/W2IsG5X8UJ6/UjVDvuI0iU+QSt/0xMQS3FI",
      age: 12,
      Role: "SUPER_ADMIN",
      lates_login: "2022-12-12 12:12:12",
      soft_delete: "2022-12-12 12:12:12",
      status: "ACTIVE",
    },
    {
      id_user: 6,

      UID: "UID1233211233",
      token:
        "$argon2id$v=19$m=65536,t=3,p=4$SZUfE63xv4UQvD8eOHsO0w$3tNjMqe/W2IsG5X8UJ6/UjVDvuI0iU+QSt/0xMQS3FI",
      age: 12,
      Role: "SUPER_ADMIN",
      lates_login: "2022-12-12 12:12:12",
      soft_delete: "2022-12-12 12:12:12",
      status: "ACTIVE",
    },
    // Add more people as needed
  ];

  const PeopleTable = ({ people }) => {
    return (
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">No</th>
              <th className="px-4 py-2">Id User</th>
              <th className="px-4 py-2">UID</th>
              {/* <th className="px-4 py-2">Token</th> */}
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Lates Login</th>
              <th className="px-4 py-2">Soft Delete</th>
            </tr>
          </thead>
          <tbody>
            {people.map((person, index) => (
              <tr
                key={person.id}
                className="bg-gray-100 border-b border-gray-200"
              >
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{person.id_user}</td>
                <td className="px-4 py-2">{person.UID}</td>
                {/* <td className="px-4 py-2">{person.token}</td> */}
                <td className="px-4 py-2">{person.Role}</td>
                <td className="px-4 py-2">{person.lates_login}</td>
                <td className="px-4 py-2">{person.soft_delete}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div>
      <div className="flex row">
        <Sidebar />
        <div className="w-full">
          <PeopleTable people={people} />
        </div>
      </div>
    </div>
  );
}

export default DasboardScreen;
