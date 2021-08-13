import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import tasks from './sample/tasks.json';
import Tasks from './components/Tasks';

class App extends Component {

    state = {
        tasks: tasks
    }

    render() {
        return <div>
            { this.state.tasks.map(e => 
                <p key={e.id}>
                    {e.title}-{e.descripton}-{e.done}-{e.id}
                    <Tasks/>
                </p>) 
            }
        </div>
    }
}

export default App;
