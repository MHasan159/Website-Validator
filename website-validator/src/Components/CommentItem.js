
const CommentItem = ({ user, comment }) => {

    return(
        <>
            <h3 className="user">{user}</h3>
            <div>{comment}</div>

        </>
    )
}

export default CommentItem;