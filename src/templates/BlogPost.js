import React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import renderHTML from 'react-render-html';
import Layout from '../components/layout';

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  console.log(post.frontmatter);
  return (
    <Layout>
      <Link to="/blog">Go Back {post.htlm}</Link>
      <hr />
      <h4>
        Posted by: {post.frontmatter.author} on {post.frontmatter.date}
      </h4>
      <div>{renderHTML(post.html)}</div>
    </Layout>
  );
};

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`;

export default BlogPost;
