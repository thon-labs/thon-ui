import { act, renderHook } from '@testing-library/react-hooks';
import { useLocalStorage } from './';

const key = 'testKey';

describe('Domains | Shared | Hooks | useLocalStorage', () => {
  describe('when instantiating', () => {
    describe('and there is no saved value in localStorage', () => {
      it('sets the state as the initial value', () => {
        jest
          .spyOn(window.localStorage['__proto__'], 'getItem')
          .mockReturnValue(null);

        const { result } = renderHook(() => useLocalStorage<number[]>(key, []));
        const [value] = result.current;

        expect(value).toEqual([]);
      });
    });

    describe('and there is saved value in localStorage', () => {
      it('returns the saved value from localStorage', () => {
        jest
          .spyOn(window.localStorage['__proto__'], 'getItem')
          .mockReturnValue('[1,2,3,4]');

        const { result } = renderHook(() => useLocalStorage<number[]>(key, []));
        const [value] = result.current;

        expect(value).toEqual([1, 2, 3, 4]);
      });
    });
  });

  describe('when calling setValue', () => {
    it('updates the value in state', () => {
      const { result } = renderHook(() => useLocalStorage<number[]>(key, []));
      const [, setValue] = result.current;

      act(() => {
        setValue([1, 2, 3, 4]);
      });

      const [value] = result.current;

      expect(value).toEqual([1, 2, 3, 4]);
    });

    it('saves the data in localStorage', () => {
      const setItemLocalStorage = jest.spyOn(
        window.localStorage['__proto__'],
        'setItem',
      );

      const { result } = renderHook(() => useLocalStorage<number[]>(key, []));
      const [, setValue] = result.current;

      act(() => {
        setValue([1, 2, 3, 4]);
      });

      expect(setItemLocalStorage).toHaveBeenCalledWith(key, '[1,2,3,4]');
    });
  });
});
