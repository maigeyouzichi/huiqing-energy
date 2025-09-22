export function Footer() {
  return (
    <footer className="mt-16 border-t border-black/[.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 text-sm text-black/70">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="font-semibold text-black">慧清能源</div>
            <div className="mt-1">专注光伏逆变器与组件的可靠供应商</div>
          </div>
          <div className="space-y-1" id="contact">
            <div>商务合作：sales@huiqing-energy.com</div>
            <div>技术支持：support@huiqing-energy.com</div>
            <div>地址：上海市浦东新区（示例，可自行修改）</div>
          </div>
        </div>
        <div className="mt-6 text-xs">© {new Date().getFullYear()} 慧清能源. 保留所有权利。</div>
      </div>
    </footer>
  );
}


