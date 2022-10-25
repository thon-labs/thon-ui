import { render } from '@testing-library/react';
import Avatar from './index';

describe('UI | Base Components | Avatar', () => {
  describe('when rendering', () => {
    describe('and the size is small', () => {
      it('renders w-10/h-10 for children', () => {
        let component = render(
          <Avatar src="some-image.png" alt="my alt text" size="small" />,
        );
        let container = component.getByAltText('my alt text');

        expect(container.getAttribute('class')).toContain('w-10 h-10');

        component = render(
          <Avatar
            name="Baby Groot"
            data-testid="wrapper-initials"
            size="small"
          />,
        );
        container = component.getByTestId('wrapper-initials');

        expect(container.getAttribute('class')).toContain('w-10 h-10');
      });
    });

    describe('and the size is medium', () => {
      it('renders w-18/h-18 for children', () => {
        let component = render(
          <Avatar src="some-image.png" alt="my alt text" size="medium" />,
        );
        let container = component.getByAltText('my alt text');

        expect(container.getAttribute('class')).toContain('w-18 h-18');

        component = render(
          <Avatar
            name="Baby Groot"
            data-testid="wrapper-initials"
            size="medium"
          />,
        );
        container = component.getByTestId('wrapper-initials');

        expect(container.getAttribute('class')).toContain('w-18 h-18');
      });
    });

    describe('and there is a src prop', () => {
      describe('and there is no alt prop', () => {
        it('shows an warn asking for input the alt', () => {
          const warn = jest
            .spyOn(console, 'warn')
            .mockImplementation(() => null);

          render(<Avatar src="some-image.png" />);

          expect(warn).toHaveBeenCalledWith(
            'BlastRadius UI / Avatar: Property "alt" not found for the image "some-image.png", consider add an alternative text.',
          );
        });
      });

      it('renders an image with the forward props', () => {
        const component = render(
          <Avatar src="some-image.png" alt="my alt text" />,
        );
        const container = component.getByAltText('my alt text');

        expect(container.tagName).toBe('IMG');
        expect(container.getAttribute('src')).toBe('some-image.png');
      });
    });

    describe('and there is a name from props', () => {
      describe('and there is a second name', () => {
        it('renders the initials of name', () => {
          const component = render(<Avatar name="Baby Groot" />);

          expect(component.getByText('BG')).toBeInTheDocument();
        });
      });
    });

    describe('and the name is empty', () => {
      it('renders the avatar with a fallback icon', () => {
        const component = render(
          <Avatar name="" data-testid="wrapper-initials" />,
        );

        expect(component.getByTestId('wrapper-initials')).toBeInTheDocument();
        expect(
          component.queryByTestId('avatar-initials'),
        ).not.toBeInTheDocument();
        expect(component.getByText('involved.svg')).toBeInTheDocument();
      });
    });

    describe('and the name is undefined', () => {
      it('renders the avatar with a fallback icon', () => {
        const component = render(
          <Avatar name={undefined} data-testid="wrapper-initials" />,
        );

        expect(component.getByTestId('wrapper-initials')).toBeInTheDocument();
        expect(
          component.queryByTestId('avatar-initials'),
        ).not.toBeInTheDocument();
        expect(component.getByText('involved.svg')).toBeInTheDocument();
      });
    });
  });
});
