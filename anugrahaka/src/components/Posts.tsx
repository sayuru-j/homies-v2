import {
  DotsVerticalIcon,
  FaceIcon,
  HeartIcon,
  ImageIcon,
  KeyboardIcon,
  Share1Icon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";

type Post = {
  id: string; // Unique identifier for the post
  title: string; // Title/headline of the post
  content: string; // Main body/content of the post
  slug: string; // URL-friendly version of the title
  author: {
    // Author information
    id: string;
    name: string;
    avatar?: string;
  };
  status: "draft" | "published" | "archived"; // Current status of the post
  featured_image?: {
    // Optional featured image
    url: string;
    alt: string;
    caption?: string;
  };
  category: string; // Primary category/topic
  tags: string[]; // Array of related tags/keywords
  metadata: {
    // SEO and sharing metadata
    description: string;
    keywords: string[];
    og_image?: string;
  };
  timestamps: {
    // Important timestamps
    created_at: Date;
    updated_at: Date;
    published_at?: Date;
  };
  stats: {
    // Post statistics
    views: number;
    likes: number;
    comments: number;
    shares: number;
  };
  settings: {
    // Post configuration
    allow_comments: boolean;
    is_featured: boolean;
    is_premium?: boolean; // For premium/paywalled content
  };
  related_posts?: string[]; // IDs of related posts
};

type PostProps = Post;

const Post: React.FC = (props) => {
  return (
    <div className="bg-white w-full p-4 rounded-3xl space-y-3">
      <div className="flex items-center relative">
        <div className="flex items-center">
          <Image
            className="object-cover w-10 h-10 rounded-full"
            src={
              "https://media.gq-magazine.co.uk/photos/5d1396ffb6fee94ed7c9e909/master/pass/Straboy-GQ-25Nov16_b.jpg"
            }
            alt={"avatar"}
            width={100}
            height={100}
          />

          <div className="ml-2">
            <h2 className="text-sm font-semibold">Pop Maaluwa</h2>
            <p className="text-xs">3 hours ago</p>
          </div>

          <div className="absolute right-0">
            <DotsVerticalIcon />
          </div>
        </div>
      </div>

      <div className="text-sm">I love anime, imma weebu ❤️</div>

      <div className="w-full h-[30vh]">
        <Image
          className="object-cover w-full h-full rounded-xl"
          src={"/mock-data/weeb.jpg"}
          alt={"post-img"}
          width={1000}
          height={1000}
        />
      </div>

      <div className="flex items-center">
        <div className="w-2/5 flex items-center gap-3">
          <div className="flex items-center gap-1">
            <HeartIcon />
            <p className="text-xs">1</p>
          </div>
          <div className="flex items-center gap-1">
            <KeyboardIcon />
            <p className="text-xs">1</p>
          </div>
          <div className="flex items-center gap-1">
            <Share1Icon />
            <p className="text-xs">1</p>
          </div>
        </div>
        <div className="w-3/5 relative">
          <input
            placeholder="Comment your homie."
            className="bg-background p-2 text-xs w-full rounded-full !outline-none"
            type="text"
          />

          <div className="absolute right-2 top-2 flex items-center gap-1">
            <ImageIcon className="cursor-pointer" />
            <FaceIcon className="cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="h-[1px] w-full bg-black/5" />

      <div className="">
        <div className="flex items-start gap-1">
          <Image
            className="object-cover w-5 h-5 rounded-full"
            src={
              "https://media.gq-magazine.co.uk/photos/5d1396ffb6fee94ed7c9e909/master/pass/Straboy-GQ-25Nov16_b.jpg"
            }
            alt={"avatar"}
            width={100}
            height={100}
          />

          <div>
            <h2 className="text-xs font-semibold flex-grow-0">Bullbola Mahaththaya</h2>
            <p className="text-xs">Eww gay weeb shit!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

function Posts() {
  return (
    <div className="mt-4">
      <Post />
    </div>
  );
}

export default Posts;
