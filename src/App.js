import './App.css';
import NavBar from './components/nav-bar';
import Footer from './components/footer';
import PostList from './components/post-list';

// 函数式组建
function App() {
  return(
    // 加上data-bs-theme配置项，bootstrap会切换dark主题
  <div className="App" data-bs-theme="dark">
    <NavBar></NavBar>
    <div>
      <PostList></PostList>
    </div>
    <Footer></Footer>
  </div>
  )
}

export default App;
