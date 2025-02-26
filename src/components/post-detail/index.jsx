import { useEffect, useState} from 'react';
import "./index.scss";
import {useParams} from 'react-router-dom';
// import postDetailMock from "../../mock-data/post-detail-mock";

export default props => {
    // let {id} = useParams();
    const [postDetail, setPostDetail] = useState({});

    useEffect(() => {
        const tempStr = window.localStorage.getItem("postDetail");
        const tempObj = JSON.parse(tempStr);
        setPostDetail(tempObj);
    }, []);
    
    return (
        <>
            <h3>{postDetail?.postTitle}</h3>
            <p>{postDetail?.postContent}</p>
        </>
    )
}