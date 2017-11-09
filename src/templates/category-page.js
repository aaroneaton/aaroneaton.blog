import React, { Component } from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import { rhythm } from '../utils/typography';

export default class CategoryTemplate extends Component {
    render() {
        const {pathContext, data} = this.props;
        const {category} = pathContext;
        const posts = data.allMarkdownRemark.edges;

        return (
            <div>
                <h2>{`On ${category.toLowerCase()} matters:`}</h2>
                {posts.map(post => {
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
                })}
            </div>
        );
    }
}

export const pageQuery = graphql`
    query CategoryPage($category: String) {
        allMarkdownRemark(
            limit: 1000
            sort: { fields: [frontmatter___date], order: DESC },
            filter: { frontmatter: {category: { eq: $category } } }
        ) {
            totalCount
			edges {
				node {
					excerpt
					frontmatter {
						path
						date(formatString: "DD MMMM, YYYY")
						title
					}
				}
			}
        }
    }
`;