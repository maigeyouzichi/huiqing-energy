export default function Home() {
  return (
    <div className="min-h-screen">
      {/* 英雄区域 */}
      <section
        className="relative h-screen flex items-center justify-center bg-white md:bg-none"
        style={{
          backgroundImage: "md:url('/product/background.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {/* 背景遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-blue-800/20 to-gray-900/40 hidden md:block"></div>

        {/* 内容区域 */}
        <div className="relative z-10 text-center text-gray-900 md:text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            慧清能源
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl mb-4 font-light">
            华为逆变器金牌 + 三钻合作伙伴
          </p>
          <p className="text-lg sm:text-xl mb-8 text-gray-600 md:text-gray-200">
            专注光伏逆变器与组件，提供高效、安全、易运维的产品与解决方案
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/download"
              className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              下载资料
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white md:border-white md:text-white md:hover:bg-white md:hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              联系我们
            </a>
          </div>
        </div>
      </section>

      {/* 产品特色区域 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              为什么选择我们
            </h2>
            <p className="text-xl text-gray-600">
              专业的技术团队，优质的产品服务
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 华为合作伙伴 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">华为金牌合作伙伴</h3>
              <p className="text-gray-600">华为逆变器金牌 + 三钻合作伙伴，获得官方认证</p>
            </div>

            {/* 专业技术 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">专业技术支持</h3>
              <p className="text-gray-600">专业的技术团队，提供全方位的技术支持服务</p>
            </div>

            {/* 快速响应 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">快速响应服务</h3>
              <p className="text-gray-600">快速响应的售后服务，及时解决客户问题</p>
            </div>
          </div>
        </div>
      </section>

      {/* 产品展示区域 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              核心产品与服务
            </h2>
            <p className="text-xl text-gray-600">
              提供完整的光伏解决方案
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 产品图片 */}
            <div className="relative">
              <img
                src="/product/product-group.jpeg"
                alt="光伏产品"
                className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* 产品介绍 */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">光伏逆变器与组件</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-600">华为逆变器产品，高效稳定，性能卓越</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-600">优质光伏组件，转换效率高，使用寿命长</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-600">储能系统解决方案，智能管理，安全可靠</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-600">一站式服务，从设计到安装到运维</p>
                </div>
              </div>
              <div className="mt-6">
                <a
                  href="/contact"
                  className="inline-block bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  了解详情
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}