import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Blog = () => {
  const data = useStaticQuery(graphql`
    query BlogIndexQuery {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              path
              title
              date
              author
            }
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Latest Posts</h1>
      {data.allMarkdownRemark.edges.map(p => (
        <div key={p.node.id}>
          <h3>{p.node.frontmatter.title}</h3>
          <small>
            Posted by: {p.node.frontmatter.author} on {p.node.frontmatter.date}
          </small>
          <br />
          <br />
          <Link to={p.node.frontmatter.path}>Read More</Link>
          <br />
          <br />
          <hr />
        </div>
      ))}
    </Layout>
  );
};

export default Blog;
