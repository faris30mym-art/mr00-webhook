import { createContext, useContext, useMemo, useState, useEffect } from 'react';

const translations = {
  en: {
    appName: 'Mr00 Webhook',
    nav: {
      dashboard: 'Dashboard',
      activity: 'Activity',
      settings: 'Settings',
      about: 'About',
      docs: 'Documentation'
    },
    status: {
      ready: 'Ready',
      sending: 'Sending',
      paused: 'Paused',
      completed: 'Completed',
      error: 'Error',
      stopped: 'Stopped'
    },
    common: {
      totalMessages: 'Total Messages',
      successfulMessages: 'Successful Messages',
      failedMessages: 'Failed Messages',
      remainingMessages: 'Remaining Messages',
      lastActivity: 'Last Activity',
      ready: 'Ready',
      sending: 'Sending',
      paused: 'Paused',
      completed: 'Completed',
      error: 'Error',
      save: 'Save',
      saving: 'Saving',
      saved: 'Saved',
      saveError: 'Save Error',
      copy: 'Copy',
      test: 'Test Connection',
      hide: 'Hide',
      show: 'Show',
      start: 'Start Sending',
      pause: 'Pause',
      resume: 'Resume',
      stop: 'Stop',
      clear: 'Clear',
      search: 'Search',
      filter: 'Filter',
      upload: 'Upload',
      remove: 'Remove',
      replace: 'Replace',
      fileSize: 'File Size',
      uploadedFiles: 'Uploaded Files',
      preview: 'Live Preview',
      normalMessage: 'Normal Message',
      embedMessage: 'Embed Message',
      markdown: 'Markdown',
      finish: 'Completed',
      lastUsed: 'Last Used',
      selectLanguage: 'Language',
      theme: 'Theme',
      docsTitle: 'Documentation',
      aboutTitle: 'About',
      noActivity: 'No activity yet.'
    },
    webhook: {
      title: 'Webhook Configuration',
      url: 'Discord Webhook URL',
      copy: 'Copy URL',
      test: 'Test Connection',
      validate: 'Validate Webhook',
      status: 'Connection Status',
      secretNote: 'Webhook URLs are never exposed or stored in activity logs.'
    },
    editor: {
      title: 'Message Editor',
      messageType: 'Message Type',
      content: 'Message Content',
      embedTitle: 'Embed Title',
      embedDescription: 'Description',
      embedColor: 'Color',
      embedUrl: 'URL',
      authorName: 'Author Name',
      authorUrl: 'Author URL',
      authorIcon: 'Author Icon',
      thumbnail: 'Thumbnail',
      image: 'Main Image',
      footerText: 'Footer Text',
      footerIcon: 'Footer Icon',
      timestamp: 'Timestamp',
      messageCount: 'Message Count',
      interval: 'Sending Interval',
      intervalSeconds: 'Seconds',
      estimate: 'Estimated Duration',
      markdownTools: 'Formatting Tools',
      bold: 'Bold',
      italic: 'Italic',
      underline: 'Underline',
      strike: 'Strikethrough',
      code: 'Code',
      link: 'Link',
      list: 'List'
    },
    activity: {
      title: 'Activity Logs',
      operationTime: 'Operation Time',
      messageType: 'Message Type',
      status: 'Status',
      errorDetails: 'Error Details',
      clear: 'Clear Logs'
    },
    settings: {
      title: 'Settings',
      lang: 'Language',
      theme: 'Theme',
      autoSave: 'Auto-save',
      clearData: 'Clear Saved Data',
      preferences: 'Preferences',
      dark: 'Dark',
      light: 'Light'
    },
    about: {
      title: 'About Mr00 Webhook',
      description: 'Mr00 Webhook is a premium Discord webhook platform built for rapid, secure, and polished message delivery.',
      text: 'Create, customize, preview, and send normal messages and rich Discord embeds with image support, rate-limit protection, and multilingual design.'
    },
    docs: {
      title: 'How to Use Mr00 Webhook',
      intro: 'Follow these steps to create a Discord webhook, connect it, and send messages safely.',
      step1: 'Create a Discord webhook in your server settings.',
      step2: 'Paste the URL into the Webhook Configuration area.',
      step3: 'Write a message, embed, or markdown content.',
      step4: 'Upload images and attach them to your message or embed.',
      step5: 'Set the count and interval, then press Start Sending.'
    },
    footer: '© 2026 Mr00 Webhook. All Rights Reserved. Designed & Developed by Mr00'
  },
  ar: {
    appName: 'Mr00 Webhook',
    nav: {
      dashboard: 'لوحة التحكم',
      activity: 'السجل',
      settings: 'الإعدادات',
      about: 'حول',
      docs: 'التوثيق'
    },
    status: {
      ready: 'جاهز',
      sending: 'جارٍ الإرسال',
      paused: 'مؤقت',
      completed: 'مكتمل',
      error: 'خطأ',
      stopped: 'متوقف'
    },
    common: {
      totalMessages: 'إجمالي الرسائل',
      successfulMessages: 'الرسائل الناجحة',
      failedMessages: 'الرسائل الفاشلة',
      remainingMessages: 'الرسائل المتبقية',
      lastActivity: 'آخر نشاط',
      ready: 'جاهز',
      sending: 'جارٍ الإرسال',
      paused: 'مؤقت',
      completed: 'مكتمل',
      error: 'خطأ',
      save: 'حفظ',
      saving: 'جارٍ الحفظ',
      saved: 'تم الحفظ',
      saveError: 'خطأ في الحفظ',
      copy: 'نسخ',
      test: 'اختبار الاتصال',
      hide: 'إخفاء',
      show: 'إظهار',
      start: 'بدء الإرسال',
      pause: 'إيقاف مؤقت',
      resume: 'استئناف',
      stop: 'إيقاف',
      clear: 'مسح',
      search: 'بحث',
      filter: 'تصفية',
      upload: 'رفع',
      remove: 'حذف',
      replace: 'استبدال',
      fileSize: 'حجم الملف',
      uploadedFiles: 'الملفات المرفوعة',
      preview: 'معاينة مباشرة',
      normalMessage: 'رسالة عادية',
      embedMessage: 'إمبيد',
      markdown: 'ماركداون',
      finish: 'مكتمل',
      lastUsed: 'آخر استخدام',
      selectLanguage: 'اللغة',
      theme: 'المظهر',
      docsTitle: 'التوثيق',
      aboutTitle: 'حول',
      noActivity: 'لا توجد أنشطة حتى الآن.'
    },
    webhook: {
      title: 'إعدادات Webhook',
      url: 'رابط Discord Webhook',
      copy: 'نسخ الرابط',
      test: 'اختبار الاتصال',
      validate: 'تحقق من الرابط',
      status: 'حالة الاتصال',
      secretNote: 'لا يتم كشف أو تسجيل روابط Webhook في سجلات النشاط.'
    },
    editor: {
      title: 'محرر الرسالة',
      messageType: 'نوع الرسالة',
      content: 'محتوى الرسالة',
      embedTitle: 'عنوان الإمبيد',
      embedDescription: 'الوصف',
      embedColor: 'اللون',
      embedUrl: 'الرابط',
      authorName: 'اسم المؤلف',
      authorUrl: 'رابط المؤلف',
      authorIcon: 'أيقونة المؤلف',
      thumbnail: 'الصورة المصغرة',
      image: 'الصورة الرئيسية',
      footerText: 'نص التذييل',
      footerIcon: 'أيقونة التذييل',
      timestamp: 'الطابع الزمني',
      messageCount: 'عدد الرسائل',
      interval: 'فاصل الإرسال',
      intervalSeconds: 'ثانية',
      estimate: 'المدة المقررة',
      markdownTools: 'أدوات التنسيق',
      bold: 'غامق',
      italic: 'مائل',
      underline: 'تسطير',
      strike: 'شطب',
      code: 'كود',
      link: 'رابط',
      list: 'قائمة'
    },
    activity: {
      title: 'سجل النشاط',
      operationTime: 'وقت العملية',
      messageType: 'نوع الرسالة',
      status: 'الحالة',
      errorDetails: 'تفاصيل الخطأ',
      clear: 'مسح السجل'
    },
    settings: {
      title: 'الإعدادات',
      lang: 'اللغة',
      theme: 'المظهر',
      autoSave: 'الحفظ التلقائي',
      clearData: 'مسح البيانات المحفوظة',
      preferences: 'التفضيلات',
      dark: 'داكن',
      light: 'فاتح'
    },
    about: {
      title: 'حول Mr00 Webhook',
      description: 'Mr00 Webhook منصة احترافية لإرسال رسائل Discord عبر Webhook بسرعة وأمان وتصميم أنيق.',
      text: 'أنشئ وقم بتخصيص ومعاينة وإرسال الرسائل العادية والإمبيدات الغنية مع دعم الصور وحماية حدود المعدل وتصميم متعدد اللغات.'
    },
    docs: {
      title: 'كيفية استخدام Mr00 Webhook',
      intro: 'اتبع هذه الخطوات لإنشاء Webhook وربطه وإرسال الرسائل بأمان.',
      step1: 'أنشئ Webhook داخل خادم Discord من إعدادات الخادم.',
      step2: 'الصق الرابط في قسم إعدادات Webhook.',
      step3: 'اكتب رسالة أو إمبيد أو تنسيق ماركداون.',
      step4: 'ارفع الصور وأرفقها في الرسالة أو الإمبيد.',
      step5: 'حدد عدد الرسائل والفاصل ثم اضغط على زر بدء الإرسال.'
    },
    footer: '© 2026 Mr00 Webhook. جميع الحقوق محفوظة. مصمم ومطور بواسطة Mr00'
  }
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window === 'undefined') return 'en';
    try {
      return localStorage.getItem('mr00-webhook-language') || 'en';
    } catch {
      return 'en';
    }
  });

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    try {
      localStorage.setItem('mr00-webhook-language', language);
    } catch {
      // ignore
    }
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider');
  }
  return context;
}

export function getText(language, path) {
  const keys = path.split('.');
  let current = translations[language] || translations.en;

  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key];
    } else {
      return path;
    }
  }

  return typeof current === 'string' ? current : path;
}
