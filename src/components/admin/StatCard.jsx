export default function StatCard({ icon: Icon, label, value, accent = 'var(--primary)' }) {
  return (
    <div className="card">
      <div className="card-body" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 12,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: `color-mix(in srgb, ${accent} 14%, white)`,
            color: accent,
            flexShrink: 0,
          }}
        >
          <Icon size={22} />
        </div>
        <div>
          <div style={{ fontSize: 'var(--fs-2xl)', fontWeight: 700, lineHeight: 1 }}>{value}</div>
          <div className="text-muted" style={{ fontSize: 'var(--fs-sm)', marginTop: 4 }}>
            {label}
          </div>
        </div>
      </div>
    </div>
  );
}
