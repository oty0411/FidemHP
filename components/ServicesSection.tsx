
'use client';

export default function ServicesSection() {
  const services = [
    {
      title: "クリエイター育成プログラム",
      description: "配信スキル、エンターテイメント性、ファンコミュニティ構築まで、プロフェッショナルなクリエイターになるための包括的な育成プログラム",
      features: ["パーソナライズドコーチング", "実践的ワークショップ", "メンタリングサポート"],
      icon: "ri-user-star-line",
      color: "purple"
    },
    {
      title: "技術サポート・機材提供",
      description: "最高品質の配信を実現するための最新機材の提供と技術的なサポートを行います",
      features: ["プロ仕様の配信機材", "スタジオ利用", "技術サポート24/7"],
      icon: "ri-live-line",
      color: "blue"
    },
    {
      title: "マネジメント・プロモーション",
      description: "ブランディングから収益化まで、クリエイターの成功をトータルでサポートします",
      features: ["ブランドマネジメント", "スポンサー獲得", "収益最適化"],
      icon: "ri-bar-chart-box-line",
      color: "green"
    },
    {
      title: "AIのWeb制作",
      description: "最先端のAI技術を活用したクリエイター向けWebサイト制作サービスを提供します",
      features: ["AIによる自動デザイン", "レスポンシブ対応", "SEO最適化"],
      icon: "ri-code-s-slash-line",
      color: "indigo"
    },
    {
      title: "グローバル展開支援",
      description: "海外プラットフォームでの配信サポートや多言語対応など、世界市場への展開をサポート",
      features: ["多言語サポート", "海外プラットフォーム対応", "国際的なパートナーシップ"],
      icon: "ri-earth-line",
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'purple':
        return { bg: 'bg-purple-50', iconBg: 'bg-purple-600', text: 'text-purple-600' };
      case 'blue':
        return { bg: 'bg-blue-50', iconBg: 'bg-blue-600', text: 'text-blue-600' };
      case 'green':
        return { bg: 'bg-green-50', iconBg: 'bg-green-600', text: 'text-green-600' };
      case 'indigo':
        return { bg: 'bg-indigo-50', iconBg: 'bg-indigo-600', text: 'text-indigo-600' };
      case 'orange':
        return { bg: 'bg-orange-50', iconBg: 'bg-orange-600', text: 'text-orange-600' };
      default:
        return { bg: 'bg-gray-50', iconBg: 'bg-gray-600', text: 'text-gray-600' };
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            私たちのサービス
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            クリエイターの成功を支える5つの柱となるサービスで、
            あなたの夢の実現をトータルサポートします。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            return (
              <div key={index} className={`${colors.bg} p-8 rounded-xl hover:shadow-lg transition-all duration-300`}>
                <div className="flex items-start space-x-6">
                  <div className={`w-16 h-16 flex items-center justify-center ${colors.iconBg} rounded-xl flex-shrink-0`}>
                    <i className={`${service.icon} w-8 h-8 flex items-center justify-center text-white`}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <i className={`ri-check-line w-5 h-5 flex items-center justify-center ${colors.text}`}></i>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">成功への道筋</h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                FIDEMでは、クリエイター一人ひとりの個性と目標に合わせたオーダーメイドの成長プランを提供。
                入門から世界デビューまで、段階的にサポートします。
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-purple-600 text-white rounded-full font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">初期評価・目標設定</h4>
                    <p className="text-gray-600">現在のスキルレベルを評価し、個別の成長プランを作成</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-purple-600 text-white rounded-full font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">集中トレーニング</h4>
                    <p className="text-gray-600">プロのコーチによる実践的なスキルアップ指導</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-purple-600 text-white rounded-full font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">デビュー・成長支援</h4>
                    <p className="text-gray-600">配信デビューから継続的な成長をマネジメントでサポート</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20live%20streaming%20training%20session%20in%20modern%20studio%2C%20experienced%20mentor%20coaching%20young%20creator%2C%20multiple%20monitors%20showing%20streaming%20analytics%2C%20professional%20lighting%20setup%2C%20collaborative%20learning%20environment%2C%20high-tech%20training%20facility%20in%20Fukuoka%2C%20inspiring%20educational%20atmosphere&width=600&height=400&seq=fidem-services-1&orientation=landscape"
                alt="トレーニング風景"
                className="w-full rounded-lg shadow-lg object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
