export const metadata = {
  title: "产品中心 | 慧清能源",
  description: "光伏逆变器与组件产品一览",
};

type Product = {
  name: string;
  category: "逆变器" | "组件";
  highlights: string[];
  params?: {
    power?: string; // 功率范围/额定功率
    mppt?: string; // MPPT 数量
    efficiency?: string; // 转换效率
    protection?: string; // 防护等级
    size?: string; // 尺寸（组件）
    warranty?: string; // 质保
  };
  datasheetHref?: string; // 规格书下载地址（可放在 public/downloads 下）
};

const products: Product[] = [
  {
    name: "三相并网逆变器 50kW",
    category: "逆变器",
    highlights: ["多路 MPPT", "低谐波并网", "IP66 防护"],
    params: { power: "50kW", mppt: "4", efficiency: ">=98.6%", protection: "IP66", warranty: "5-10年" },
    datasheetHref: "/downloads/spec-inverter-50kW.pdf",
  },
  {
    name: "户用单相逆变器 5kW",
    category: "逆变器",
    highlights: ["静音设计", "宽电压范围", "APP 监控"],
    params: { power: "5kW", mppt: "2", efficiency: ">=97.8%", protection: "IP65", warranty: "5年" },
    datasheetHref: "/downloads/spec-inverter-5kW.pdf",
  },
  {
    name: "高效单晶组件 550W",
    category: "组件",
    highlights: ["半片多主栅", "低衰减", "高双面率"],
    params: { power: "550W", efficiency: "21.3%", size: "2278×1134mm", warranty: "12/25年" },
    datasheetHref: "/downloads/spec-module-550W.pdf",
  },
  {
    name: "高效单晶组件 450W",
    category: "组件",
    highlights: ["高转换效率", "抗 PID", "可靠封装"],
    params: { power: "450W", efficiency: "20.2%", size: "1909×1134mm", warranty: "12/25年" },
    datasheetHref: "/downloads/spec-module-450W.pdf",
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
          <div key={p.name} className="p-5 card">
            <div className="text-sm text-black/60">{p.category}</div>
            <div className="mt-1 font-medium">{p.name}</div>
            <ul className="mt-2 text-sm list-disc list-inside space-y-1 text-black/70">
              {p.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            {p.params && (
              <div className="mt-3 text-xs text-black/60 space-y-1">
                {p.params.power && <div>额定功率：{p.params.power}</div>}
                {p.params.mppt && <div>MPPT 数量：{p.params.mppt}</div>}
                {p.params.efficiency && <div>效率：{p.params.efficiency}</div>}
                {p.params.protection && <div>防护等级：{p.params.protection}</div>}
                {p.params.size && <div>尺寸：{p.params.size}</div>}
                {p.params.warranty && <div>质保：{p.params.warranty}</div>}
              </div>
            )}
            {p.datasheetHref && (
              <a
                href={p.datasheetHref}
                className="mt-3 inline-block text-sm btn-outline px-3 py-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                下载规格书
              </a>
            )}
          </div>
        ))}
      </div>

      {/* 对比表 */}
      <div className="mt-10 overflow-x-auto">
        <h2 className="text-xl font-semibold">产品对比</h2>
        <table className="mt-4 w-full text-sm border border-[var(--color-border)]">
          <thead>
            <tr className="bg-black/[.03]">
              <th className="text-left p-3 border-b border-[var(--color-border)]">型号</th>
              <th className="text-left p-3 border-b border-[var(--color-border)]">类别</th>
              <th className="text-left p-3 border-b border-[var(--color-border)]">功率/效率</th>
              <th className="text-left p-3 border-b border-[var(--color-border)]">MPPT</th>
              <th className="text-left p-3 border-b border-[var(--color-border)]">防护/尺寸</th>
              <th className="text-left p-3 border-b border-[var(--color-border)]">质保</th>
              <th className="text-left p-3 border-b border-[var(--color-border)]">规格书</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.name} className="border-t border-[var(--color-border)]">
                <td className="p-3">{p.name}</td>
                <td className="p-3">{p.category}</td>
                <td className="p-3">
                  {p.params?.power || "-"}
                  {p.params?.efficiency ? ` / ${p.params.efficiency}` : ""}
                </td>
                <td className="p-3">{p.params?.mppt || (p.category === "组件" ? "-" : "-")}</td>
                <td className="p-3">
                  {p.params?.protection || p.params?.size || "-"}
                </td>
                <td className="p-3">{p.params?.warranty || "-"}</td>
                <td className="p-3">
                  {p.datasheetHref ? (
                    <a href={p.datasheetHref} className="underline" target="_blank" rel="noopener noreferrer">下载</a>
                  ) : (
                    "-"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-2 text-xs text-black/60">
          温馨提示：请将规格书 PDF 放到 `public/downloads/` 目录，例如 `public/downloads/spec-inverter-50kW.pdf`。
        </p>
      </div>
    </div>
  );
}


