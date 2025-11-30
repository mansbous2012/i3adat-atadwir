export interface Video {
  id: number;
  title: string;
  category: string;
  difficulty: 'مبتدئ' | 'متوسط' | 'متقدم';
  thumbnail: string;
  duration: string;
  views: string;
  videoUrl: string;
}

export interface Project {
  id: number;
  author: string;
  title: string;
  image: string;
  likes: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  image?: string; // Base64 string for display
}

export enum Section {
  HOME = 'HOME',
  VIDEOS = 'VIDEOS',
  ASSISTANT = 'ASSISTANT',
  COMMUNITY = 'COMMUNITY',
  ADD_PROJECT = 'ADD_PROJECT'
}