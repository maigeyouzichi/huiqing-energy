export const metadata = {
  title: "联系我们 | 慧清能源",
  description: "商务合作与技术支持联系方式",
};

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="text-2xl sm:text-3xl font-semibold">联系我们</h1>
      <div className="mt-6 grid sm:grid-cols-2 gap-6">
        <div className="p-5 card">
          <div className="text-sm text-black/60">售前咨询</div>
          <div className="mt-1 font-medium">张经理 137 7508 3275</div>
        </div>
        <div className="p-5 card">
          <div className="text-sm text-black/60">技术服务</div>
          <div className="mt-1 font-medium">李工 152 9875 7331</div>
        </div>
        <div className="p-5 card sm:col-span-2">
          <div className="text-sm text-black/60">公司地址</div>
          <div className="mt-1 text-sm text-black/70">江苏省徐州市泉山区集群路网易联合创新中心206室</div>
        </div>
      </div>
    </div>
  );
}


