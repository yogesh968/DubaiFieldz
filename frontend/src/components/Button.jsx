import { Link } from 'react-router-dom'

export function Button({
  as = 'button',
  to,
  href,
  target,
  rel,
  variant = 'default',
  size = 'md',
  className = '',
  children,
  ...props
}) {
  const cls = [
    'btn',
    variant === 'primary' ? 'btn-primary' : '',
    variant === 'outline' ? 'btn-outline' : '',
    variant === 'outline-inverse' ? 'btn-outline-inverse' : '',
    variant === 'ghost' ? 'btn-ghost' : '',
    size === 'sm' ? 'btn-sm' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')


  if (as === 'link') {
    return (
      <Link className={cls} to={to} {...props}>
        {children}
      </Link>
    )
  }

  if (as === 'a') {
    return (
      <a
        className={cls}
        href={href}
        target={target}
        rel={rel || (target === '_blank' ? 'noreferrer' : undefined)}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <button className={cls} type="button" {...props}>
      {children}
    </button>
  )
}

