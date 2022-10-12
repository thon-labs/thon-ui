import React from 'react';
import classNames from 'classnames';
import { Text } from '../../components/text';
import toast, { Toast, Toaster, ToastPosition } from 'react-hot-toast';

type Props = {
  title?: string;
  message: string;
  position?: ToastPosition;
  duration?: Toast['duration'];
  background?: string;
};

export type ToastContextType = {
  notify: (props: Props) => void;
  toast: typeof toast;
};

export const ToastContext = React.createContext<ToastContextType>({
  notify: () => void 0,
  toast: {} as typeof toast,
});

const animationsMapper: {
  [key in ToastPosition]: { enter: string; leave: string };
} = {
  'bottom-left': {
    enter: 'animate-enter',
    leave: 'animate-leave',
  },
  'bottom-center': {
    enter: 'animate-enter',
    leave: 'animate-leave',
  },
  'bottom-right': {
    enter: 'animate-enter',
    leave: 'animate-leave',
  },
  'top-center': {
    enter: 'animate-enter',
    leave: 'animate-leave',
  },
  'top-left': {
    enter: 'animate-enter',
    leave: 'animate-leave',
  },
  'top-right': {
    enter: 'animate-enter',
    leave: 'animate-leave',
  },
};

export const ToastProvider: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
}) => {
  const notify = ({
    title,
    message,
    position = 'bottom-center',
    background = 'bg-gray-900 dark:bg-white',
    duration = 4000,
  }: Props) => {
    const defaultClassName = `${background} 
      flex items-center rounded-lg
      shadow-xl dark:shadow-sm
      select-none cursor-default
    `;
    const className = classNames(defaultClassName);

    return toast.custom(
      ({ visible }) => (
        <div
          role={'alert'}
          className={classNames(className, {
            [animationsMapper[position].enter]: visible,
            [animationsMapper[position].leave]: !visible,
          })}
        >
          <div className="flex items-center gap-4 py-2 px-4">
            <div className="flex flex-col gap-0.5">
              {title && (
                <Text variant="xxs" className="text-gray-500 uppercase">
                  {title}
                </Text>
              )}
              <Text variant="sm" className="text-white dark:text-gray-900">
                {message}
              </Text>
            </div>
          </div>
        </div>
      ),
      { position, duration }
    );
  };

  return (
    <ToastContext.Provider value={{ toast, notify }}>
      {children}
      <Toaster />
    </ToastContext.Provider>
  );
};
