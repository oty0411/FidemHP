'use client';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            FIDEMについて
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            福岡を拠点に、次世代のライブ配信クリエイターを育成・支援し、
            世界に通用する人材を輩出することを使命としています。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img 
              src="https://readdy.ai/api/search-image?query=Professional%20live%20streaming%20creator%20working%20in%20modern%20studio%20with%20multiple%20cameras%2C%20streaming%20equipment%2C%20LED%20lighting%2C%20and%20professional%20setup%2C%20young%20creative%20person%20broadcasting%20to%20global%20audience%2C%20high-quality%20production%20environment%2C%20Fukuoka%20office%20setting%2C%20inspiring%20and%20professional%20atmosphere&width=600&height=400&seq=fidem-about-1&orientation=landscape"
              alt="ライブ配信クリエイター"
              className="w-full rounded-lg shadow-lg object-cover object-top"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">私たちのミッション</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              デジタル時代において、ライブ配信は最も強力なコミュニケーションツールの一つとなりました。
              FIDEMは、この分野で輝くクリエイターを育成し、福岡から世界へと発信力を届けます。
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 flex items-center justify-center bg-purple-100 rounded-full flex-shrink-0 mt-1">
                  <i className="ri-check-line w-4 h-4 flex items-center justify-center text-purple-600"></i>
                </div>
                <p className="text-gray-700">個々の才能を最大限に引き出すパーソナライズドトレーニング</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 flex items-center justify-center bg-purple-100 rounded-full flex-shrink-0 mt-1">
                  <i className="ri-check-line w-4 h-4 flex items-center justify-center text-purple-600"></i>
                </div>
                <p className="text-gray-700">最新技術とトレンドを活用した配信スキルの向上</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 flex items-center justify-center bg-purple-100 rounded-full flex-shrink-0 mt-1">
                  <i className="ri-check-line w-4 h-4 flex items-center justify-center text-purple-600"></i>
                </div>
                <p className="text-gray-700">グローバル市場への展開をサポートする包括的なマネジメント</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-purple-50 p-8 rounded-xl text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-purple-600 rounded-full mx-auto mb-6">
              <i className="ri-global-line w-8 h-8 flex items-center justify-center text-white"></i>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">グローバル展開</h4>
            <p className="text-gray-600">世界150カ国以上への配信ネットワークを構築し、日本のクリエイターを世界に届けます。</p>
          </div>

          <div className="bg-blue-50 p-8 rounded-xl text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-blue-600 rounded-full mx-auto mb-6">
              <i className="ri-team-line w-8 h-8 flex items-center justify-center text-white"></i>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">プロフェッショナル育成</h4>
            <p className="text-gray-600">業界のエキスパートによる実践的なトレーニングプログラムを提供します。</p>
          </div>

          <div className="bg-green-50 p-8 rounded-xl text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-green-600 rounded-full mx-auto mb-6">
              <i className="ri-rocket-2-line w-8 h-8 flex items-center justify-center text-white"></i>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">イノベーション</h4>
            <p className="text-gray-600">最先端の配信技術とAIを活用した革新的なクリエイター支援を実現します。</p>
          </div>
        </div>
      </div>
    </section>
  );
}