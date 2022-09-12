import './App.css';
import linkedinImg from '../src/linkedin.svg';
import rocket from '../src/rocket.png';
function App() {
    return (
        <section className="rr">
            <div className="App ">
                <header className="App-header">
                    <nav class=" hg navbar navbar-expand-lg navbar-light bg-dark">
                        <div className="container">
                            <a class="navbar-brand" href="#">
                                <h3 className="changeText">LiTt</h3>
                            </a>

                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item active">
                                    <a class="nav-link" href="#">
                                        <img src={linkedinImg} />{' '}
                                        <span class="sr-only">(current)</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
                <section className="hchange">
                    <div className="container itms">
                        <div className="agg">
                            <h1>
                                We're <span>Launching</span> Soon
                            </h1>
                        </div>
                    </div>
                    <img className="rocket" src={rocket} />
                </section>
            </div>
        </section>
    );
}

export default App;
