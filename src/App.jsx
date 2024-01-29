import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  addDoc,
  updateDoc
} from "firebase/firestore";
import { firestore } from "./firebase.config";

const App = () => {
  const [users, setUsers] = useState([]);
  const [userObj, setUserObj] = useState({ name: "", age: "" });
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    setLoading(true);
    const userCollection = collection(firestore, "users");

    getDocs(userCollection).then((res) => {
      let arr = res.docs.map((itm) => {
        return { ...itm.data(), id: itm.id };
      });

      setUsers(arr);
      setLoading(false);
    });
  }

  function deleteItem(id) {
    setLoading(true);
    const userCollection = collection(firestore, "users");
    const oneUser = doc(userCollection, id);
    deleteDoc(oneUser).then((res) => {
      getUsers();
    });
  }

  function save() {
    setLoading(true);
    const userCollection = collection(firestore, "users");

    if (currentUser === "") {
      addDoc(userCollection, userObj).then((res) => {
        getUsers();
      });
    } else {
      const oneUser = doc(userCollection, currentUser);
      updateDoc(oneUser, userObj).then((res) => {
        getUsers();
      });
      setCurrentUser("");
    }

    setUserObj({ name: "", age: "" });
  }

  function editItem(itm) {
    setCurrentUser(itm.id);
    delete itm.id;
    setUserObj(itm);
  }

  return (
    <>
      {loading ? (
        <div className="">
          <button
            className="btn btn-primary mx-auto d-block mt-3 w-50"
            type="button"
            disabled
          >
            <span
              className="spinner-grow spinner-grow-sm"
              aria-hidden="true"
            ></span>
            <span role="status">Loading...</span>
          </button>
        </div>
      ) : (
        <div className="p-2">
          <div className="p-3 card w-25 mb-4 _box">
            <input
              value={userObj.name}
              onChange={(e) => setUserObj({ ...userObj, name: e.target.value })}
              className="form-control mb-2"
              type="text"
              placeholder="name..."
            />
            <input
              value={userObj.age}
              onChange={(e) => setUserObj({ ...userObj, age: e.target.value })}
              className="form-control mb-2"
              type="number"
              placeholder="age..."
            />
            <button onClick={save} className="btn btn-dark">
              save
            </button>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((itm) => {
                return (
                  <tr key={itm.id}>
                    <td>{itm.name}</td>
                    <td>{itm.age}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteItem(itm.id)}
                      >
                        X
                      </button>
                      <button
                        className="btn btn-success"
                        onClick={() => editItem(itm)}
                      >
                        edit
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default App;
