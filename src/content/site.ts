// Tilga bog'liq bo'lmagan ma'lumotlar: kontaktlar va raqamli ko'rsatkichlar.
// Hali ma'lum bo'lmagan qiymat PENDING bo'lib turadi va saytda
// "Aniqlanmoqda" deb ko'rinadi. To'ldirish uchun PENDING o'rniga
// qo'shtirnoq ichida qiymat yozing, masalan: phone: '+998 90 123 45 67'.

// `as` bilan yozilgan: aks holda TypeScript maydon turini faqat null deb oladi.
export const PENDING = null as string | null;

export const site = {
  name: 'Polimine',
  contact: {
    phone: PENDING,
    // Telegram foydalanuvchi nomi, @ belgisisiz
    telegram: PENDING,
    email: PENDING,
  },
  foundedYear: PENDING,
  products: {
    grade1: {
      mfi: PENDING,
      density: PENDING,
      moisture: PENDING,
    },
    grade2: {
      mfi: PENDING,
      density: PENDING,
      moisture: PENDING,
    },
  },
};

export type GradeId = keyof typeof site.products;
export const GRADE_IDS: GradeId[] = ['grade1', 'grade2'];
