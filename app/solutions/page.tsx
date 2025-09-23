export const metadata = {
  title: "解决方案 | 慧清能源",
  description: "户用、工商业与地面电站解决方案概览",
};

type Solution = {
  name: string;
  summary: string;
  highlights: string[];
};

const solutions: Solution[] = [
  {
    name: "户用屋顶光伏",
    summary: "静音、高效、安全，适配多种屋顶场景。",
    highlights: ["单相逆变器 3-8kW", "APP 可视化监控", "完善并网认证"],
  },
  {
    name: "工商业分布式",
    summary: "高可靠、运维便捷，助力降本增效。",
    highlights: ["三相逆变器 30-125kW", "多 MPPT", "智能诊断"],
  },
  {
    name: "地面电站",
    summary: "高效率组件与集中运维，降低全生命周期成本。",
    highlights: ["高效单晶组件 450-600W", "运维平台", "快速并网"],
  },
];

export default function SolutionsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="text-2xl sm:text-3xl font-semibold">解决方案</h1>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.map((s) => (
          <div key={s.name} className="p-5 card">
            <div className="font-medium">{s.name}</div>
            <div className="mt-1 text-sm text-black/70">{s.summary}</div>
            <ul className="mt-3 text-sm list-disc list-inside space-y-1 text-black/70">
              {s.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}


