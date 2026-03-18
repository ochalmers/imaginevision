'use client'

interface KitchenViewProps {
  cabinetFinish: string
  handleColor: string
  cabinetConfig: string
  width: string
}

export function KitchenView({ cabinetFinish, handleColor }: KitchenViewProps) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Kitchen scene with perspective */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #d4d4d4 0%, #e8e8e8 30%, #f5f5f5 100%)',
        }}
      >
        {/* Subway tile backsplash - left wall */}
        <div
          className="absolute left-0 top-0 h-[42%] w-[50%]"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.9) 6%, rgba(230,230,230,0.95) 6%, rgba(230,230,230,0.95) 8%),
              linear-gradient(0deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.9) 5px, rgba(220,220,220,0.9) 5px, rgba(220,220,220,0.9) 14px)
            `,
            backgroundColor: '#f5f5f5',
            backgroundSize: '24px 14px',
          }}
        />

        {/* Subway tile backsplash - right wall */}
        <div
          className="absolute right-0 top-0 h-[42%] w-[45%]"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(230,230,230,0.95) 0%, rgba(230,230,230,0.95) 6%, rgba(255,255,255,0.9) 6%, rgba(255,255,255,0.9) 8%),
              linear-gradient(0deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.9) 5px, rgba(220,220,220,0.9) 5px, rgba(220,220,220,0.9) 14px)
            `,
            backgroundColor: '#f0f0f0',
            backgroundSize: '24px 14px',
          }}
        />

        {/* Lighting gradient on backsplash */}
        <div
          className="pointer-events-none absolute left-0 top-0 h-[40%] w-full"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.1) 40%, transparent 100%)',
          }}
        />

        {/* Countertop - L shape */}
        <div
          className="absolute bottom-[26%] left-0 h-[14%] w-[52%]"
          style={{
            backgroundColor: '#e8e4dc',
            boxShadow: '0 -1px 4px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.8)',
          }}
        />
        <div
          className="absolute bottom-[26%] right-0 h-[14%] w-[42%]"
          style={{
            backgroundColor: '#e0dcd4',
            boxShadow: '0 -1px 4px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.6)',
          }}
        />

        {/* Upper cabinets - left run */}
        <div
          className="absolute left-[4%] top-[12%] h-[28%] w-[22%]"
          style={{
            backgroundColor: cabinetFinish,
            border: '1px solid rgba(0,0,0,0.12)',
            borderRadius: 2,
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}
        >
          <div className="flex h-full items-center justify-center">
            <div className="h-1.5 w-5 rounded-full" style={{ backgroundColor: handleColor }} />
          </div>
        </div>
        <div
          className="absolute left-[28%] top-[12%] h-[28%] w-[22%]"
          style={{
            backgroundColor: cabinetFinish,
            border: '1px solid rgba(0,0,0,0.12)',
            borderRadius: 2,
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}
        >
          <div className="flex h-full items-center justify-center">
            <div className="h-1.5 w-5 rounded-full" style={{ backgroundColor: handleColor }} />
          </div>
        </div>

        {/* Upper cabinets - right run */}
        <div
          className="absolute right-[4%] top-[12%] h-[28%] w-[38%]"
          style={{
            backgroundColor: cabinetFinish,
            border: '1px solid rgba(0,0,0,0.12)',
            borderRadius: 2,
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}
        >
          <div className="flex h-full items-center justify-center gap-4">
            <div className="h-1.5 w-6 rounded-full" style={{ backgroundColor: handleColor }} />
            <div className="h-1.5 w-6 rounded-full" style={{ backgroundColor: handleColor }} />
          </div>
        </div>

        {/* Base cabinets - horizontal run (left) */}
        <div
          className="absolute bottom-[2%] left-[4%] h-[24%] w-[22%]"
          style={{
            backgroundColor: cabinetFinish,
            border: '1px solid rgba(0,0,0,0.12)',
            borderRadius: 2,
            boxShadow: '0 2px 6px rgba(0,0,0,0.12)',
          }}
        >
          <div className="flex h-full flex-col p-[8%]">
            <div className="mb-1 flex flex-1 items-center justify-center border-b border-[rgba(0,0,0,0.08)]">
              <div className="h-1 w-4 rounded-full" style={{ backgroundColor: handleColor }} />
            </div>
            <div className="flex flex-1 items-center justify-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: handleColor }} />
              <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: handleColor }} />
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-[2%] left-[28%] h-[24%] w-[22%]"
          style={{
            backgroundColor: cabinetFinish,
            border: '1px solid rgba(0,0,0,0.12)',
            borderRadius: 2,
            boxShadow: '0 2px 6px rgba(0,0,0,0.12)',
          }}
        >
          <div className="flex h-full flex-col p-[8%]">
            <div className="mb-1 flex flex-1 items-center justify-center border-b border-[rgba(0,0,0,0.08)]">
              <div className="h-1 w-4 rounded-full" style={{ backgroundColor: handleColor }} />
            </div>
            <div className="flex flex-1 items-center justify-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: handleColor }} />
              <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: handleColor }} />
            </div>
          </div>
        </div>

        {/* Base cabinet - corner/highlighted (Double 2 Drawer) with orange wireframe */}
        <div
          className="absolute bottom-[2%] right-[4%] h-[24%] w-[38%]"
          style={{
            backgroundColor: cabinetFinish,
            border: '2px solid rgba(236, 78, 11, 0.7)',
            borderRadius: 2,
            boxShadow: '0 0 0 2px rgba(236, 78, 11, 0.25), 0 2px 6px rgba(0,0,0,0.12)',
          }}
        >
          <div className="flex h-full flex-col p-[6%]">
            {/* Two drawers top */}
            <div className="mb-1 flex flex-1 items-center justify-center gap-1 border-b border-[rgba(0,0,0,0.08)]">
              <div className="h-1 w-5 rounded-full" style={{ backgroundColor: handleColor }} />
              <div className="h-1 w-5 rounded-full" style={{ backgroundColor: handleColor }} />
            </div>
            {/* Two doors bottom */}
            <div className="flex flex-1 items-center justify-center gap-4">
              <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: handleColor }} />
              <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: handleColor }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
