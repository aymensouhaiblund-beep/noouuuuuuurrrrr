# هدية إلى نور ✦

موقع هدية حب عربي، بتصميم ليلي فاخر، يعمل على الهاتف والحاسوب، ومن دون مكتبات JavaScript خارجية.

## تشغيل الموقع
1. فك ضغط الملف.
2. افتح `index.html` في المتصفح، أو افتح المجلد في SPCK.
3. لعرض الموسيقى، أضف مجلداً باسم `audio` وضع بداخله ملفاً باسم `music.mp3`.
   - لا يحتوي هذا المشروع على ملف موسيقى جاهز؛ أضف ملفاً تملك حق استخدامه.
   - الموسيقى لا تعمل تلقائياً، بل تبدأ بعد ضغط زر الموسيقى.

## إضافة صور ذكريات حقيقية
1. أنشئ مجلداً اسمه `images`.
2. ضع الصور داخله، مثلاً:
   - `images/memory-1.jpg`
   - `images/memory-2.jpg`
   - `images/memory-3.jpg`
3. افتح `style.css` وابحث عن `.photo-one` و`.photo-two` و`.photo-three`، واستبدل أسطر `background-image` بهذه الأسطر (عدّل أسماء الصور إذا لزم):

```css
.photo-one { background-image: linear-gradient(0deg, #090e2044, #090e2044), url("images/memory-1.jpg"); }
.photo-two { background-image: linear-gradient(0deg, #090e2044, #090e2044), url("images/memory-2.jpg"); }
.photo-three { background-image: linear-gradient(0deg, #090e2044, #090e2044), url("images/memory-3.jpg"); }
```

يمكنك أيضاً تعديل الرسالة والنصوص مباشرة من `index.html`، وتعديل الأمنيات في `script.js`.

## النشر المجاني على GitHub Pages
1. سجّل الدخول إلى GitHub وأنشئ مستودعاً جديداً (Repository)، مثلاً `nour-gift`.
2. ارفع الملفات والمجلدات الموجودة في هذا المشروع إلى جذر المستودع: `index.html`, `style.css`, `script.js`, وأي مجلدات `images` و`audio` أضفتها.
3. افتح **Settings → Pages**.
4. ضمن **Build and deployment** اختر **Deploy from a branch**.
5. اختر الفرع `main` والمجلد `/ (root)` ثم اضغط **Save**.
6. انتظر اكتمال النشر؛ سيظهر رابط الموقع في صفحة Pages.

## الملفات
- `index.html`: المحتوى والبنية.
- `style.css`: الألوان والتصميم والاستجابة للشاشات.
- `script.js`: النجوم والقلوب والرسالة السرية والأمنيات والموسيقى.
