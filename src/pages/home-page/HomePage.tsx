import React from "react";

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

const HomePage: React.FunctionComponent = () => {
  return (
    <div className="chris-page-home">
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

export default HomePage;
