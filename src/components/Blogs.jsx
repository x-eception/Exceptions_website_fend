// import React from 'react';
// import '../css/Blogs.css';

// export default function Blogs() {
//   const blogPosts = [
//     {
//   title: 'Why MERN Stack is Perfect for Startups',
//   summary: 'Explore how the MERN stack enables faster development and easier scaling for modern startups.',
//   link: 'https://exceptionz13.blogspot.com/2025/06/why-mern-stack-is-perfect-for-startups.html',
//   image: '/images/mern-banner.png' // make sure this is placed in public/images/
// }
// ,
//     {
//       title: 'Getting Started with AWS in 2025',
//       summary: 'A quick guide for deploying your first cloud app on AWS.',
//       link: 'https://exceptionz13.blogspot.com/2024/06/getting-started-with-aws-in-2025.html'
//     },
//     {
//       title: 'Digital Marketing Trends to Watch',
//       summary: 'From AI-powered ads to micro-influencers, stay ahead with this year’s top marketing insights.',
//       link: 'https://exceptionz13.blogspot.com/2024/05/digital-marketing-trends-2025.html'
//     },
//   ];

//   return (
//     <section id="blogs">
//       <h2>LatestBlogs</h2>
//       <div className="blog-list">
//         {blogPosts.map((post, index) => (
//           <div className="blog-card" key={index}>
//             <h3>{post.title}</h3>
//             <p>{post.summary}</p>
//             <a href={post.link} target="_blank" rel="noopener noreferrer">Read More →</a>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import React from 'react';
import '../css/Blogs.css';

export default function Blogs() {
  const blogPosts = [
    {
      title: 'Why MERN Stack is Perfect for Startups',
      summary: 'Explore how the MERN stack enables faster development and easier scaling for modern startups.',
      link: 'https://exceptionz13.blogspot.com/2025/06/why-mern-stack-is-perfect-for-startups.html',
      image: '/images/ChatGPT Image Jun 25, 2025, 01_02_18 PM.png' // Ensure image is inside public/images/
    },
    {
      title: 'Getting Started with AWS in 2025',
      summary: 'A quick guide for deploying your first cloud app on AWS.',
      link: 'https://exceptionz13.blogspot.com/2025/06/getting-started-with-aws-in-2025.html',
      image: '/images/aws_banner.png'
    },
    {
  title: 'Digital Marketing Trends to Watch',
  summary: 'From AI-powered ads to micro-influencers, stay ahead with this year’s top marketing insights.',
  link: 'https://exceptionz13.blogspot.com/2025/06/digital-marketing-trends-to-watch.html',
  image: '/images/digital_market.png' // ✅ Ensure this image exists in public/images/
},

  ];

  return (
    <section id="blogs">
      <h2>LatestBlogs</h2>
      <div className="blog-list">
        {blogPosts.map((post, index) => (
          <div className="blog-card" key={index}>
            {/* ✅ Show image if present */}
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className="blog-image"
              />
            )}
            <h3>{post.title}</h3>
            <p>{post.summary}</p>
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              Read More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
