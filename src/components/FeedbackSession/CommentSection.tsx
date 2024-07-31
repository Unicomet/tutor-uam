/**
 * This code was generated by Builder.io.
 */
import React from 'react';

const CommentSection: React.FC = () => {
  return (
    <section className="flex flex-col self-start px-4 py-3 ml-20 max-w-full text-base font-medium text-zinc-900 w-[480px]">
      <label htmlFor="comment" className="max-md:max-w-full">Leave a comment</label>
      <textarea
        id="comment"
        className="shrink-0 mt-2 h-36 rounded-lg border border-solid bg-slate-50 border-slate-300 max-md:max-w-full"
        aria-label="Leave a comment"
      />
    </section>
  );
};

export default CommentSection;