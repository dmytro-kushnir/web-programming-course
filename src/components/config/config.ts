import { ConfigMapping } from './configMapping.ts';

const links = {
  department: 'https://eom.lpnu.ua',
  institute: 'https://lpnu.ua/ikta',
  mail: 'Dmytro.O.Kushnir@lpnu.ua',
  scheduleExam: 'https://student2023.lpnu.ua/students_exam',
  scheduleLesson: 'https://student2023.lpnu.ua/students_schedule',
  telegram: 'https://t.me/dmytro_kushnir',
  university: 'https://lpnu.ua',
  vle: 'https://vns.lpnu.ua',
};

const config: ConfigMapping = {
  apps: {
    otherApp: {
      appPath: '/other-app',
      driveLinks: [],
      faviconLink: '/images/apps/otherApp/favicon.png',
      header: {
        banner: {
          defaultPageConfig: { name: 'home', subtitle: 'example', title: 'Example title' },
          pageConfigs: [],
          url: '/images/apps/otherApp/bg-banner.png',
        },
        logo: {
          alt: 'Other logo',
          url: '/images/apps/otherApp/logo.png',
        },
      },
      labList: [],
      lecturerAssistants: [],
      lecturerName: '',
      lecturerPhoto: '',
      lecturesList: [],
      links,
      name: 'otherApp',
      onlineLink: '',
      scores: {
        current: 0,
        exam: 0,
        interview: 0,
        labs: 0,
        presentationMax: 0,
        presentationMin: 0,
        selfStudy: 0,
      },
      semesters: {
        duration: {
          partOneEnd: '',
          partOneStart: '',
          partTwoEnd: '',
          partTwoStart: '',
        },
      },
      title: 'Other app',
    },
    wp: {
      appPath: '/web-programming',
      driveLinks: [
        {
          doc: 'https://docs.google.com/spreadsheets/d/1mryFxzyOy7czdyvab6F1MAZa3e_Vc-Yk/edit?usp=drive_link&ouid=103403982621563213254&rtpof=true&sd=true',
          drive: 'https://drive.google.com/drive/folders/1zOvW9TOw4hEO23iV0v768GcsEoz1y8RM?usp=drive_link',
          name: 'KI-41',
        },
        {
          doc: 'https://docs.google.com/spreadsheets/d/1JTF9MVdyosBGXYQi2kTrMOtEnErC9t0M/edit?usp=drive_link&ouid=103403982621563213254&rtpof=true&sd=true',
          drive: 'https://drive.google.com/drive/folders/1bxZ4fea1BeIDPNOfTgPXIyKPj35BEmV_?usp=drive_link',
          name: 'KI-42',
        },
        {
          doc: 'https://docs.google.com/spreadsheets/d/1pIV1ZBFADBnjB25DYr7wLjhrZp8l1bFi/edit?usp=drive_link&ouid=103403982621563213254&rtpof=true&sd=true',
          drive: 'https://drive.google.com/drive/folders/1Hnrov1ovJxGaoT1UBuMIggQu7N0UbJ5T?usp=drive_link',
          name: 'KI-43',
        },
        {
          doc: 'https://docs.google.com/spreadsheets/d/1vhnoKNyL29fohGtEGEnfsQLbjo8KrbnY/edit?usp=drive_link&ouid=103403982621563213254&rtpof=true&sd=true',
          drive: 'https://drive.google.com/drive/folders/1U9bJ4XKsD3vMmwhvYx3uYQ23zSVBq_eI?usp=drive_link',
          name: 'KI-44',
        },
        {
          doc: 'https://docs.google.com/spreadsheets/d/13WulPB-aOZutVQqAGISA4zv83_kCqfw5/edit?usp=drive_link&ouid=103403982621563213254&rtpof=true&sd=true',
          drive: 'https://drive.google.com/drive/folders/1L9u9YfOpOwQ77iFrV_AmnvGmRZpdB3YO?usp=drive_link',
          name: 'KI-45',
        },
      ],
      faviconLink: '/images/apps/wp/svg/favicon.svg',
      header: {
        banner: {
          defaultPageConfig: { name: 'home', subtitle: 'Навчальна дисципліна', title: 'Веб-програмуання' },
          pageConfigs: [
            { name: 'labs', title: 'Роботи до виконання' },
            { name: 'lectures', title: 'Курс Лекцій' },
            { name: 'self-work', title: 'Самостійна робота' },
            { name: 'grades', title: 'Журнали успішності' },
          ],
          url: '/images/apps/wp/bg-banner.png',
        },
        logo: {
          alt: 'Веб-програмування',
          url: '/images/apps/wp/logo.png',
        },
      },
      labList: [
        {
          description: 'Знайомство з JavaScript',
          filePath: '/files/apps/wp/labs/1.pdf',
          iconSrc: '/images/apps/wp/svg/index-js.svg',
          id: 'lab1',
          imgSrc: '/images/apps/wp/labs/lab1.jpg',
          link: '/labs/lab1',
          name: 'Лабараторна №1',
          objective: 'Вивчити основні типи даних та оператори мови JavaScript.',
        },
        {
          description: 'Основни конструкції мови JavaScript',
          filePath: '/files/apps/wp/labs/2.pdf',
          iconSrc: '/images/apps/wp/svg/index-construction.svg',
          id: 'lab2',
          imgSrc: '/images/apps/wp/labs/lab2.jpg',
          link: '/labs/lab2',
          name: 'Лабараторна №2',
          objective: 'Вивчити основні типи даних та оператори мови JavaScript.',
        },
        {
          description: 'Використання функцій в JavaScript.',
          filePath: '/files/apps/wp/labs/3.pdf',
          iconSrc: '/images/apps/wp/svg/index-function.svg',
          id: 'lab3',
          imgSrc: '/images/apps/wp/labs/lab3.jpg',
          link: '/labs/lab3',
          name: 'Лабараторна №3',
          objective: 'Навчитися використовувати стандартні і створювати функції користувача в JavaScript.',
        },
        {
          description: 'Робота з масивами в JavaScript.',
          filePath: '/files/apps/wp/labs/4.pdf',
          iconSrc: '/images/apps/wp/svg/index-matrix.svg',
          id: 'lab4',
          imgSrc: '/images/apps/wp/labs/lab4.jpg',
          link: '/labs/lab4',
          name: 'Лабараторна №4',
          objective: 'Вивчити можливості JavaScript для створення та обробки масивів.',
        },
        {
          description: 'Робота з рядками в JavaScript.',
          filePath: '/files/apps/wp/labs/5.pdf',
          iconSrc: '/images/apps/wp/svg/index-string.svg',
          id: 'lab5',
          imgSrc: '/images/apps/wp/labs/lab5.jpg',
          link: '/labs/lab5',
          name: 'Лабараторна №5',
          objective: 'Отримати навички обробки символьної інформації JavaScript.',
        },
        {
          description: 'Робота з об\'єктами в JavaScript.',
          filePath: '/files/apps/wp/labs/6.pdf',
          iconSrc: '/images/apps/wp/svg/index-object.svg',
          id: 'lab6',
          imgSrc: '/images/apps/wp/labs/lab6.jpg',
          link: '/labs/lab6',
          name: 'Лабараторна №6',
          objective: 'Отримати навички створення об\'єктів, доступу до полів та методів ознайомитись із прототипним успадкуванням.',
        },
      ],
      lecturerAssistants: [
        'Кушнір Дмитро Олександрович',
        'Добуш Андрій Романович',
      ],
      lecturerName: 'Кушнір Дмитро Олександрович',
      lecturerPhoto: '/images/apps/wp/lecturer.jpeg',
      lecturesList: [
        {
          description: 'Огляд дисципліни. Клієнт-серверна архітектура та її компоненти.',
          filePath: '/files/apps/wp/lectures/1.pdf',
          id: 'lecture1',
          imageUrl: '/images/apps/wp/lectures/lecture1.webp',
          name: 'Клієнт-серверна архітектура та її компоненти.',
        },
        {
          description: 'Клієнт-серверна архітектура. Модель OSI. Протокол прикладного рівня HTTP.',
          filePath: '/files/apps/wp/lectures/2.pdf',
          id: 'lecture2',
          imageUrl: '/images/apps/wp/lectures/lecture2.jpg',
          name: 'Протокол HTTP. Принципи функціонування.',
        },
        {
          description: 'Браузер. Склад і загальні принципи роботи.',
          filePath: '/files/apps/wp/lectures/3.pdf',
          id: 'lecture3',
          imageUrl: '/images/apps/wp/lectures/lecture3.webp',
          name: 'Браузер. Склад і загальні принципи роботи.',
        },
        {
          description: 'Базові технології Веб-програмування. Мова розмітки HTML, HTML 5. Мова стилів CSS, CSS3. Верстка (HTML + CSS). Фреймворки: Angular, React.',
          filePath: '/files/apps/wp/lectures/4.pdf',
          id: 'lecture4',
          imageUrl: '/images/apps/wp/lectures/lecture4.jpg',
          name: 'Веб сервер. Апаратне і програмне забезпечення.',
        },
        {
          description: 'Веб-додатки. Поняття, компоненти та принципи роботи.',
          filePath: '/files/apps/wp/lectures/5.pdf',
          id: 'lecture5',
          imageUrl: '/images/apps/wp/lectures/lecture5.webp',
          name: 'Веб-додатки. Поняття, компоненти та принципи роботи.',
          subLectures: [
            { filePath: '/files/apps/wp/lectures/5.1.pdf', id: 'lecture5.1', name: 'Веб-додатки для колективної роботи.' },
          ],
        },
        {
          description: 'Архітектура веб-додатків.',
          filePath: '/files/apps/wp/lectures/6.pdf',
          id: 'lecture6',
          imageUrl: '/images/apps/wp/lectures/lecture6.webp',
          name: 'Архітектура веб-додатків.',
        },
        {
          description: 'Етапи реалізації веб-проєкту.',
          filePath: '/files/apps/wp/lectures/7.pdf',
          id: 'lecture7',
          imageUrl: '/images/apps/wp/lectures/lecture7.webp',
          name: 'Етапи реалізації веб-проєкту.',
        },
        {
          description: 'Етап аналітики в проєктуванні веб додатку.',
          filePath: '/files/apps/wp/lectures/8.pdf',
          id: 'lecture8',
          imageUrl: '/images/apps/wp/lectures/lecture8.jpg',
          name: 'Етап аналітики в проєктуванні веб додатку.',
        },
        {
          description: 'Дизайн-макети, frontend, backend, тестування веб додатку.',
          filePath: '/files/apps/wp/lectures/9.pdf',
          id: 'lecture9',
          imageUrl: '/images/apps/wp/lectures/lecture9.webp',
          name: 'Дизайн-макети, frontend, backend, тестування веб додатку.',
        },
        {
          description: 'Програмування на стороні клієнта (Front-end). Javascript. AJAX. JavaScript и XML. PHP.',
          filePath: '/files/apps/wp/lectures/10.pdf',
          id: 'lecture10',
          imageUrl: '/images/apps/wp/lectures/lecture10.jpg',
          name: 'Фронтенд-розробка. Ключові технології та поняття.',
          subLectures: [
            { filePath: '/files/apps/wp/lectures/10.1.pdf', id: 'lecture10.1', name: 'Мова HTML. Поняття, стандарти, теги та атрибути.' },
            { filePath: '/files/apps/wp/lectures/10.2.pdf', id: 'lecture10.2', name: 'Структура сторінки, DOM-дерево, застосування тегів.' },
            { filePath: '/files/apps/wp/lectures/10.3.pdf', id: 'lecture10.3', name: 'Сучасний CSS. Основні поняття, селектори, блокова модель.' },
            { filePath: '/files/apps/wp/lectures/10.4.pdf', id: 'lecture10.4', name: 'CSS. Типи даних та робота з HTML-елементами.' },
            { filePath: '/files/apps/wp/lectures/10.5.pdf', id: 'lecture10.5', name: 'CSS. Стилі коду та побудова макетів.' },
            { filePath: '/files/apps/wp/lectures/10.6.pdf', id: 'lecture10.6', name: 'JavaScript у веб-розробці.' },
            { filePath: '/files/apps/wp/lectures/10.7.pdf', id: 'lecture10.7', name: 'JavaScript фреймворки.' },
          ],
        },
        {
          description: 'Програмування на стороні сервера (Back-end). Огляд мов програмування (Python, Php, Java, C#, Ruby). Javascript. Фреймворк Node.js',
          filePath: '/files/apps/wp/lectures/11.pdf',
          id: 'lecture11',
          imageUrl: '/images/apps/wp/lectures/lecture11.jpg',
          name: 'Бекенд. Програмування серверної частини.',
          subLectures: [
            { filePath: '/files/apps/wp/lectures/11.1.pdf', id: 'lecture11.1', name: 'Мови серверного програмування.' },
            { filePath: '/files/apps/wp/lectures/11.2.pdf', id: 'lecture11.2', name: 'Бекенд фреймворки.' },
          ],
        },
        {
          description: 'Інструменти веб-розробника.',
          filePath: '/files/apps/wp/lectures/12.pdf',
          id: 'lecture12',
          imageUrl: '/images/apps/wp/lectures/lecture12.webp',
          name: 'Інструменти веб-розробника.',
          subLectures: [
            { filePath: '/files/apps/wp/lectures/12.1.pdf', id: 'lecture12.1', name: 'Консоль розробника в браузері.' },
            { filePath: '/files/apps/wp/lectures/12.2.pdf', id: 'lecture12.2', name: 'Системи контролю версій.' },
            { filePath: '/files/apps/wp/lectures/12.3.pdf', id: 'lecture12.3', name: 'Тестування веб-додатків.' },
          ],
        },
      ],
      links,
      name: 'wp',
      onlineLink: '',
      scores: {
        current: 40,
        exam: 60,
        interview: 10,
        labs: 20, // please divide by 2 for each semester
        presentationMax: 5,
        presentationMin: 1,
        selfStudy: 20,
      },
      semesters: {
        duration: {
          partOneEnd: '11.03.2024',
          partOneStart: '12.02.2024',
          partTwoEnd: '29.03.2024',
          partTwoStart: '12.03.2024',
        },
      },
      title: 'Веб-програмування',
    },
  },
};

export default config;
