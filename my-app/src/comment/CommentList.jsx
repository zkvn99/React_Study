import React from "react";
import Comment from "./Comment"

const comments = [
    {
        name : "이민욱",
        comment : "첫 번째 댓글"
    },
    {
        name : "이민욱",
        comment : "두 번째 댓글"
    }
]
function CommentList(props) { // 컴포넌트 이름 짓기, 렌더링, 합성, 추출
    return (
        <div>
            <Comment name = "이민욱" comment = "컴포넌트 합성"/>
            <Comment name = "민욱이" comment = "컴포넌트 속성 추가"/>
            {comments.map((comment) => {
                return (
                    <Comment name = {comment.name} comment = {comment.comment}/>
                );
                })}
        </div>
    )
}

export default CommentList;