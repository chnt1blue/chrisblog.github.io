import React, { useEffect, useState } from "react";
import rehypeRaw from "rehype-raw";
import gfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import { useRequestAnswer } from "../components/chatgpt/requestAnswer";
import { Link } from "react-router-dom";

interface Post {
  title: string;
  content: string;
}

const posts: Post[] = [
  {
    title: "Hello World",
    content: "This is my first blog post!",
  },
  {
    title: "My Second Post",
    content: "This is the content of my second blog post.",
  },
];

const Home: React.FunctionComponent = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>Home1</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <Link to="/gpt">gpt</Link>
          </li>
        </ul>
      </nav>

      <div className="content">
        <div className="posts">{/* ... */}</div>

        <aside>
          <h3>Recent Posts</h3>
          <ul>
            {posts.map((post) => (
              <li key={post.title}>
                <a href="#">{post.title}</a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default Home;
