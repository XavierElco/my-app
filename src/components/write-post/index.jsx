import {useState} from 'react';

export default props=>{

    const [postDetail,setPostDetail] = useState({
        title:"",
        content:""
    });

    const handleChange = e => {
        // 获取用户输入
        console.log("change");
        const name = e.target.name;
        const value = e.target.value;

        // 更新状态
        setPostDetail({
            ...postDetail, // 展开原对象
            [name]:value // 新值覆盖老值
        });
    }

    const handleSubmit = (e)=>{
        console.log("submmit");
        // 1. 阻止表单默认提交行为
        e.preventDefault();

        // 2. 获取表单数据
        // const form = e.target;
        // const formData = new FormData(form);

        // const data=Object.fromEntries(formData.entries()); //整理成POJO
        // console.log(data);
        console.log(postDetail);

        // 3. 数据校验（minLength, maxLength, text, number reguler expression...)
        //    自己写代码校验，失败就提示用户，不提交数据
        
        // 4. 提交数据

    }


    // 手动写代码校验表单数据
    const validateForm = () => {
        let isValid = true;

        const {title, content}=postDetail;

        if (title.length<2 || title.length>32){
            isValid = false;
        }
        if (content.length>140){
            isValid = false;
        }

        return isValid;
    }



    return(
        <div className="row">
            <div className="col-md-12">
                <form noValidate onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">标题：</label>
                        <input
                            name="title" 
                            type="text" 
                            className="form-control" 
                            placeholder=" 请输入标题，2-32个字符。"
                            value={postDetail.title}
                            onChange={handleChange}/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">内容：</label>
                        <textarea 
                            name="content"
                            className="form-control" 
                            rows="10" 
                            placeholder="请输入内容，最长140个字符。"
                            value={postDetail.content}
                            onChange={handleChange}>
                        </textarea>
                    </div>

                    <button 
                        type="submit" 
                        className="btn btn-primary"
                        onClick={validateForm}>
                        提交
                    </button>
                </form>
            </div>
        </div> 
    )
}