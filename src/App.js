import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from './components/nav';
import TopNav from "./components/topnav";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";

import Box from '@mui/material/Box';
import { Grid } from "@mui/material";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Box>
          <TopNav/>
          <Grid container >
            <Grid xs={0} md={2}>
              <Nav/>
            </Grid>
            <Grid xs={0}md={10}>
              <Routes>
                <Route path="/"element={<Dashboard/>} />
                <Route path="/Users"element={<Users/>} />
              </Routes>
            </Grid>
          </Grid>
        </Box>
      </BrowserRouter>
    </div>
  );
}

export default App;
