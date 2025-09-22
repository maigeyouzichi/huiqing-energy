export const metadata = {
  title: "产品中心 | 慧清能源",
  description: "光伏逆变器与组件产品一览",
};

type Product = {
  name: string;
  category: "逆变器" | "组件";
  highlights: string[];
};

const products: Product[] = [
  {
    name: "三相并网逆变器 50kW",
    category: "逆变器",
    highlights: ["多路 MPPT", "低谐波并网", "IP66 防护"],
  },
  {
    name: "户用单相逆变器 5kW",
    category: "逆变器",
    highlights: ["静音设计", "宽电压范围", "APP 监控"],
  },
  {
    name: "高效单晶组件 550W",
    category: "组件",
    highlights: ["半片多主栅", "低衰减", "高双面率"],
  },
  {
    name: "高效单晶组件 450W",
    category: "组件",
    highlights: ["高转换效率", "抗 PID", "可靠封装"],
  },
];

export default function ProductsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="text-2xl sm:text-3xl font-semibold">产品中心</h1>
      <p className="mt-2 text-sm text-black/70">
        以下为示例产品与要点，可根据实际型号补充或替换。
      </p>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.name} className="p-5 rounded-xl border border-black/[.06]">
            <div className="text-sm text-black/60">{p.category}</div>
            <div className="mt-1 font-medium">{p.name}</div>
            <ul className="mt-2 text-sm list-disc list-inside space-y-1 text-black/70">
              {p.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}


