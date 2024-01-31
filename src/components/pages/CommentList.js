import React from 'react';

function CommentList({ comments, post }) {
  const filteredComments = comments.filter(comment => comment.post_id === post._id);

  return (
    <div>
      {filteredComments.length ? (
        <div className="">
          {filteredComments.map(comment => (
            <div className="post-cards" key={comment.id}>
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "20px",
                  }}
                >
                  <p>Post Id: {comment.post_id}</p>
                </div>
                <p>Comment: {comment.comment}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No comments for this post...</p>
      )}
    </div>
  );
}

export default CommentList;

