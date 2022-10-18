import { useShortcut } from '.';
import { renderHook } from '@testing-library/react-hooks';
import { fireEvent, render } from '@testing-library/react';

describe('UI | Hooks | useShortcut', () => {
  describe('when instantiating', () => {
    it('creates a keydown event listener on the document', () => {
      let listenerEvent = '';

      jest
        .spyOn(document, 'addEventListener')
        .mockImplementationOnce((event) => {
          listenerEvent = event;
        });

      renderHook(() =>
        useShortcut([
          {
            keys: ['Escape'],
            callback: jest.fn(),
          },
        ]),
      );

      expect(listenerEvent).toBe('keydown');
    });
  });

  describe('when using a shortcut', () => {
    it('pressing the provided key calls the callback function', () => {
      const callback = jest.fn();

      const Component = () => {
        useShortcut([
          {
            keys: ['Escape'],
            callback,
          },
        ]);

        return <div data-testid="wrapper" />;
      };

      const component = render(<Component />);

      fireEvent.keyDown(component.getByTestId('wrapper'), {
        key: 'Escape',
        code: 'Escape',
      });

      expect(callback).toHaveBeenCalled();
    });

    describe('and pressing a key that is not the provided key', () => {
      it('does not calls the callback function', () => {
        const callback = jest.fn();

        const Component = () => {
          useShortcut([
            {
              keys: ['Escape'],
              callback,
            },
          ]);

          return <div data-testid="wrapper" />;
        };

        const component = render(<Component />);

        fireEvent.keyDown(component.getByTestId('wrapper'), {
          key: 'k',
          code: 'KeyK',
        });

        expect(callback).not.toHaveBeenCalled();
      });
    });

    describe('and there is a modifier', () => {
      describe('and pressing the key without the modifier', () => {
        it('does not call the callback function', () => {
          const callback = jest.fn();

          const Component = () => {
            useShortcut([
              {
                keys: ['l'],
                addCtrlModifier: true,
                addShiftModifier: true,
                callback,
              },
            ]);

            return <div data-testid="wrapper" />;
          };

          const component = render(<Component />);

          fireEvent.keyDown(component.getByTestId('wrapper'), {
            key: 'l',
            code: 'KeyL',
          });

          expect(callback).not.toHaveBeenCalled();
        });
      });

      describe('and the modifier is "CTRL"', () => {
        it('pressing the provided key combination calls the callback function', () => {
          const callback = jest.fn();

          const Component = () => {
            useShortcut([
              {
                keys: ['Escape'],
                addCtrlModifier: true,
                callback,
              },
            ]);

            return <div data-testid="wrapper" />;
          };

          const component = render(<Component />);

          fireEvent.keyDown(component.getByTestId('wrapper'), {
            key: 'Escape',
            code: 'Escape',
            ctrlKey: true,
          });

          expect(callback).toHaveBeenCalled();
        });

        describe('and using "CMD"', () => {
          it('pressing the provided key combination calls the callback function', () => {
            const callback = jest.fn();

            const Component = () => {
              useShortcut([
                {
                  keys: ['Escape'],
                  addCtrlModifier: true,
                  callback,
                },
              ]);

              return <div data-testid="wrapper" />;
            };

            const component = render(<Component />);

            fireEvent.keyDown(component.getByTestId('wrapper'), {
              key: 'Escape',
              code: 'Escape',
              metaKey: true,
            });

            expect(callback).toHaveBeenCalled();
          });
        });
      });

      describe('and the modifier is "SHIFT"', () => {
        it('pressing the provided key combination calls the callback function', () => {
          const callback = jest.fn();

          const Component = () => {
            useShortcut([
              {
                keys: ['Escape'],
                addShiftModifier: true,
                callback,
              },
            ]);

            return <div data-testid="wrapper" />;
          };

          const component = render(<Component />);

          fireEvent.keyDown(component.getByTestId('wrapper'), {
            key: 'Escape',
            code: 'Escape',
            shiftKey: true,
          });

          expect(callback).toHaveBeenCalled();
        });
      });
    });
  });

  describe('when unmounting', () => {
    it('removes the scroll event listener on main element', () => {
      let removedEvent = '';

      jest
        .spyOn(document, 'removeEventListener')
        .mockImplementationOnce((event) => {
          removedEvent = event;
        });

      const { unmount } = renderHook(() =>
        useShortcut([
          {
            keys: ['Escape'],
            callback: jest.fn(),
          },
        ]),
      );

      unmount();

      expect(removedEvent).toBe('keydown');
    });
  });
});
