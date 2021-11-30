import react, { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableCell,
  Paper,
  TableRow,
  TableBody,
  Button,

  FormGroup,
  Typography,
  FormControl,
  InputLabel,
  Input,
} from "@material-ui/core";
import { getUsers, deleteUser } from "../../Service/api";
import { useHistory } from "react-router-dom";
import EditUser from "./EditUser";



const AllUsers = () => {
  const history = useHistory();
  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState([]);
  const [value, setValue] = useState([]);
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
    setTotalUsers(response.data);
  };

  const searchField = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = users.filter((user) => {
        return user.fName.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setUsers(results);
    } else {
      setUsers(totalUsers);
      // If the text field is empty, show all users
    }

    setValue(keyword);
  };

  return (
    <>
      <FormGroup >
        <FormControl>
          <InputLabel htmlFor="my-input">Search by Name</InputLabel>
          <Input
            onChange={(e) => searchField(e)}
            name="option"
            value={value}
            id="my-input"
            aria-describedby="my-helper-text"
          />
        </FormControl>
      </FormGroup>
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
          {users.length > 0 ? (
            users?.map((user) => (
              <TableRow  key={user.id}>
                <TableCell>{user._id}</TableCell>
                {/* change it to user.id to use JSON Server */}
                <TableCell>{`${user.fName} ${user.lName}`}</TableCell>
                <TableCell>{user.referral}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.pNumber}</TableCell>
                <TableCell>
                  <Button
                    color="primary"
                    variant="contained"
                    style={{ marginRight: 10, width: "100%" }}
                    // component={Link}
                    // to={`/edit/${user._id}`}
                    onClick={() => {
                      setCurrentUserID(user._id);
                      setShowEditForm(true);
                      window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
                    }}
                  >
                    Edit
                  </Button>
                  {/* change it to user.id to use JSON Server */}
                  <Button
                    color="secondary"
                    variant="contained"
                    style={{ width: "100%", marginTop: "7px" }}
                    onClick={() => deleteUserData(user._id)}
                  >
                    Delete
                  </Button>
                  {/* change it to user.id to use JSON Server */}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <h2>No user Found..!</h2>
          )}
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
