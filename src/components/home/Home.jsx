import React, { useEffect, useState } from "react";
import "./home.css";

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
	return <div>home</div>
};

export default Home;
