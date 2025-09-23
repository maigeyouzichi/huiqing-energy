export const metadata = {
  title: "下载中心 | 慧清能源",
  description: "产品规格书、安装手册与认证下载",
};

type Doc = { name: string; href: string; category: string };

const docs: Doc[] = [
  { name: "三相并网逆变器 50kW 规格书", href: "/downloads/spec-inverter-50kW.pdf", category: "逆变器" },
  { name: "户用单相逆变器 5kW 规格书", href: "/downloads/spec-inverter-5kW.pdf", category: "逆变器" },
  { name: "高效单晶组件 550W 规格书", href: "/downloads/spec-module-550W.pdf", category: "组件" },
  { name: "高效单晶组件 450W 规格书", href: "/downloads/spec-module-450W.pdf", category: "组件" },
];

export default function DownloadsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="text-2xl sm:text-3xl font-semibold">下载中心</h1>
      <p className="mt-2 text-sm text-black/70">将文件放置到 `public/downloads/` 下后，即可通过下方链接直接下载。</p>
      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        {docs.map((d) => (
          <a key={d.name} className="p-4 card hover:bg-black/[.02]" href={d.href} target="_blank" rel="noopener noreferrer">
            <div className="text-sm text-black/60">{d.category}</div>
            <div className="mt-1 font-medium">{d.name}</div>
          </a>
        ))}
      </div>
    </div>
  );
}


