export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-900 mb-6 tracking-tight">联系我们</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">我们期待与您合作，为您提供专业的光伏解决方案</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* 联系信息 */}
          <div className="space-y-8">
            {/* 公司信息 */}
            <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-xl p-10 border border-slate-200 hover:shadow-2xl transition-all duration-300">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">公司信息</h2>
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">公司地址</h3>
                    <p className="text-slate-600 text-lg leading-relaxed">江苏省徐州市泉山区集群路网易联合创新中心206室</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-3">联系电话</h3>
                    <div className="space-y-2">
                      <p className="text-slate-600 text-lg leading-relaxed">
                        <span className="font-semibold text-emerald-600">售前咨询：</span>张经理 137 7508 3275
                      </p>
                      <p className="text-slate-600 text-lg leading-relaxed">
                        <span className="font-semibold text-emerald-600">技术服务：</span>李工 152 9875 7331
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
