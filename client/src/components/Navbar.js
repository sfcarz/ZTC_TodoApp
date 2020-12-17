import '../App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from '../App';
import { useSelector } from 'react-redux'

function App() {
    const { isAuthenticated } = useSelector(state => state.user);

  return (
    <div className="page">
    <Layout fixedHeader>
    <Header className="header-color" title={<Link style={{textDecoration: 'none', color: isAuthenticated ? 'white' : 'red'}} to="/">ZWTC ToDo App</Link>} scroll >
            <Navigation>
                <Link to="/signIn">Sign In</Link>
                <Link to="/signUp">Sign Up</Link>
                {/* <Link to="/component">ToDo</Link> */}
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">ZWTC ToDo App</Link>}>
            <Navigation>
                <Link to="/signIn">Sign In</Link>
                <Link to="/signUp">Sign Up</Link>
                {/* <Link to="/component">ToDo</Link> */}
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
    </div>
    );
}

export default App;
