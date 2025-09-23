export default function Home() {
  return (
    <div className="min-h-screen">
      {/* 英雄区域 */}
      <section
        className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 md:bg-none"
        style={{
          backgroundImage: "md:url('/product/background.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {/* 背景遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-blue-800/20 to-gray-900/40 hidden md:block"></div>

        {/* 内容区域 */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
              慧清能源
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-8"></div>
          </div>

          <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 rounded-lg mb-8">
            <p className="text-xl sm:text-2xl font-semibold text-white">
              华为逆变器金牌 + 三钻合作伙伴
            </p>
          </div>

          <p className="text-xl sm:text-2xl mb-12 text-slate-200 max-w-4xl mx-auto leading-relaxed font-light">
            专注光伏逆变器与组件，提供高效、安全、易运维的产品与解决方案
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/download"
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-10 py-4 rounded-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              下载资料
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-10 py-4 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm"
            >
              联系我们
            </a>
          </div>
        </div>
      </section>

      {/* 产品特色区域 */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              为什么选择我们
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              专业的技术团队，优质的产品服务
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 华为合作伙伴 */}
            <div className="text-center p-10 bg-gradient-to-br from-slate-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-amber-200 group">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">华为金牌合作伙伴</h3>
              <p className="text-slate-600 leading-relaxed text-lg">华为逆变器金牌 + 三钻合作伙伴，获得官方认证</p>
            </div>

            {/* 专业技术 */}
            <div className="text-center p-10 bg-gradient-to-br from-slate-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-amber-200 group">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">专业技术支持</h3>
              <p className="text-slate-600 leading-relaxed text-lg">专业的技术团队，提供全方位的技术支持服务</p>
            </div>

            {/* 快速响应 */}
            <div className="text-center p-10 bg-gradient-to-br from-slate-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-amber-200 group">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">快速响应服务</h3>
              <p className="text-slate-600 leading-relaxed text-lg">快速响应的售后服务，及时解决客户问题</p>
            </div>
          </div>
        </div>
      </section>

      {/* 产品展示区域 */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              核心产品与服务
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              提供完整的光伏解决方案
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 产品图片 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
              <img
                src="/product/product-group.jpeg"
                alt="光伏产品"
                className="relative w-full h-80 sm:h-96 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* 产品介绍 */}
            <div className="flex flex-col justify-center space-y-8">
              <div>
                <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">光伏逆变器与组件</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mb-8"></div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="w-3 h-3 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                  <p className="text-slate-600 leading-relaxed text-lg">华为逆变器产品，高效稳定，性能卓越</p>
                </div>
                <div className="flex items-start group">
                  <div className="w-3 h-3 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                  <p className="text-slate-600 leading-relaxed text-lg">优质光伏组件，转换效率高，使用寿命长</p>
                </div>
                <div className="flex items-start group">
                  <div className="w-3 h-3 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                  <p className="text-slate-600 leading-relaxed text-lg">储能系统解决方案，智能管理，安全可靠</p>
                </div>
                <div className="flex items-start group">
                  <div className="w-3 h-3 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                  <p className="text-slate-600 leading-relaxed text-lg">一站式服务，从设计到安装到运维</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}