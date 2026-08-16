import { Inbox, AlertTriangle } from 'lucide-react';

export function LoadingSpinner({ label = 'Loading…', fullPage = false }) {
  return (
    <div className={fullPage ? 'spinner-page' : 'state-block'} role="status" aria-live="polite">
      <span className="spinner" />
      {label && <p style={{ marginTop: 12 }}>{label}</p>}
    </div>
  );
}

export function EmptyState({ icon: Icon = Inbox, title = 'Nothing here yet', message, action }) {
  return (
    <div className="state-block">
      <Icon size={40} />
      <h3>{title}</h3>
      {message && <p>{message}</p>}
      {action}
    </div>
  );
}

export function ErrorState({ message = 'Something went wrong. Please try again.', onRetry }) {
  return (
    <div className="state-block">
      <AlertTriangle size={40} color="var(--danger)" />
      <h3>Unable to load data</h3>
      <p>{message}</p>
      {onRetry && (
        <button className="btn btn-outline" onClick={onRetry}>
          Try again
        </button>
      )}
    </div>
  );
}
