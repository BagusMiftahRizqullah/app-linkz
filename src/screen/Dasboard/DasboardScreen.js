import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function DasboardScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const dataAuth = useSelector((state) => state.userReducer.dasboardAuth);
  const dataUser = useSelector((state) => state.userReducer.user);
  useEffect(() => {
    // cekToken();
    GetDataAuth();
  }, []);

  // const cekToken = () => {
  //   if (dataUser) {
  //     return;
  //   } else {
  //     navigate("/");
  //   }
  // };

  const GetDataAuth = async () => {
    const endpoint = `http://localhost:3333/user/auth`;
    fetch(endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("dataLOGIN", data);
        dispatch({
          type: "SET_AUTH_DASBOARD",
          payload: data.data,
        });
      })
      .catch((error) => console.log(error));
  };

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

  console.log("dataAuth", dataAuth);
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
            {dataAuth?.map((person, index) => (
              <tr
                key={person.id}
                className="bg-gray-100 border-b border-gray-200"
              >
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{person.id_user}</td>
                <td className="px-4 py-2">{person.uid}</td>
                {/* <td className="px-4 py-2">{person.token}</td> */}
                <td className="px-4 py-2">{person.role}</td>
                <td className="px-4 py-2">{person.latestLogin}</td>
                <td className="px-4 py-2">{person.softdelete}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div>
      <div className="flex">
        <Sidebar>
          <div className="w-full">
            <PeopleTable people={people} />
          </div>
        </Sidebar>
      </div>
    </div>
  );
}

export default DasboardScreen;
