import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
        <Switch>
            <Route exact path="/Dojo-blog/">
              <Home />
            </Route>
            <Route exact path="/Dojo-blog/create">
              <Create />
            </Route>
            <Route exact path="/Dojo-blog/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;