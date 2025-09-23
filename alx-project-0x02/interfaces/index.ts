export interface CardProps {
  title: string;
  content: string;
}

export interface PostFormData {
  title: string;
  content: string;
}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: PostFormData) => void;
}
