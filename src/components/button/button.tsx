import cn from 'classnames/bind';
import { ButtonHTMLAttributes, FunctionComponent, ReactNode } from 'react';
import styles from './button.module.scss';

// Bind the scope of `styles`.
const cx = cn.bind(styles);

// Props.
// Extends the `HTMLButtonElement` providing all attributes of the button as props.
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSubmitting?: boolean;
  label?: string;
  classes?: string;
  children?: ReactNode;
}

/**
 * Dashboard component.
 *
 * @remarks Used to display the tile navigation through the Dashboard page.
 */
const Button: FunctionComponent<ButtonProps> = ({
  disabled,
  isSubmitting,
  label,
  type = 'submit',
  classes,
  children,
  ...props
}): JSX.Element => (
  <button
    className={cx([
      {
        btn: true,
        'btn--disabled': isSubmitting,
      },
      classes,
      'btn--normal',
    ])}
    // eslint-disable-next-line react/button-has-type
    type={type}
    disabled={disabled}
    {...props}
  >
    {isSubmitting ? <span className={styles.spinner} /> : label}
    {children}
  </button>
);

// Export.
export { Button };
