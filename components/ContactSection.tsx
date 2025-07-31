
'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target;
    if (name === 'message' && value.length > 500) return;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('必須項目をすべて入力してください。');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('送信中...');

    try {
      const response = await fetch('https://readdy.ai/api/form/fidem-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString()
      });

      if (response.ok) {
        setSubmitStatus('お問い合わせありがとうございます。2営業日以内にご連絡いたします。');
        setFormData({
          name: '',
          email: '',
          category: '',
          message: ''
        });
      } else {
        setSubmitStatus('送信に失敗しました。もう一度お試しください。');
      }
    } catch (error) {
      setSubmitStatus('送信に失敗しました。もう一度お試しください。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            お問い合わせ
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            クリエイターとしての第一歩を踏み出しませんか？
            お気軽にご相談ください。無料カウンセリングも実施しています。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">お問い合わせフォーム</h3>

              <form onSubmit={handleSubmit} id="fidem-contact">
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                      placeholder="山田 太郎"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                      placeholder="example@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">ご興味のある分野</label>
                    <div className="relative">
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none pr-8 text-sm"
                      >
                        <option value="">選択してください</option>
                        <option value="gaming">ゲーミング配信</option>
                        <option value="entertainment">エンターテイメント</option>
                        <option value="lifestyle">ライフスタイル</option>
                        <option value="education">教育・学習</option>
                        <option value="music">音楽・アート</option>
                        <option value="ai-web">AIのWeb制作</option>
                        <option value="other">その他</option>
                      </select>
                      <i className="ri-arrow-down-s-line w-5 h-5 flex items-center justify-center absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      メッセージ <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none text-sm"
                      placeholder="ご質問やご相談内容をお聞かせください（500文字以内）"
                      required
                      maxLength={500}
                    />
                    <div className="text-right text-sm text-gray-500 mt-1">
                      {formData.message.length}/500文字
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-300 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 whitespace-nowrap cursor-pointer"
                  >
                    {isSubmitting ? '送信中...' : '送信する'}
                  </button>

                  {submitStatus && (
                    <div
                      className={`p-4 rounded-lg text-sm ${
                        submitStatus.includes('ありがとう')
                          ? 'bg-green-50 text-green-700'
                          : submitStatus.includes('送信中')
                          ? 'bg-blue-50 text-blue-700'
                          : 'bg-red-50 text-red-700'
                      }`}
                    >
                      {submitStatus}
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">会社情報</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 flex items-center justify-center bg-purple-100 rounded-full flex-shrink-0 mt-1">
                    <i className="ri-building-line w-4 h-4 flex items-center justify-center text-purple-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">会社名</h4>
                    <p className="text-gray-600">株式会社FIDEM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 flex items-center justify-center bg-purple-100 rounded-full flex-shrink-0 mt-1">
                    <i className="ri-map-pin-line w-4 h-4 flex items-center justify-center text-purple-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">所在地</h4>
                    <p className="text-gray-600">
                      〒810-0041<br />
                      福岡県福岡市中央区大名1丁目3-41<br />
                      プリオ大名ビル 2F
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 flex items-center justify-center bg-purple-100 rounded-full flex-shrink-0 mt-1">
                    <i className="ri-time-line w-4 h-4 flex items-center justify-center text-purple-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">営業時間</h4>
                    <p className="text-gray-600">
                      平日 9:00 - 18:00<br />
                      土日祝日 休業
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">アクセス</h3>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.4089876543216!2d130.39611531521485!3d33.59073468073045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x354191b6f6e3b7ff%3A0x12345!2z5aSn5ZCN!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="FIDEM所在地"
                ></iframe>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                地下鉄天神南駅から徒歩3分、天神駅から徒歩8分
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
