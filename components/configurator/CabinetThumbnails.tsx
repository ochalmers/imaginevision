const cabinetConfigs = [
  // 1: Single door
  (props: { fill: string; handleColor?: string }) => (
    <svg viewBox="0 0 48 64" fill="none" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
      <rect x="4" y="8" width="40" height="48" rx="2" fill={props.fill} stroke="#999" strokeWidth="1" />
      <line x1="24" y1="8" x2="24" y2="56" stroke="#666" strokeWidth="1" />
    </svg>
  ),
  // 2: Double door
  (props: { fill: string; handleColor?: string }) => (
    <svg viewBox="0 0 48 64" fill="none" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
      <rect x="4" y="8" width="40" height="48" rx="2" fill={props.fill} stroke="#999" strokeWidth="1" />
      <line x1="24" y1="8" x2="24" y2="56" stroke="#666" strokeWidth="1" />
      <circle cx="18" cy="32" r="2" fill={props.handleColor || '#888'} />
      <circle cx="30" cy="32" r="2" fill={props.handleColor || '#888'} />
    </svg>
  ),
  // 3: Single drawer
  (props: { fill: string; handleColor?: string }) => (
    <svg viewBox="0 0 48 64" fill="none" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
      <rect x="4" y="8" width="40" height="48" rx="2" fill={props.fill} stroke="#999" strokeWidth="1" />
      <rect x="8" y="12" width="32" height="18" rx="1" fill={props.fill} stroke="#666" strokeWidth="1" />
      <line x1="24" y1="18" x2="24" y2="28" stroke={props.handleColor || '#888'} strokeWidth="1.5" />
    </svg>
  ),
  // 4: Two drawers
  (props: { fill: string; handleColor?: string }) => (
    <svg viewBox="0 0 48 64" fill="none" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
      <rect x="4" y="8" width="40" height="48" rx="2" fill={props.fill} stroke="#999" strokeWidth="1" />
      <rect x="8" y="12" width="32" height="14" rx="1" fill={props.fill} stroke="#666" strokeWidth="1" />
      <rect x="8" y="30" width="32" height="14" rx="1" fill={props.fill} stroke="#666" strokeWidth="1" />
      <line x1="24" y1="18" x2="24" y2="24" stroke={props.handleColor || '#888'} strokeWidth="1.5" />
      <line x1="24" y1="36" x2="24" y2="42" stroke={props.handleColor || '#888'} strokeWidth="1.5" />
    </svg>
  ),
  // 5: Double 2 drawer (2 doors bottom, 2 drawers top) - selected default
  (props: { fill: string; handleColor?: string }) => (
    <svg viewBox="0 0 48 64" fill="none" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
      <rect x="4" y="8" width="40" height="48" rx="2" fill={props.fill} stroke="#999" strokeWidth="1" />
      <rect x="8" y="12" width="32" height="14" rx="1" fill={props.fill} stroke="#666" strokeWidth="1" />
      <rect x="8" y="30" width="32" height="14" rx="1" fill={props.fill} stroke="#666" strokeWidth="1" />
      <line x1="24" y1="8" x2="24" y2="26" stroke="#666" strokeWidth="1" />
      <line x1="24" y1="44" x2="24" y2="56" stroke="#666" strokeWidth="1" />
      {/* L-shaped handles on drawers */}
      <path d="M20 20h8v1h-8z" fill={props.handleColor || '#888'} />
      <path d="M20 38h8v1h-8z" fill={props.handleColor || '#888'} />
      {/* Knobs on doors */}
      <circle cx="18" cy="48" r="2" fill={props.handleColor || '#888'} />
      <circle cx="30" cy="48" r="2" fill={props.handleColor || '#888'} />
    </svg>
  ),
  // 6: Three drawers
  (props: { fill: string; handleColor?: string }) => (
    <svg viewBox="0 0 48 64" fill="none" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
      <rect x="4" y="8" width="40" height="48" rx="2" fill={props.fill} stroke="#999" strokeWidth="1" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="8" y={12 + i * 15} width="32" height="12" rx="1" fill={props.fill} stroke="#666" strokeWidth="1" />
          <line x1="24" y1={18 + i * 15} x2="24" y2={22 + i * 15} stroke={props.handleColor || '#888'} strokeWidth="1.5" />
        </g>
      ))}
    </svg>
  ),
  // 7: Door + drawer
  (props: { fill: string; handleColor?: string }) => (
    <svg viewBox="0 0 48 64" fill="none" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
      <rect x="4" y="8" width="40" height="48" rx="2" fill={props.fill} stroke="#999" strokeWidth="1" />
      <rect x="8" y="12" width="32" height="18" rx="1" fill={props.fill} stroke="#666" strokeWidth="1" />
      <line x1="24" y1="18" x2="24" y2="28" stroke={props.handleColor || '#888'} strokeWidth="1.5" />
      <line x1="24" y1="30" x2="24" y2="56" stroke="#666" strokeWidth="1" />
      <circle cx="18" cy="44" r="2" fill={props.handleColor || '#888'} />
    </svg>
  ),
  // 8: Drawer + door
  (props: { fill: string; handleColor?: string }) => (
    <svg viewBox="0 0 48 64" fill="none" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
      <rect x="4" y="8" width="40" height="48" rx="2" fill={props.fill} stroke="#999" strokeWidth="1" />
      <rect x="8" y="38" width="32" height="18" rx="1" fill={props.fill} stroke="#666" strokeWidth="1" />
      <line x1="24" y1="8" x2="24" y2="36" stroke="#666" strokeWidth="1" />
      <line x1="24" y1="44" x2="24" y2="54" stroke={props.handleColor || '#888'} strokeWidth="1.5" />
      <circle cx="18" cy="32" r="2" fill={props.handleColor || '#888'} />
    </svg>
  ),
  // 9: Four drawers
  (props: { fill: string; handleColor?: string }) => (
    <svg viewBox="0 0 48 64" fill="none" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
      <rect x="4" y="8" width="40" height="48" rx="2" fill={props.fill} stroke="#999" strokeWidth="1" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x="8" y={12 + i * 11} width="32" height="9" rx="1" fill={props.fill} stroke="#666" strokeWidth="1" />
          <line x1="24" y1={16 + i * 11} x2="24" y2={19 + i * 11} stroke={props.handleColor || '#888'} strokeWidth="1.5" />
        </g>
      ))}
    </svg>
  ),
]

export function CabinetThumbnail({ index, fill, handleColor, selected }: { index: number; fill: string; handleColor: string; selected?: boolean }) {
  const Component = cabinetConfigs[index] ?? cabinetConfigs[4]
  return (
    <div
      className="flex aspect-square items-center justify-center overflow-hidden rounded-md p-1.5 transition-all"
      style={{
        backgroundColor: '#e8e8e8',
      }}
    >
      <div className="h-full w-full" style={{ minHeight: 36 }}>
        <Component fill={fill} handleColor={handleColor} />
      </div>
    </div>
  )
}
