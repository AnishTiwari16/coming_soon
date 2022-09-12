import logo from './logo.svg';
import './App.css';
import linkedinImg from '../src/linkedin.svg';
function App() {
    return (
        <section className="rr">
            <div className="App ">
                <header className="App-header">
                    <nav class=" hg navbar navbar-expand-lg navbar-light bg-dark">
                        <div className="container">
                            <a class="navbar-brand" href="#">
                                Navbar
                            </a>
                            <button
                                class="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div
                                class="collapse navbar-collapse"
                                id="navbarSupportedContent"
                            >
                                <ul class="navbar-nav ml-auto">
                                    <li class="nav-item active">
                                        <a class="nav-link" href="#">
                                            <img src={linkedinImg} />{' '}
                                            <span class="sr-only">
                                                (current)
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
                <section className="hchange">
                    <div className="container">
                        <h1>Coming Soon</h1>
                    </div>
                </section>
            </div>
        </section>
    );
}

export default App;
