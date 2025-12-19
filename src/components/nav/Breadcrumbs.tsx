import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex items-center gap-1 md:gap-2 text-sm text-muted-foreground flex-wrap">
        <li>
          <Link
            to="/"
            className="hover:text-primary transition-colors flex items-center justify-center min-h-[44px] min-w-[44px] md:min-h-0 md:min-w-0 p-2 md:p-0 -m-2 md:m-0"
          >
            <Home className="h-4 w-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1 md:gap-2">
            <ChevronRight className="h-4 w-4 shrink-0" />
            {item.href ? (
              <Link 
                to={item.href} 
                className="hover:text-primary transition-colors min-h-[44px] md:min-h-0 flex items-center px-1 md:px-0"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground font-medium min-h-[44px] md:min-h-0 flex items-center">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
