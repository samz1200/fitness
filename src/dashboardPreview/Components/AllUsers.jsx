import react, { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableCell,
  Paper,
  TableRow,
  TableBody,
  Button,
} from "@material-ui/core";
import { getUsers, deleteUser } from "../../Service/api";
import { useHistory } from "react-router-dom";
import EditUser from "./EditUser";



const AllUsers = () => {
  const history = useHistory();
  const [users, setUsers] = useState([]);
  const [showEditForm, setShowEditForm] = useState(false);
  const [currentUserID, setCurrentUserID] = useState();
  

  useEffect(() => {
    getAllUsers();
  }, [showEditForm]);

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };

  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
  };

  return (
    <>
      <Table >
        <TableHead>
          <TableRow >
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Referral</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow  key={user.id}>
              <TableCell>{user._id}</TableCell>{" "}
              {/* change it to user.id to use JSON Server */}
              <TableCell>{`${user.fName} ${user.lName}`}</TableCell>
              <TableCell>{user.referral}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.pNumber}</TableCell>
              <TableCell>
                <Button
                  color="primary"
                  variant="contained"
                  style={{ marginRight: 10 }}
                  // component={Link}
                  // to={`/edit/${user._id}`}
                  onClick={() => {
                    setCurrentUserID(user._id);
                    setShowEditForm(true);
                  }}
                >
                  Edit
                </Button>{" "}
                {/* change it to user.id to use JSON Server */}
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={() => deleteUserData(user._id)}
                >
                  Delete
                </Button>{" "}
                {/* change it to user.id to use JSON Server */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {showEditForm && currentUserID ? (
        <EditUser id={currentUserID} setShowEditForm={setShowEditForm} />
      ) : (
        ""
      )}
    </>
  );
};

export default AllUsers;
