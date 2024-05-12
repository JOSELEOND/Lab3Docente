export interface Article{
    id: number;
    attributes: {
      title: string;
      date: string;
      content: string;
      images: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  }