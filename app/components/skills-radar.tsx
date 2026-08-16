import { skills } from '../data/skills';

const SIZE = 300;
const CENTER = SIZE / 2;
const MAX_RADIUS = 110;
const MAX_SCORE = 5;

function getPoint(index: number, total: number, value: number) {
  const angle = (Math.PI * 2 * index) / total - Math.PI / 2;
  const radius = (value / MAX_SCORE) * MAX_RADIUS;
  return {
    x: CENTER + radius * Math.cos(angle),
    y: CENTER + radius * Math.sin(angle),
  };
}

function getLabelPoint(index: number, total: number) {
  const angle = (Math.PI * 2 * index) / total - Math.PI / 2;
  const radius = MAX_RADIUS + 24;
  return {
    x: CENTER + radius * Math.cos(angle),
    y: CENTER + radius * Math.sin(angle),
  };
}

export function SkillsRadar() {
  const total = skills.length;

  const dataPoints = skills
    .map((s, i) => {
      const p = getPoint(i, total, s.proficiency);
      return `${p.x},${p.y}`;
    })
    .join(' ');

  // concentric grid rings at 20/40/60/80/100%
  const rings = [0.2, 0.4, 0.6, 0.8, 1].map((fraction) => {
    const points = skills
      .map((_, i) => {
        const p = getPoint(i, total, MAX_SCORE * fraction);
        return `${p.x},${p.y}`;
      })
      .join(' ');
    return points;
  });

  return (
    <section>
      <h2 className="mb-4 text-xl font-medium">Skills</h2>
      <div className="flex justify-center">
        <svg width={SIZE} height={SIZE + 20} viewBox={`0 0 ${SIZE} ${SIZE + 20}`}>
          {/* grid rings */}
          {rings.map((points, i) => (
            <polygon
              key={i}
              points={points}
              fill="none"
              stroke="#e5e5e5"
              strokeWidth={1}
            />
          ))}

          {/* axis lines */}
          {skills.map((_, i) => {
            const p = getPoint(i, total, MAX_SCORE);
            return (
              <line
                key={i}
                x1={CENTER}
                y1={CENTER}
                x2={p.x}
                y2={p.y}
                stroke="#e5e5e5"
                strokeWidth={1}
              />
            );
          })}

          {/* data shape */}
          <polygon
            points={dataPoints}
            fill="black"
            fillOpacity={0.15}
            stroke="black"
            strokeWidth={2}
          />

          {/* labels */}
          {skills.map((s, i) => {
            const p = getLabelPoint(i, total);
            return (
              <text
                key={s.name}
                x={p.x}
                y={p.y}
                fontSize={11}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#525252"
              >
                {s.name}
              </text>
            );
          })}
        </svg>
      </div>
    </section>
  );
}