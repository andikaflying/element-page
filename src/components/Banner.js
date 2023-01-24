import React, { useState, useEffect } from "react";

const Banner = () => {
  const [header, setHeader] = useState("Homepage");
  const [paragraph, setParagraph] = useState("Sed lorem ipsum sed dolor nullam adipiscing");
	
  return (
    <section id="banner">
		<div className="inner">
			<h2>{header}</h2>
			<p>{paragraph}</p>
			<ul className="actions">
				<li><a href="#one" className="button big scrolly">Learn More</a></li>
			</ul>
		</div>
	</section>
  );
};

export default Banner;