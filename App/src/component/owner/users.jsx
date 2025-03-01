import axios from "axios";
import { Card, Table } from "flowbite-react";
import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    try {
      const data = await axios.get("http://localhost:3000/admin");
      setUsers(data.data);
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <h1 className="font-franklin text-4xl  text-[#232931] mb-9">Users</h1>
      {/* <div className="bg-[#EEEEEE] rounded-xl mt-5 min-h-[80vh]"></div> */}
      <Card className="max-w ">
        <div className="flex justify-between items-center ">
          <h1 className="font-semibold font-unica">Users List</h1>
          <button className="flex justify-between py-2 px-4 gap-5 items-center bg-[#4ECCA3] rounded-2xl">
            <img src="/artwork_component/Vector (1).svg" alt="" className="h-4" />
            <span className="font-unica text-white mt-1">Add</span>
          </button>
        </div>
        <div className="overflow-x-auto md:hidden ">
          {users.map((items) => {
            return (
              <>
                <div className="flex flex-col gap-3">
                  <div className="flex gap-5">
                    <div>
                      <h1 className="font-semibold">Full Name</h1>
                      <p>{items.name}</p>
                      <h1 className="font-semibold mt-3">Role</h1>
                      <p>{items.role}</p>
                    </div>
                    <div>
                      <h1 className="font-semibold">Username</h1>
                      <p>{items.username}</p>
                      <h1 className="font-semibold mt-3">Password</h1>
                      <p>{"*".repeat(items.password.length)}</p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div></div>
                    <div></div>
                  </div>

                  <div className="flex gap-3 items-center">
                    {/* Pencil Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                    </svg>

                    {/* Trash Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-4 h-4">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>

                    {/* eye icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <hr className="my-3" />
                </div>
              </>
            );
          })}
        </div>

        <div className="overflow-x-auto hidden md:block">
          <Table hoverable>
            <Table.Head className="">
              <Table.HeadCell>Full Name</Table.HeadCell>
              <Table.HeadCell>Username</Table.HeadCell>
              <Table.HeadCell>Role</Table.HeadCell>
              <Table.HeadCell>Password</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Action</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {users.map((items) => {
                return (
                  <Table.Row key={items.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{items.name}</Table.Cell>
                    <Table.Cell>{items.username}</Table.Cell>
                    <Table.Cell>{items.role}</Table.Cell>
                    <Table.Cell>{"*".repeat(items.password.length)}</Table.Cell>
                    <Table.Cell className="flex gap-3 items-center">
                      {/* Pencil Icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                      </svg>

                      {/* Trash Icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-4 h-4">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>

                      {/* eye icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </div>
      </Card>
    </>
  );
}
