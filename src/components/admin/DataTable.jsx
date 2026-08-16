import { LoadingSpinner, EmptyState } from '../common/States';

export default function DataTable({ columns, rows, loading, emptyMessage, getRowKey }) {
  if (loading) return <LoadingSpinner label="Loading data…" />;
  if (!rows || rows.length === 0) {
    return <EmptyState title="No records found" message={emptyMessage} />;
  }

  return (
    <div className="table-wrapper data-table-mobile-cards">
      <table className="data-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key}>{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={getRowKey(row)}>
              {columns.map((col) => (
                <td key={col.key} data-label={col.label}>
                  {col.render ? col.render(row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
