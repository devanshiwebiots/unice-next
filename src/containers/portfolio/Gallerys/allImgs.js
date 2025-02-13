import { Gallery, Item } from "react-photoswipe-gallery";
import { AllImgData } from "../database";

const AllImgFun = ({ className, title, subTitle }) => {
  return (
    <Gallery>
      {AllImgData.length > 0 &&
        AllImgData.map((item, i) => (
          <div className={className} key={i}>
            <div className="overlay">
              <div className="border-portfolio">
                <Item original={`/assets/images/${item.img}`} thumbnail={`/assets/images/${item.img}`} width="960" height="980">
                  {({ open, ref }) => (
                    <>
                      <div className="overlay-background" onClick={open}>
                        <i aria-hidden="true" className="fa fa-plus"></i>
                      </div>
                      <img ref={ref} alt="" className="img-fluid blur-up lazyload" src={`/assets/images/${item.img}`} />
                    </>
                  )}
                </Item>
              </div>
            </div>
            {title && (
              <div className="portfolio-text">
                <h3 className="head-text">{title}</h3>
                <h6 className="head-sub-text">{subTitle}</h6>
              </div>
            )}
          </div>
        ))}
    </Gallery>
  );
};

export default AllImgFun;
