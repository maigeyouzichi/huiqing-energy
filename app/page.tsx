import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans">
      {/* 全屏 Hero：背景图/视频 + 居中标题/副标题 + 底部三列要点 */}
      <section className="relative w-full h-screen overflow-hidden" style={{ height: '100vh' }}>
        {/* 背景视频（如 /public/hero.mp4 存在则展示，否则忽略） */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* 背景图（如 /public/hero.jpg 存在则可见，不存在时仅显示渐变底色） */}
        <div
          className="absolute inset-0"
          style={{ 
            backgroundImage: "url('/product/product-group.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
            clipPath: "polygon(0 30%, 100% 30%, 100% 100%, 0% 100%)"
          }}
        />
        {/* 渐变遮罩，提升文字对比度 */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent" />

        {/* 中央标题区 */}
        <div className="relative z-10 h-full flex items-start justify-center px-4 sm:px-6 pt-32">
          <div className="max-w-3xl text-center text-black">
            <h1 className="text-[30px] sm:text-[44px] leading-[1.15] font-semibold tracking-tight">
              智能充电网络 / 光伏并网解决方案
            </h1>
            <p className="mt-3 text-base sm:text-lg text-black/80">
              共建高质量、可持续发展的智能能源基础设施
            </p>
            <div className="mt-6 flex gap-3 justify-center">
              <Link href="/solutions" className="px-4 py-2 btn-primary text-sm sm:text-base font-medium">查看方案</Link>
              <Link href="/products" className="px-4 py-2 btn-outline text-sm sm:text-base text-black border-black/30 hover:bg-black/5">查看产品</Link>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
