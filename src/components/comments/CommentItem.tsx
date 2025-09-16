import { Comment } from '@/types/comments'
import React from 'react'
import ReplyForm from './ReplyForm';
import ReplyList from './ReplyList';
import moment from "moment";

interface CommentItemProps {
    comment: Comment;
    isReplying: boolean;
    onReplyClick: () => void;
    onReplySubmit: (content: string) => void
    isSubmitting: boolean;
}

const CommentItem = ({comment, isReplying, onReplyClick, onReplySubmit, isSubmitting}: CommentItemProps) => {

    // console.log(comment.authorImageUrl)
  return (
    <div className='mb-6'>
        <div className='flex items-start space-x-4'>
            <img src={comment.authorImageUrl} alt={comment.author} className='w-12 h-12 rounded-full' />
            <div>
                <p>{comment.content}</p>
                <div className='text-sm text-gray-600'>
                    <strong>{comment.author}</strong>
                    <p>{comment.createdAt && moment(comment.createdAt).fromNow()}</p>
                </div>
                <button onClick={onReplyClick} className='text-sm text-blue-500 hover:underline mt-1 cursor-pointer'>
                    {isReplying ? "Cancel" : "Reply"}
                </button>
            </div>
        </div>
        {
            comment?.replyText && <ReplyList replies ={comment.replyText}/>
        }

        {
            isReplying && (
                <ReplyForm 
                onSubmit={onReplySubmit}
                isSubmitting={isSubmitting}
                placeholder={`Replying to ${comment.author}....`}
                />
            )
        }
    </div>
  )
}

export default CommentItem