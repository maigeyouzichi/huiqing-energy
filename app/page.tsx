import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-10">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
          高效可靠的光伏逆变器与组件供应商
        </h1>
        <p className="mt-4 text-base sm:text-lg text-black/70 max-w-2xl">
          慧清能源致力于为分布式与地面电站提供高转换效率、稳定耐用、便捷运维的光伏产品解决方案。
        </p>
        <div className="mt-6 flex gap-3">
          <Link href="/products" className="px-4 py-2 rounded-md bg-foreground text-background text-sm sm:text-base font-medium hover:opacity-90">查看产品</Link>
          <a href="#contact" className="px-4 py-2 rounded-md border border-black/[.12] text-sm sm:text-base hover:bg-black/[.04]">联系我们</a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid sm:grid-cols-3 gap-6">
        <div className="p-5 rounded-xl border border-black/[.06]">
          <div className="text-lg font-semibold">高转换效率</div>
          <div className="mt-2 text-sm text-black/70">多路 MPPT、优化功率曲线，提升整体发电量。</div>
        </div>
        <div className="p-5 rounded-xl border border-black/[.06]">
          <div className="text-lg font-semibold">稳定与安全</div>
          <div className="mt-2 text-sm text-black/70">全链路保护与并网认证，适应各类电网环境。</div>
        </div>
        <div className="p-5 rounded-xl border border-black/[.06]">
          <div className="text-lg font-semibold">便捷运维</div>
          <div className="mt-2 text-sm text-black/70">可视化监控与远程升级，降低运维成本。</div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold">热门产品</h2>
          <Link href="/products" className="text-sm text-black/70 hover:underline">全部产品</Link>
        </div>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "三相并网逆变器 50kW", desc: "高效并网、低谐波、支持多路 MPPT。" },
            { name: "户用单相逆变器 5kW", desc: "静音设计，适合家庭屋顶光伏系统。" },
            { name: "高效单晶组件 550W", desc: "半片多主栅，高双面率与低衰减。" },
          ].map((p) => (
            <div key={p.name} className="p-5 rounded-xl border border-black/[.06]">
              <div className="font-medium">{p.name}</div>
              <div className="mt-1 text-sm text-black/70">{p.desc}</div>
              <Link href="/products" className="mt-3 inline-block text-sm text-foreground hover:underline">了解更多</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
