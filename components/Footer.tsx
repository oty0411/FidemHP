
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-purple-400 mb-4" style={{fontFamily: 'Pacifico, serif'}}>
              FIDEM
            </h3>
            <p className="text-gray-300 leading-relaxed">
              福岡から世界へ羽ばたく<br />
              ライブ配信クリエイターを育成
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">サービス</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="#" className="hover:text-purple-400 transition-colors cursor-pointer">クリエイター育成</Link></li>
              <li><Link href="#" className="hover:text-purple-400 transition-colors cursor-pointer">配信技術指導</Link></li>
              <li><Link href="#" className="hover:text-purple-400 transition-colors cursor-pointer">マネジメント</Link></li>
              <li><Link href="#" className="hover:text-purple-400 transition-colors cursor-pointer">AIのWeb制作</Link></li>
              <li><Link href="#" className="hover:text-purple-400 transition-colors cursor-pointer">グローバル展開</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">会社情報</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="#" className="hover:text-purple-400 transition-colors cursor-pointer">会社概要</Link></li>
              <li><Link href="#" className="hover:text-purple-400 transition-colors cursor-pointer">採用情報</Link></li>
              <li><Link href="#" className="hover:text-purple-400 transition-colors cursor-pointer">ニュース</Link></li>
              <li><Link href="#" className="hover:text-purple-400 transition-colors cursor-pointer">お問い合わせ</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 FIDEM. All rights reserved.</p>
          <p className="mt-2">〒810-0041 福岡県福岡市中央区大名1丁目3-41</p>
        </div>
      </div>
    </footer>
  );
}
