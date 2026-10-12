import { PENDING } from '../content/site';

export const uz = {
  langName: 'Oʻzbekcha',
  pending: 'Aniqlanmoqda',
  meta: {
    title: 'Polimine — polipropilen granulalari ishlab chiqaruvchi',
    description:
      'Polimine 1-sort va 2-sort polipropilen granulalarini ishlab chiqaradi va korxonalarga ulgurji yetkazib beradi.',
  },
  nav: {
    label: 'Asosiy menyu',
    about: 'Korxona',
    products: 'Mahsulotlar',
    process: 'Ishlab chiqarish',
    terms: 'Shartlar',
    contact: 'Aloqa',
  },
  hero: {
    eyebrow: 'Polipropilen granulalari',
    title: 'Ishlab chiqarish uchun polipropilen granulalari',
    lead: 'Polimine 1-sort va 2-sort polipropilen granulalarini ishlab chiqaradi va korxonalarga ulgurji yetkazib beradi.',
    cta: 'Bogʻlanish',
    secondary: 'Mahsulotlarni koʻrish',
  },
  about: {
    title: 'Korxona haqida',
    text: [
      'Polimine — polipropilen granulalarini ishlab chiqarishga ixtisoslashgan korxona.',
      'Biz plastmassa buyumlar ishlab chiqaruvchi korxonalarni ikki sortdagi granula bilan taʼminlaymiz.',
    ],
    facts: {
      founded: 'Faoliyat boshlangan yil',
      capacity: 'Ishlab chiqarish quvvati',
      location: 'Joylashuv',
    },
    capacity: PENDING,
    location: PENDING,
  },
  products: {
    title: 'Mahsulotlar',
    intro:
      'Ikki sortdagi polipropilen granulasi. Narx va mavjud hajm boʻyicha maʼlumotni soʻrov orqali olishingiz mumkin.',
    ask: 'Narxni soʻrash',
    specs: {
      mfi: 'Eritma oquvchanligi (PTR), g/10 daq',
      density: 'Zichlik, g/sm³',
      moisture: 'Namlik, %',
      color: 'Rangi',
      packaging: 'Qadoq',
    },
    grades: {
      grade1: {
        name: '1-sort granula',
        summary: 'Sifatga talab yuqori boʻlgan buyumlar uchun.',
        color: PENDING,
        packaging: PENDING,
      },
      grade2: {
        name: '2-sort granula',
        summary: 'Narx muhim boʻlgan buyumlar uchun tejamkor tanlov.',
        color: PENDING,
        packaging: PENDING,
      },
    },
  },
  process: {
    title: 'Ishlab chiqarish',
    steps: [
      {
        title: 'Xomashyoni tayyorlash',
        text: 'Xomashyo saralanadi va ishlab chiqarishga tayyorlanadi.',
      },
      {
        title: 'Ekstruziya',
        text: 'Material eritiladi va bir jinsli massaga keltiriladi.',
      },
      {
        title: 'Granulalash',
        text: 'Eritma bir xil oʻlchamdagi granulalarga kesiladi va sovitiladi.',
      },
      {
        title: 'Nazorat va qadoqlash',
        text: 'Tayyor granula tekshiriladi, qadoqlanadi va joʻnatishga tayyorlanadi.',
      },
    ],
  },
  terms: {
    title: 'Hamkorlik shartlari',
    rows: [
      { label: 'Minimal buyurtma', value: PENDING },
      { label: 'Yetkazib berish', value: PENDING },
      { label: 'Toʻlov', value: PENDING },
    ],
  },
  contact: {
    title: 'Aloqa',
    lead: 'Narx va mavjud hajm boʻyicha biz bilan bogʻlaning.',
    phone: 'Telefon',
    telegram: 'Telegram',
    email: 'Email',
    address: 'Manzil',
    hours: 'Ish vaqti',
    addressValue: PENDING,
    hoursValue: PENDING,
  },
  footer: {
    rights: 'Barcha huquqlar himoyalangan.',
  },
};

export type Dictionary = typeof uz;
