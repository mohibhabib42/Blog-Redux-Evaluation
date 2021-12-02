import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import Blogs from "./Screens/Blogs"
import Blog from "./Screens/Blog"

import { Box } from "@mui/material"

function App() {
  return (
    <Router>
      <Box className="App">
        
        <Switch>

          <Route exact path="/" component={Blogs } />
          <Route path="/Blog" component={Blog } />
        
        </Switch>

      </Box>
    </Router>
  );
}

export default App;
