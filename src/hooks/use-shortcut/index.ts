import React from 'react';

type Shortcut = {
  keys: string[];
  callback: () => void;
  addCtrlModifier?: boolean;
  addShiftModifier?: boolean;
};

export function useShortcut(shortcuts: Shortcut[]) {
  const shortcutKeys = shortcuts?.map(({ keys }) => keys).flat();

  const handleKeyPress = React.useCallback(
    (e: KeyboardEvent) => {
      shortcuts.forEach(
        ({ keys, callback, addCtrlModifier, addShiftModifier }) => {
          const shortcutKeyPressed = keys.some((key) => e.key === key);

          const ctrlModifierPressed = addCtrlModifier
            ? e.ctrlKey || e.metaKey
            : true;

          const shiftModifierPressed = addShiftModifier ? e.shiftKey : true;

          if (
            shortcutKeyPressed &&
            ctrlModifierPressed &&
            shiftModifierPressed
          ) {
            e.preventDefault();

            callback();
          }
        },
      );
    },
    [shortcutKeys],
  );

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);
}
