'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-purple-600" style={{fontFamily: '"Pacifico", serif'}}>
            FIDEM
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="#about" className="text-gray-600 hover:text-purple-600 transition-colors cursor-pointer">
              会社概要
            </Link>
            <Link href="#services" className="text-gray-600 hover:text-purple-600 transition-colors cursor-pointer">
              サービス
            </Link>
            <Link href="#creators" className="text-gray-600 hover:text-purple-600 transition-colors cursor-pointer">
              クリエイター
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-purple-600 transition-colors cursor-pointer">
              お問い合わせ
            </Link>
          </nav>

          <button className="md:hidden p-2">
            <i className="ri-menu-line w-6 h-6 flex items-center justify-center text-gray-600"></i>
          </button>
        </div>
      </div>
    </header>
  );
}