export default function Home() {
  return (
    <div className="min-h-screen">
      {/* 产品展示区域 - 移到最上面 */}
      <section className="pt-16 pb-24 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* 产品图片 */}
            <div className="relative group order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
              <img
                src="/product/product-group.jpeg"
                alt="光伏产品"
                className="relative w-full h-80 sm:h-96 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* 产品介绍 - 优化排版 */}
            <div className="flex flex-col justify-center space-y-8 order-1 lg:order-2">
              {/* 主标题区域 */}
              <div className="text-center lg:text-left">
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
                  慧清能源
                </h3>
                <div className="w-24 sm:w-28 lg:w-32 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto lg:mx-0 mb-8"></div>
              </div>

              {/* 副标题 */}
              {/* <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl text-slate-600 leading-relaxed font-light">
                  专业分布式光伏解决方案专家
                </p>
              </div> */}

              {/* 合作伙伴标识 */}
              <div className="text-center lg:text-left">
                <div className="inline-block bg-gradient-to-r from-emerald-50 to-slate-50 backdrop-blur-sm border border-emerald-200 px-8 py-4 rounded-xl shadow-sm">
                  <p className="text-lg sm:text-xl font-semibold text-slate-800">
                    华为金牌伙伴 · 华为三钻伙伴 · 爱旭银牌代理
                  </p>
                </div>
              </div>

              {/* 按钮区域 */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <a
                  href="/download"
                  className="bg-transparent border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm text-center"
                >
                  下载资料
                </a>
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
                >
                  联系我们
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 产品特色区域 */}
      <section className="py-24 bg-gradient-to-br from-slate-300 via-slate-200 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              为什么选择我们
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              专业的技术团队，优质的产品服务
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 华为合作伙伴 */}
            <div className="text-center p-10 bg-gradient-to-br from-slate-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-emerald-200 group">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">华为金牌合作伙伴</h3>
              <p className="text-slate-600 leading-relaxed text-lg">华为逆变器金牌 + 服务三钻合作伙伴，获得官方认证</p>
            </div>

            <div className="text-center p-10 bg-gradient-to-br from-slate-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-emerald-200 group">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">爱旭组件银牌合作伙伴</h3>
              <p className="text-slate-600 leading-relaxed text-lg">爱旭组件银牌经销商，获得官方认证</p>
            </div>

            {/* 专业技术 */}
            <div className="text-center p-10 bg-gradient-to-br from-slate-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-emerald-200 group">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">专业技术支持</h3>
              <p className="text-slate-600 leading-relaxed text-lg">专业的技术团队，提供全方位的技术支持服务</p>
            </div>

            {/* 快速响应 */}
            <div className="text-center p-10 bg-gradient-to-br from-slate-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-emerald-200 group">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">快速响应服务</h3>
              <p className="text-slate-600 leading-relaxed text-lg">快速响应的售后服务，及时解决客户问题</p>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}