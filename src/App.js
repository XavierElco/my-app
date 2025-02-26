import NavBar from './components/nav-bar';
import Footer from './components/footer';
import PostList from './components/post-list';
import WritePost from './components/write-post';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.scss';
import PostDetail from './components/post-detail';

function App() {
  return (
    <Router>
      {/*当我们加上了 data-bs-theme 配置项时，Bootstrap 就会启用 dark 主题。 var ... */}
      <div className="App" data-bs-theme="dark">
        <NavBar></NavBar>
        <div className='container main-container'>
          <Routes>
            <Route path='/' element={<PostList></PostList>}></Route>
            <Route path='/post-list' element={<PostList></PostList>}></Route>
            <Route path='/write-post' element={<WritePost></WritePost>}></Route>
            <Route path='/post-detail/:id' element={<PostDetail></PostDetail>}></Route>
          </Routes>
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}


export default App;
