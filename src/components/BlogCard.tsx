
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { format } from 'date-fns';

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
}

const BlogCard = ({ slug, title, excerpt, date, category, imageUrl }: BlogCardProps) => {
  return (
    <Link
      to={`/blog/${slug}`}
      className="group block overflow-hidden rounded-lg bg-card transition-all hover:shadow-lg animate-enter"
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium">
            {category}
          </span>
          <span className="inline-flex items-center gap-1">
            <Calendar size={14} />
            {format(new Date(date), 'MMM dd, yyyy')}
          </span>
        </div>
        <h3 className="mt-4 font-serif text-xl font-medium tracking-tight text-primary">
          {title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
          {excerpt}
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;
