# ✈️ Travelia — גרסת Super Pro

אתר חיפוש טיסות וחופשות חכם, מהיר ומעוצב, עם תמיכה בעברית ואנגלית, עיצוב רספונסיבי מודרני, ומנוע חיפוש טיסות אמיתי (Travelpayouts iframe).

---

## 🚀 איך להפעיל מקומית

1. ודא שיש לך Node.js מותקן.
2. התקן את כל התלויות:
```bash
npm install
```

3. הרץ את האתר:
```bash
npm run dev
```

---

## 🌐 איך להעלות ל־GitHub Pages

1. בנה את הפרויקט:
```bash
npm run build
```

2. העלה:
```bash
npm run deploy
```

📌 ודא שב־`vite.config.js` יש הגדרה נכונה:
```js
base: '/travelia/'
```

---

## 📁 מבנה קבצים עיקרי

```
travelia/
│
├── src/
│   ├── pages/        # עמודים: בית, דילים, צור קשר
│   ├── App.jsx       # רכיב ראשי
│   └── main.jsx      # נקודת כניסה
│
├── public/
├── index.html
├── vite.config.js
├── package.json
└── tailwind.config.js
```

---

## 💬 צור קשר או תמיכה

אם יש שאלות, פנה אלינו דרך טופס **צור קשר** באתר או כתוב בגיטהאב.

---

## 💡 תכנון עתידי

- שילוב backend (Node.js + MongoDB)
- שמירת דילים מותאמים
- ניתוח נתונים, פוש, ניוזלטר ועוד

---
