import React, { useEffect, useState } from "react";
import "./home.css";
import { request } from "graphql-request";

const BlogPostCard = ({ content, date, image, slug, title }) => (
	<div  key={slug}>
		<div>
			<h3>{title}</h3>
			<h3>{date}</h3>
		</div>
		<img src={image[0].url} />
		<p>{content.text}</p>
	</div>
);

const Home = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			const { blogPosts } = await request(
				"https://api-eu-west-2.hygraph.com/v2/cl674n3q8c72a01t5ctq37qdw/master",
				`
        {
            blogPosts(orderBy: publishedAt_ASC) {
              content {
                text
              }
              date
              slug
              title
              image {
                url
              }
            }
          }
    `
			);

			setPosts(blogPosts);
		};

		fetchPosts();
	}, []);
	console.log(posts);

	return <div style={{width:'80%'}}>{posts.map(BlogPostCard)}</div>;
};

export default Home;
