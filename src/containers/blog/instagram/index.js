import React from "react";
import Link from "next/link";

const Instagram = ({}) => {
  return (
    <div>
      <h5 className="blog-title">instagram</h5>
      <div className="sidebar-container insta">
        <ul className="blog-insta">
          <li>
            <Link href="">
              <img alt="" className="img-fluid" src="/assets/images/agency/blog/2.jpg" />
            </Link>
          </li>
          <li>
            <Link href="">
              <img alt="" className="img-fluid" src="/assets/images/agency/blog/3.png" />
            </Link>
          </li>
          <li>
            <Link href="">
              <img alt="" className="img-fluid" src="/assets/images/agency/blog/4.jpg" />
            </Link>
          </li>
          <li>
            <Link href="">
              <img alt="" className="img-fluid" src="/assets/images/agency/blog/6.jpg" />
            </Link>
          </li>
        </ul>
        <ul className="blog-insta">
          <li>
            <Link href="">
              <img alt="" className="img-fluid" src="/assets/images/agency/blog/6.jpg" />
            </Link>
          </li>
          <li>
            <Link href="">
              <img alt="" className="img-fluid" src="/assets/images/agency/blog/4.jpg" />
            </Link>
          </li>
          <li>
            <Link href="">
              <img alt="" className="img-fluid" src="/assets/images/agency/blog/3.png" />
            </Link>
          </li>
          <li>
            <Link href="">
              <img alt="" className="img-fluid" src="/assets/images/agency/blog/2.jpg" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Instagram;
