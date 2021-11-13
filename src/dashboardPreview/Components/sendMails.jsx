import { useEffect, useState } from "react";
import { getUsers, sendallMailAddress } from "../../Service/api";

const Sendmails = () => {
  const [users, setUsers] = useState();
  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
  };

  const sendAllMails = async () => {
    var arr = [];
    users.map((item) => {
      arr.push(item.email);
    });
    await sendallMailAddress(arr);
  };

  return (
    <div>
      <button onClick={sendAllMails}>send mail to all users.</button>
    </div>
  );
};
export default Sendmails;
