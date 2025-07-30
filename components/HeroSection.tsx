'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Modern%20live%20streaming%20studio%20with%20professional%20lighting%20equipment%2C%20cameras%2C%20and%20streaming%20setup%20in%20a%20bright%20contemporary%20office%20space%20in%20Fukuoka%20Japan%2C%20purple%20and%20blue%20color%20scheme%2C%20high-tech%20atmosphere%2C%20creative%20workspace%20with%20large%20windows%20showing%20city%20view%2C%20sleek%20interior%20design%2C%20digital%20marketing%20company%20office&width=1920&height=1080&seq=fidem-hero-bg&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            福岡から世界へ
            <br />
            <span className="text-purple-400">羽ばたこう</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            ライブ配信クリエイターの夢を現実に。<br />
            FIDEMがあなたの才能を世界に届けます。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#contact" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              今すぐ相談する
            </Link>
            <Link 
              href="#about" 
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              詳しく見る
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="ri-arrow-down-line w-8 h-8 flex items-center justify-center text-white text-2xl"></i>
      </div>
    </section>
  );
}