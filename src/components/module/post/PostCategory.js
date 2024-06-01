import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const PostCategoryStyles = styled.div`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 10px;
  color: ${(props) => props.theme.gray6B};
  font-size: 14px;
  font-weight: 600;
  a {
    display: block;
  }
  background-color: #f3f3f3;
  ${(props) =>
    props.type === "primary" &&
    css`
      background-color: #f3edff;
    `};
  ${(props) =>
    props.type === "secondary" &&
    css`
      background-color: white;
    `};
`;

const PostCategogy = ({
  children,
  type = "primary",
  className = "",
  to = "",
}) => {
  return (
    <PostCategoryStyles className={`post-category ${className}`} type={type}>
      <Link to={`/category/${to}`}>{children}</Link>
    </PostCategoryStyles>
  );
};

export default PostCategogy;
