export const metadata = {
  title: "关于我们 | 慧清能源",
  description: "慧清能源公司简介、愿景与资质",
};

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="text-2xl sm:text-3xl font-semibold">关于我们</h1>
      <p className="mt-3 text-black/70 text-sm sm:text-base max-w-3xl">
        慧清能源专注光伏逆变器与高效组件的研发与供应，面向分布式与地面电站场景，提供高转换效率、稳定可靠、便捷运维的产品与方案。
      </p>

      <div className="mt-8 grid sm:grid-cols-3 gap-6">
        <div className="p-5 card">
          <div className="text-sm text-black/60">愿景</div>
          <div className="mt-1 font-medium">让清洁能源触手可及</div>
        </div>
        <div className="p-5 card">
          <div className="text-sm text-black/60">优势</div>
          <div className="mt-1 text-sm text-black/70">高效 MPPT、完善并网认证、远程运维平台</div>
        </div>
        <div className="p-5 card">
          <div className="text-sm text-black/60">资质</div>
          <div className="mt-1 text-sm text-black/70">ISO 质量体系、产品多国认证（示例）</div>
        </div>
      </div>
    </div>
  );
}


