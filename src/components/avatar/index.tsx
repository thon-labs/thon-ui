import React from 'react';
import classNames from 'classnames';
import { Text } from '../text';
import styles from './avatar.styles';

type Sizes = 'small' | 'medium' | 'large';

const sizeMapper: {
  [key in Sizes]: {
    imageSize: number;
    textVariant?: string;
  };
} = {
  small: {
    imageSize: 10,
    textVariant: 'sm',
  },
  medium: {
    imageSize: 16,
    textVariant: 'lg',
  },
  large: {
    imageSize: 20,
    textVariant: '2xl',
  },
};

type Props = {
  name?: string;
  size?: Sizes;
  withHover?: boolean;
  grayscale?: boolean;
};

export const Avatar: React.FC<
  Props & React.ImgHTMLAttributes<HTMLImageElement>
> = ({
  name,
  size = 'small',
  children,
  alt,
  src,
  withHover = false,
  grayscale = false,
  ...props
}) => {
  const { imageSize, textVariant } = sizeMapper[size];
  const className = classNames(
    `w-${imageSize} h-${imageSize}`,
    props.className,
    styles.avatar
  );

  if (src && !src.includes('gravatar')) {
    if (!alt) {
      // eslint-disable-next-line no-console
      console.warn(
        `Avatar: Property "alt" not found for the image "${src}", consider add an alternative text.`
      );
    }

    return (
      <div
        {...props}
        role={'img'}
        style={{
          backgroundImage: `url("${src}")`,
        }}
        aria-label={alt}
        className={classNames(className, styles.avatarImage, {
          [styles.avatarWithHover]: withHover,
          [styles.avatarGrayscale]: grayscale,
        })}
      />
    );
  }

  const nameSplit = (name || '').trim().split(' ');

  const nameSplitInitials =
    nameSplit.length > 1
      ? `${nameSplit[0].charAt(0)}${nameSplit[nameSplit.length - 1].charAt(0)}`
      : nameSplit[0].substring(0, 2).toUpperCase();

  return (
    <div
      {...props}
      className={classNames(styles.avatarInitialsWrapper, className, {
        [styles.avatarInitialsWrapperWithHover]: withHover,
        [styles.avatarInitialsWrapperWithoutHover]: !withHover,
      })}
    >
      {nameSplitInitials.length > 0 && (
        <Text
          variant={textVariant}
          className={styles.avatarInitialsText}
          aria-label={nameSplitInitials}
        >
          {nameSplitInitials}
        </Text>
      )}
    </div>
  );
};
