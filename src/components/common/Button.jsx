import { Loader2 } from 'lucide-react';

export default function Button({
  children,
  variant = 'primary', // primary | secondary | outline | ghost | danger
  size, // 'sm' | undefined
  loading = false,
  disabled = false,
  type = 'button',
  fullWidth = false,
  icon: Icon,
  onClick,
  ...rest
}) {
  const classes = [
    'btn',
    `btn-${variant}`,
    size === 'sm' ? 'btn-sm' : '',
    fullWidth ? 'btn-block' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      {...rest}
    >
      {loading ? <Loader2 size={16} className="spin-icon" /> : Icon ? <Icon size={16} /> : null}
      {children}
    </button>
  );
}
