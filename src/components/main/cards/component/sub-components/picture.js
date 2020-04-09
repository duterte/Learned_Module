import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

class Picture extends React.Component {
  render() {
    const { prev, next, mouseover, mouseleave, dot, index, img } = this.props;
    return (
      <picture>
        <div className="img-holder">
          <img src={img[index].url} alt={img[index].alt} />
        </div>
        <div className="caption">{img[index].alt}</div>
        <div
          className="left"
          onMouseOver={e => mouseover(e)}
          onMouseLeave={e => mouseleave(e)}
        >
          <div className="arrow">
            <FaChevronLeft className="pointer" onClick={e => prev(e)} />
          </div>
        </div>
        <div
          className="right"
          onMouseOver={e => mouseover(e)}
          onMouseLeave={e => mouseleave(e)}
        >
          <div className="arrow">
            <FaChevronRight className="pointer" onClick={e => next(e)} />
          </div>
        </div>
        <div className="indicator">
          <div className="holder">
            {img.map((item, i) => {
              return (
                <button
                  key={i}
                  id={'dot-' + i}
                  onClick={e => dot(e)}
                  className={this.props.index === i ? 'active' : ''}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>
        </div>
      </picture>
    );
  }
}

export default Picture;
