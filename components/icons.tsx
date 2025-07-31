import * as LucideIcons from 'lucide-react';
import type { LucideProps } from 'lucide-react';

type IconProps = React.HTMLAttributes<SVGElement> & LucideProps;

// Re-export all Lucide icons
export const Spinner = (props: IconProps) => <LucideIcons.Loader2 {...props} />;
export const GitHub = (props: IconProps) => <LucideIcons.Github {...props} />;
export const Plus = (props: IconProps) => <LucideIcons.Plus {...props} />;
export const CheckCircle = (props: IconProps) => <LucideIcons.CheckCircle {...props} />;
export const FileText = (props: IconProps) => <LucideIcons.FileText {...props} />;
export const PenSquare = (props: IconProps) => <LucideIcons.PenSquare {...props} />;
export const Eye = (props: IconProps) => <LucideIcons.Eye {...props} />;
export const Trash2 = (props: IconProps) => <LucideIcons.Trash2 {...props} />;

// Export as Icons object for backward compatibility
export const Icons = {
  spinner: Spinner,
  gitHub: GitHub,
  plus: Plus,
  checkCircle: CheckCircle,
  draft: FileText,
  post: PenSquare,
  eye: Eye,
  trash: Trash2,
};

export function Draft(props: LucideProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M12 12v6" />
      <path d="M9 15h6" />
    </svg>
  );
}

export function Post(props: LucideProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <line x1="10" y1="9" x2="8" y2="9" />
    </svg>
  );
}
