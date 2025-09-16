import { Reply } from "@/types/comments";
import React from "react";
import moment from "moment";

const ReplyList = ({ replies }: { replies: Reply[] }) => {
  return (
    <div className="ml-12 mt-4 border-l pl-4 space-y-4">
      {replies.map((reply, idx) => (
        <div key={idx} className="flex space-x-3">
          <img
            src={reply.authorImageUrl}
            alt={reply.author}
            className="w-10 h-10 rounded-full"
          />
          <div>
            {reply?.comment && <p>{reply.comment}</p>}

            <div className="text-xs text-gray-500">
              <strong>{reply.author}</strong>
              <p>{reply?.createdAt && moment(reply.createdAt).fromNow()}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReplyList;
