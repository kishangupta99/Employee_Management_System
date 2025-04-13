import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from './context/AuthProvider';
import Login from './components/Auth/Login';
import EmpolyeeDashboard from './components/Dashboard/EmpolyeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const authData = useContext(AuthContext);
  console.log(authData);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    
    if (loggedInUser) {
      try {
        const userData = JSON.parse(loggedInUser);
        if (userData.role && userData.data) { // Validate the structure of the stored data
          setUser(userData.role);
          setLoggedInUserData(userData.data);
        } else {
          localStorage.removeItem('loggedInUser'); // Clear invalid data
        }
      } catch (error) {
        console.error("Error parsing loggedInUser data:", error);
        localStorage.removeItem('loggedInUser'); // Clear corrupted data
      }
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
    } else if (authData) {
      const employee = authData.employees.find((e) => email === e.email && e.password === password);
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee); // Set the employee data
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }));
      } else {
        alert("Invalid Credentials");
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : (
        user === 'admin' ? (
          <AdminDashboard />
        ) : (
          user === 'employee' && <EmpolyeeDashboard data={loggedInUserData || {}} />
        )
      )}
    </>
  );
};

export default App;