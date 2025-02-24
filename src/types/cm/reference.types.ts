export type PaperState = 'external' | 'library' | 'chat';

export interface Author {
  name: string;
  authorId?: string;
}

export interface BasePaper {
  id: string;
  title: string;
  authors: Author[];
  abstract?: string;
  year?: number;
  venue?: string;
  url?: string;
  citation_count?: number;
}

export interface ExternalPaper extends BasePaper {
  external_id: string;
  is_open_access: boolean;
  reference_count?: number;
  state: 'external';
}

export interface LibraryPaper extends BasePaper {
  has_full_text: boolean;
  added_at: string;
  tags?: string[];
  notes?: string;
  state: 'library' | 'chat';
}

export interface ChatPaper extends LibraryPaper {
  state: 'chat';
  added_to_chat_at: string;
}

export type Paper = ExternalPaper | LibraryPaper | ChatPaper;

export interface PaperStateChange {
  paper: Paper;
  from: PaperState;
  to: PaperState;
  timestamp: string;
}
