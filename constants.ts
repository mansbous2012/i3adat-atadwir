import { Video, Project } from './types';

export const VIDEO_DATA: Video[] = [
  {
    id: 1,
    title: "تحويل القوارير البلاستيكية إلى أحواض زراعة",
    category: "بلاستيك",
    difficulty: "مبتدئ",
    thumbnail: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=800&auto=format&fit=crop",
    duration: "5:30",
    views: "1.2k",
    videoUrl: "https://www.youtube.com/results?search_query=%D8%AA%D8%AD%D9%88%D9%8A%D9%84+%D8%A7%D9%84%D9%82%D9%88%D8%A7%D8%B1%D9%8A%D8%B1+%D8%A7%D9%84%D8%A8%D9%84%D8%A7%D8%B3%D8%AA%D9%8A%D9%83%D9%8A%D8%A9+%D8%A5%D9%84%D9%89+%D8%A3%D8%AD%D9%88%D8%A7%D8%B6+%D8%B2%D8%B1%D8%A7%D8%B9%D8%A9"
  },
  {
    id: 2,
    title: "صناعة ورق معاد تدويره في المنزل",
    category: "ورق",
    difficulty: "متوسط",
    thumbnail: "https://images.unsplash.com/photo-1520699918507-3c3e05c46b90?q=80&w=800&auto=format&fit=crop",
    duration: "12:15",
    views: "3.5k",
    videoUrl: "https://www.youtube.com/results?search_query=%D8%B7%D8%B1%D9%8A%D9%82%D8%A9+%D8%B5%D9%86%D8%A7%D8%B9%D8%A9+%D9%88%D8%B1%D9%82+%D9%85%D8%B9%D8%A7%D8%AF+%D8%AA%D8%AF%D9%88%D9%8A%D8%B1%D9%87"
  },
  {
    id: 3,
    title: "إبداعات من الزجاج المكسور",
    category: "زجاج",
    difficulty: "متقدم",
    thumbnail: "https://images.unsplash.com/photo-1555523971-12c823021f1d?q=80&w=800&auto=format&fit=crop",
    duration: "8:45",
    views: "890",
    videoUrl: "https://www.youtube.com/results?search_query=%D8%A5%D8%B9%D8%A7%D8%AF%D8%A9+%D8%AA%D8%AF%D9%88%D9%8A%D8%B1+%D8%A7%D9%84%D8%B2%D8%AC%D8%A7%D8%AC+%D9%81%D9%86%D9%8A%D8%A9"
  },
  {
    id: 4,
    title: "تجديد الملابس القديمة بدون خياطة",
    category: "أقمشة",
    difficulty: "مبتدئ",
    thumbnail: "https://images.unsplash.com/photo-1542272617-08f086303294?q=80&w=800&auto=format&fit=crop",
    duration: "6:20",
    views: "5.1k",
    videoUrl: "https://www.youtube.com/results?search_query=%D8%AA%D8%AC%D8%AF%D9%8A%D8%AF+%D8%A7%D9%84%D9%85%D9%84%D8%A7%D8%A8%D8%B3+%D8%A7%D9%84%D9%82%D8%AF%D9%8A%D9%85%D8%A9+%D8%A8%D8%AF%D9%88%D9%86+%D8%AE%D9%8A%D8%A7%D8%B7%D8%A9"
  },
  {
    id: 5,
    title: "استغلال علب المعدن في الديكور",
    category: "معدن",
    difficulty: "متوسط",
    thumbnail: "https://images.unsplash.com/photo-1533558778430-c3d3876d15b0?q=80&w=800&auto=format&fit=crop",
    duration: "9:00",
    views: "2.2k",
    videoUrl: "https://www.youtube.com/results?search_query=%D8%A5%D8%B9%D8%A7%D8%AF%D8%A9+%D8%AA%D8%AF%D9%88%D9%8A%D8%B1+%D8%A7%D9%84%D8%B9%D9%84%D8%A8+%D8%A7%D9%84%D9%85%D8%B9%D8%AF%D9%86%D9%8A%D8%A9"
  }
];

export const PROJECT_DATA: Project[] = [
  {
    id: 1,
    author: "أحمد محمد",
    title: "مصباح مكتبي من قطع السيارات",
    image: "https://picsum.photos/400/400?random=10",
    likes: 120
  },
  {
    id: 2,
    author: "سارة علي",
    title: "حقيبة تسوق من الأكياس البلاستيكية",
    image: "https://picsum.photos/400/400?random=11",
    likes: 85
  },
  {
    id: 3,
    author: "كريم حسن",
    title: "روبوت صغير من النفايات الإلكترونية",
    image: "https://picsum.photos/400/400?random=12",
    likes: 240
  }
];

export const RECYCLING_TIPS = [
  "اغسل العبوات البلاستيكية قبل وضعها في سلة التدوير.",
  "لا تضع علب البيتزا الملوثة بالزيوت مع الورق المقوى.",
  "افصل الأغطية البلاستيكية عن الزجاجات قبل التخلص منها.",
  "الإلكترونيات القديمة تحتوي على معادن ثمينة، لا ترمها في القمامة العادية."
];