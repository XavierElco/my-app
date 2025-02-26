import React, {useState} from "react"
import "./index.scss"
import postListMock from "../../mock-data/post-list-mock";
import { useNavigate } from "react-router-dom";



export default props => {

    const [postList, setPostList] = useState([...postListMock]);
    const navigate = useNavigate();

    return(
        <div className="post-list-container">
            {
                postList.map(
                    item => {
                        return (
                            <div className="card post-item" style={{width: "18rem"}} key={item.id}>
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
                                <div className="card-body">
                                    <h5 className="card-title">{item.postTitle}</h5>
                                    <p className="card-text">{item.postContent}</p>
                                    <a href="#" className="btn btn-primary" onClick={
                                        ()=>{
                                            // 也可以通过window.localstorage来传递复杂的对象
                                            // localStreage里不要放很大的数据（最好不要超过10M）
                                            // userID， Password， Token等敏感数据不能放在localstorage里
                                            window.localStorage.setItem("postDetail", JSON.stringify(item))
                                            navigate(`/post-detail/${item.id}`); 
                                        }
                                    }>详情</a>
                                </div>
                            </div>
                        )
                    }
                )
                
            }
            
        </div>
    )
}