
'use client';

export default function CreatorsSection() {
  const creators = [
    {
      name: "RIKU",
      category: "俳優エンターテイメント",
      followers: "35万",
      description: "多様なコンテンツで幅広い層から支持を集める人気クリエイター。NETFLIX（地面師）、バラエティまで幅広くカバーし、独自の視点で世界中のファンを魅了している。",
      achievements: ["自社でコンテンツ展開", "台湾でイベント多数", "国際的なファンベース構築"],
      image: "https://i.pinimg.com/736x/0f/fb/d8/0ffbd84397269bc27b2ba39e2a1a4930.jpg"
    },
    {
      name: "AI",
      category: "ライフスタイル・エンターテイメント",
      followers: "220万",
      description: "ビジネスコンテンツを中心に、日常の魅力を世界に発信するクリエイター。親しみやすいキャラクターと質の高いコンテンツで多くのファンから愛されている。",
      achievements: ["国内外へ飲食店立ち上げ", "書籍・写真集出版", "メディア出演多数"],
      image: "https://news.futabanet.jp/img/img_5d4c2bb1ddb746ccc203aaa63a8868f4129696.jpg"
    },
    {
      name: "GENJIN",
      category: "教育・バラエティ",
      followers: "45万",
      description: "男女をテーマにしたユニークなコンテンツで注目を集めるクリエイター。韓国でバラエティ番組を持ち、日本のTVや大学でも知識を楽しく伝え、新しいジャンルを開拓している。",
      achievements: ["性教育番組監修", "愛の技術指導", "環境保護活動参加"],
      image: "https://teket.jp/data/flyer/10185/e5PIo296Qv.jpg?t=1643738597"
    }
  ];

  const stats = [
    { number: "500+", label: "育成クリエイター" },
    { number: "1.2億", label: "総視聴者数" },
    { number: "45", label: "国・地域へ配信" },
    { number: "98%", label: "継続率" }
  ];

  return (
    <section id="creators" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            講師クリエイター
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            FIDEMで育成され、世界で活躍するクリエイターたちをご紹介します。
            彼らの成功があなたの可能性を証明しています。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {creators.map((creator, index) => (
            <div key={index} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="aspect-w-3 aspect-h-4">
                <img 
                  src={creator.image}
                  alt={creator.name}
                  className="w-full h-64 object-cover object-top"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{creator.name}</h3>
                  <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                    {creator.category}
                  </span>
                </div>

                <div className="flex items-center mb-4">
                  <i className="ri-user-follow-line w-5 h-5 flex items-center justify-center text-purple-600 mr-2"></i>
                  <span className="text-gray-600">フォロワー: {creator.followers}人</span>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{creator.description}</p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">主な実績:</h4>
                  {creator.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-center space-x-2">
                      <i className="ri-trophy-line w-4 h-4 flex items-center justify-center text-yellow-500"></i>
                      <span className="text-sm text-gray-600">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 md:p-12 rounded-2xl text-center text-white">
          <h3 className="text-3xl font-bold mb-6">あなたも次の成功者に</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            才能を持つあなたを、世界で活躍するクリエイターへと導きます。
            まずは無料カウンセリングから始めませんか？
          </p>
          <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer">
            無料相談を申し込む
          </button>
        </div>
      </div>
    </section>
  );
}
