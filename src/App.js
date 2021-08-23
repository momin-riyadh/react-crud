import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Create from "./components/create";
import Read from "./components/read";
import Update from "./components/update";

function App() {
    return (
        <Router>
            <div className="App">
                <div className="main">

                    <h2 className="main-header">
                        React Crud Operations
                        <Link to="/create" style={{marginLeft: "30px"}}>
                            <i className="plus icon"/>
                        </Link>

                    </h2>

                    <div>
                        <Route exact path='/create' component={Create}/>
                    </div>
                    <div>
                        <Route exact path='/' component={Read}/>
                    </div>

                    <div>
                        <Route exact path='/update' component={Update}/>
                    </div>

                </div>
            </div>
        </Router>
    );
}

export default App;
