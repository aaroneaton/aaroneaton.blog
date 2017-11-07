import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';

import Bio from '../components/Bio';
import { rhythm } from '../utils/typography';

class BlogIndex extends React.Component {
	render() {
		const siteTitle = get(this, 'props.data.site.siteMetadata.title');
		const posts = get(this, 'props.data.allMarkdownRemark.edges');

		return (
			<div>
				<Helmet title={siteTitle}>
					<link rel="icon" type="image/png" href={'./favicon.png'} sizes="16x16" />
					<link rel="icon" type="image/png" href={'./favicon-32x32.png'} sizes="32x32" />
					<link rel="icon" type="image/png" href={"./favicon-128x128.png"} sizes="128x128" />
					<link rel="icon" type="image/png" href={"./favicon-96x96.png"} sizes="96x96" />
					<link rel="icon" type="image/png" href={"./favicon-196x196.png"} sizes="196x196" />
				</Helmet>
				<Bio />
				{posts.map(post => {
					if (post.node.path !== '/404/') {
						const title =
							get(post, 'node.frontmatter.title') ||
							post.node.path;
						return (
							<div key={post.node.frontmatter.path}>
								<h3
									style={{
										marginBottom: rhythm(1 / 4),
									}}
								>
									<Link
										style={{ boxShadow: 'none' }}
										to={post.node.frontmatter.path}
									>
										{title}
									</Link>
								</h3>
								<small>{post.node.frontmatter.date}</small>
								<p
									dangerouslySetInnerHTML={{
										__html: post.node.excerpt,
									}}
								/>
							</div>
						);
					}
					return null;
				})}
			</div>
		);
	}
}

export default BlogIndex;

export const pageQuery = graphql`
	query IndexQuery {
		site {
			siteMetadata {
				title
			}
		}
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
			edges {
				node {
					excerpt
					frontmatter {
						path
						date(formatString: "DD MMMM, YYYY")
					}
					frontmatter {
						title
					}
				}
			}
		}
	}
`;
