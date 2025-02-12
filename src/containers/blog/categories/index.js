import React from "react";
import Link from "next/link";

const Categories = ({}) => (
  <div>
    <h5 className="blog-title">categories</h5>
    <div className="sidebar-container borders">
      <ul className="sidebar-list">
        <li className="d-flex">
          <Link href="#">
            <i aria-hidden="true" className="fa fa-angle-right m-r-15"></i>
            Lorem Ipsum Is Simple
          </Link>
        </li>
        <li className="d-flex">
          <Link href="#">
            <i aria-hidden="true" className="fa fa-angle-right m-r-15"></i>
            Many Variations
          </Link>
        </li>
        <li className="d-flex">
          <Link href="#">
            <i aria-hidden="true" className="fa fa-angle-right m-r-15"></i>
            random text
          </Link>
        </li>
        <li className="d-flex">
          <Link href="#">
            <i aria-hidden="true" className="fa fa-angle-right m-r-15"></i>
            Lorem Ipsum
          </Link>
        </li>
        <li className="d-flex">
          <Link href="#">
            <i aria-hidden="true" className="fa fa-angle-right m-r-15"></i>
            it's Random
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Categories;
