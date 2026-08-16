export function Input({ label, id, error, hint, as = 'input', options, ...rest }) {
  const fieldId = id || rest.name;
  const sharedProps = {
    id: fieldId,
    className: `form-${as === 'textarea' ? 'textarea' : as === 'select' ? 'select' : 'input'}${
      error ? ' has-error' : ''
    }`,
    'aria-invalid': !!error,
    'aria-describedby': error ? `${fieldId}-error` : undefined,
    ...rest,
  };

  return (
    <div className="form-group">
      {label && (
        <label className="form-label" htmlFor={fieldId}>
          {label}
        </label>
      )}
      {as === 'textarea' ? (
        <textarea {...sharedProps} />
      ) : as === 'select' ? (
        <select {...sharedProps}>
          {options?.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input {...sharedProps} />
      )}
      {hint && !error && <div className="form-hint">{hint}</div>}
      {error && (
        <div className="form-error" id={`${fieldId}-error`}>
          {error}
        </div>
      )}
    </div>
  );
}

export default Input;
