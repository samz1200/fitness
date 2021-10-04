import react, { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableCell,
  Paper,
  TableRow,
  TableBody,
  Button,
  makeStyles,
} from "@material-ui/core";
import { getUsers, deleteUser } from "../../Service/api";
import { useHistory } from "react-router-dom";
import EditUser from "./EditUser";

const useStyles = makeStyles({
  table: {
    width: "90%",
    margin: "50px 0 0 50px",
  },
  thead: {
    "& > *": {
      fontSize: 20,
      background: "#000000",
      color: "#FFFFFF",
    },
  },
});

const AllUsers = () => {
  const history = useHistory();
  const [users, setUsers] = useState([]);
  const [showEditForm, setShowEditForm] = useState(false);
  const [currentUserID, setCurrentUserID] = useState();
  const classes = useStyles();

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
      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.thead}>
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
            <TableRow className={classes.row} key={user.id}>
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
