import { CommentSec } from "@/components/modules/post_single/commentSec";
import { Postcontent } from "@/components/modules/post_single/post_content";

import { getPostById } from "@/services/postService";

export default async function SinglePostPage({
  params,
}: {
  params: { postId: string };
}) {
  const { postId } = await params;

  const post = await getPostById(postId);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <Postcontent post={post} />
      <CommentSec commentdata={post.Comment} postId={postId} />
    </div>
  );
}
