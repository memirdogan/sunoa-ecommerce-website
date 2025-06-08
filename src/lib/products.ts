import { Product, Brand } from '@/types';

export const brands: Brand[] = [
  {
    id: 'sunoa-protect',
    name: 'Sunoa Protect',
    logo: '/images/logo/sunoa.png'
  },
  {
    id: 'sunoa-face',
    name: 'Sunoa Face',
    logo: '/images/logo/sunoa.png'
  },
  {
    id: 'sunoa-kids',
    name: 'Sunoa Kids',
    logo: '/images/logo/sunoa.png'
  },
  {
    id: 'sunoa-active',
    name: 'Sunoa Active',
    logo: '/images/logo/sunoa.png'
  }
];

export const products: Product[] = [
  {
    id: 'sunoa-sunscreen-face-cream-spf50-plus',
    name: 'Yüz İçin Güneş Kremi SPF50+',
    brand: 'Sunoa Face',
    description: 'Yüz cildi için özel formüllü, ince dokulu ve yüksek koruma faktörlü güneş kremi.',
    price: 650,
    images: [
      '/images/product-images/sunoa-sunscreen-face-cream-spf50-plus.jpeg',
      '/images/product-images/sunoa-sunscreen-face-cream-spf50-plus-second.jpeg'
    ],
    category: 'new-arrivals',
    featured: true,
    new: true,
    features: [
      'SPF50+ yüksek koruma faktörü',
      'Yağsız ve hafif formül',
      'Suya dayanıklı yapı',
      'Ciltte beyaz iz bırakmaz',
      'Hassas ciltler için uygun'
    ],
    usage: 'Güneşe çıkmadan 20 dakika önce cildinize eşit miktarda uygulayın. Uzun süre güneşte kalacaksanız 2 saatte bir tekrar uygulayın.',
    ingredients: 'Aqua, Homosalate, Ethylhexyl Salicylate, Butyl Methoxydibenzoylmethane, Octocrylene, Alcohol Denat., Glycerin, Propanediol, C12-15 Alkyl Benzoate, Dicaprylyl Carbonate, Tocopheryl Acetate, Panthenol, Diethylhexyl Butamido Triazone, Phenylbenzimidazole Sulfonic Acid, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Sodium Hydroxide, Trisodium EDTA, Parfum.',
    size: '50ml',
    stock: 25
  },
  {
    id: 'sunoa-sunscreen-face-mist-spf30',
    name: 'Yüz İçin Güneş Spreyi SPF30',
    brand: 'Sunoa Face',
    description: 'Yüz cildi için ferahlatıcı, makyaj üzerine uygulanabilen sprey formülü.',
    price: 580,
    images: [
      '/images/product-images/sunoa-sunscreen-face-mist-spf30.jpeg',
      '/images/product-images/sunoa-sunscreen-face-mist-spf30-second.jpeg'
    ],
    category: 'best-sellers',
    featured: true,
    features: [
      'SPF30 orta seviye koruma',
      'Makyaj üzerine uygulanabilir',
      'Ferahlatıcı formül',
      'Taşınabilir boyut',
      'Hızlı emilim'
    ],
    usage: 'Makyajlı veya makyajsız yüze 20-30 cm uzaklıktan sıkın. Gün içinde korumayı tazelemek için tekrar uygulayabilirsiniz.',
    ingredients: 'Aqua, Alcohol Denat., Dibutyl Adipate, Diethylamino Hydroxybenzoyl Hexyl Benzoate, Ethylhexyl Triazone, C12-15 Alkyl Benzoate, Glycerin, Phenylbenzimidazole Sulfonic Acid, Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine, Panthenol, Tocopheryl Acetate, Parfum.',
    size: '75ml',
    stock: 18
  },
  {
    id: 'sunoa-sunscreen-body-spray-spf30',
    name: 'Vücut İçin Güneş Spreyi SPF30',
    brand: 'Sunoa Protect',
    description: 'Kolay uygulanan sprey formülüyle tüm vücut için etkili güneş koruması.',
    price: 450,
    images: [
      '/images/product-images/sunoa-sunscreen-body-spray-spf30.jpeg',
      '/images/product-images/sunoa-sunscreen-body-spray-spf30-second.jpeg'
    ],
    category: 'trending',
    featured: true,
    features: [
      'SPF30 orta seviye koruma',
      'Hızlı kuruyan formül',
      'Suya ve tere dayanıklı',
      'Kolay uygulama',
      'Nemlendiricili içerik'
    ],
    usage: 'Güneşe çıkmadan 15-20 dakika önce vücudunuza eşit miktarda püskürtün. Uzun süre güneşte kalacaksanız 2 saatte bir tekrar uygulayın.',
    ingredients: 'Aqua, Alcohol Denat., Homosalate, Octocrylene, Ethylhexyl Salicylate, Butyl Methoxydibenzoylmethane, Glycerin, Diethylhexyl Butamido Triazone, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Parfum, Tocopherol, Aloe Barbadensis Leaf Juice.',
    size: '200ml',
    stock: 30
  },
  {
    id: 'sunoa-sunscreen-for-kids-spf50-plus',
    name: 'Çocuklar İçin Güneş Kremi SPF50+',
    brand: 'Sunoa Kids',
    description: 'Hassas çocuk cildi için özel formüllü, suya dayanıklı güneş koruyucu.',
    price: 380,
    images: [
      '/images/product-images/sunoa-sunscreen-for-kids-spf50-plus.jpeg',
      '/images/product-images/sunoa-sunscreen-for-kids-spf50-plus-second.jpeg'
    ],
    category: 'best-sellers',
    featured: true,
    new: true,
    features: [
      'SPF50+ yüksek koruma faktörü',
      'Hassas ciltler için uygun',
      'Suya ve kuma dayanıklı',
      'Paraben ve alkol içermez',
      'Göz yakmayan formül'
    ],
    usage: 'Çocuğunuzun cildine güneşe çıkmadan 20-30 dakika önce bolca uygulayın. Suya girme veya havlu ile kurulanma sonrası tekrar uygulayın.',
    ingredients: 'Aqua, Homosalate, Ethylhexyl Salicylate, Butyl Methoxydibenzoylmethane, Octocrylene, Glycerin, C12-15 Alkyl Benzoate, Titanium Dioxide, Panthenol, Aloe Barbadensis Leaf Juice, Tocopheryl Acetate, Chamomilla Recutita Flower Extract.',
    size: '150ml',
    stock: 22
  },
  {
    id: 'sunoa-after-run-soothing-lotion',
    name: 'After Sun Nemlendirici Losyon',
    brand: 'Sunoa Active',
    description: 'Güneş sonrası cildi yatıştıran ve nemlendiren bakım losyonu.',
    price: 420,
    images: [
      '/images/product-images/sunoa-after-run-soothing-lotion.jpeg',
      '/images/product-images/sunoa-after-run-soothing-lotion-second.jpeg'
    ],
    category: 'new-arrivals',
    featured: true,
    new: true,
    features: [
      'Güneş sonrası cilt bakımı',
      'Yoğun nemlendirme',
      'Aloe vera içerikli',
      'Yatıştırıcı etki',
      'Hızlı emilim'
    ],
    usage: 'Güneşlendikten sonra temiz cilde eşit miktarda uygulayın. Gerektiğinde gün içinde tekrarlayabilirsiniz.',
    ingredients: 'Aqua, Glycerin, Aloe Barbadensis Leaf Juice, Butylene Glycol, Panthenol, Allantoin, Sodium Hyaluronate, Tocopheryl Acetate, Chamomilla Recutita Flower Extract, Calendula Officinalis Flower Extract, Parfum.',
    size: '200ml',
    stock: 15
  },
  {
    id: 'sunoa-tinted-sunscreen-spf50',
    name: 'Renkli Güneş Kremi SPF50',
    brand: 'Sunoa Face',
    description: 'Hafif ton veren, makyaj bazı olarak da kullanılabilen güneş kremi.',
    price: 620,
    images: [
      '/images/product-images/sunoa-tinted-sunscreen-spf50.jpeg',
      '/images/product-images/sunoa-tinted-sunscreen-spf50-second.jpeg'
    ],
    category: 'trending',
    featured: true,
    features: [
      'SPF50 yüksek koruma faktörü',
      'Hafif renk tonu',
      'Makyaj bazı olarak kullanılabilir',
      'Yağsız formül',
      'Ciltte doğal görünüm'
    ],
    usage: 'Temiz cilde eşit miktarda uygulayın. Makyaj bazı olarak veya tek başına kullanılabilir. Güneşe çıkmadan 15-20 dakika önce uygulanması önerilir.',
    ingredients: 'Aqua, Homosalate, Ethylhexyl Salicylate, Butyl Methoxydibenzoylmethane, Octocrylene, Silica, Titanium Dioxide, Iron Oxides, Glycerin, Dimethicone, Niacinamide, Tocopheryl Acetate, Sodium Hyaluronate.',
    size: '40ml',
    stock: 20
  },
  {
    id: 'sunoa-bronzlastirici-gunes-yagi-spf15',
    name: 'Bronzlaştırıcı Güneş Yağı SPF15',
    brand: 'Sunoa Protect',
    description: 'Eşsiz bronzlaşma etkisi sunan, cildi besleyen güneş yağı.',
    price: 550,
    images: [
      '/images/product-images/sunoa-bronzlastirici-gunes-yagi-spf15.jpeg',
      '/images/product-images/sunoa-bronzlastirici-gunes-yagi-spf15-second.jpeg'
    ],
    category: 'best-sellers',
    featured: true,
    features: [
      'SPF15 hafif koruma faktörü',
      'Hızlı bronzlaşma etkisi',
      'Besleyici yağ formülü',
      'Parlak ve sağlıklı görünüm',
      'E vitamini içerikli'
    ],
    usage: 'Güneşe çıkmadan 15 dakika önce vücudunuza eşit miktarda uygulayın. Düzenli aralıklarla tekrar uygulayın. Yüz bölgesinde kullanmayınız.',
    ingredients: 'Caprylic/Capric Triglyceride, Homosalate, Octocrylene, Ethylhexyl Salicylate, Butyl Methoxydibenzoylmethane, Cocos Nucifera Oil, Tocopheryl Acetate, Parfum, Helianthus Annuus Seed Oil, Beta-Carotene.',
    size: '150ml',
    stock: 12
  },
  {
    id: 'sunoa-lip-protect-balm-spf30',
    name: 'Dudak Koruyucu Balm SPF30',
    brand: 'Sunoa Active',
    description: 'Dudakları güneşin zararlı etkilerinden koruyan, nemlendirici balm.',
    price: 180,
    images: [
      '/images/product-images/sunoa-lip-protect-balm-spf30.jpeg',
      '/images/product-images/sunoa-lip-protect-balm-spf30-second.jpeg'
    ],
    category: 'trending',
    featured: true,
    new: true,
    features: [
      'SPF30 orta seviye koruma',
      'Yoğun nemlendirme',
      'Çatlak dudaklar için onarım',
      'Taşınabilir boyut',
      'Renksiz formül'
    ],
    usage: 'Güneşe çıkmadan önce ve gün içinde düzenli olarak dudaklarınıza uygulayın. Özellikle yüzme sonrası tekrar uygulanması önerilir.',
    ingredients: 'Ricinus Communis Seed Oil, Cera Alba, Butyl Methoxydibenzoylmethane, Octocrylene, Ethylhexyl Salicylate, Butyrospermum Parkii Butter, Theobroma Cacao Seed Butter, Tocopheryl Acetate, Bisabolol, Aroma.',
    size: '15ml',
    stock: 35
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};[] => {
  return products.filter(product => product.featured);
};

export const getNewArrivals = (): Product[] => {
  return products.filter(product => product.new);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'all') return products;
  return products.filter(product => product.category === category || product.category === 'all');
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};