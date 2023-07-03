import React from 'react';
import {Image} from 'antd';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './index.style.less';
const AppImage = ({
  src,
  alt,
  height,
  placeholder,
  onError,
  fallback,
  rootClassName,
  width,
  className,
  preview,
}) => {
  return (
    <Image
      className={clsx(className)}
      rootClassName={rootClassName}
      src={src}
      alt={alt}
      height={height}
      placeholder={placeholder}
      onError={onError}
      fallback={fallback}
      width={width}
      preview={preview}
    />
  );
};

export default AppImage;

AppImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  fallback: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  rootClassName: PropTypes.string,
  onError: PropTypes.func,
  placeholder: PropTypes.element,
  className: PropTypes.string,
  preview: PropTypes.shape({
    visible: PropTypes.bool,
    onVisibleChange: PropTypes.func,
    getContainer: PropTypes.string || PropTypes.element,
    src: PropTypes.string,
    mask: PropTypes.element,
    maskClassName: PropTypes.string,
    current: PropTypes.number,
    countRender: PropTypes.func,
    scaleStep: PropTypes.number,
  }),
};

AppImage.defaultProps = {
  src: '',
  alt: '',
};
