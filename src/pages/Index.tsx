
import { useEffect } from 'react';
import BlogCard from '../components/BlogCard';
import Navigation from '../components/Navigation';

const FEATURED_POSTS = [
  {
    slug: "product-discovery",
    title: "The Art of Product Discovery",
    excerpt: "Learn effective techniques for understanding user needs and validating product ideas.",
    date: "2024-03-15",
    category: "Product Strategy",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    slug: "stakeholder-management",
    title: "Mastering Stakeholder Management",
    excerpt: "Tips and strategies for effectively managing stakeholder relationships in product development.",
    date: "2024-03-10",
    category: "Leadership",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
  },
  {
    slug: "agile-best-practices",
    title: "Agile Best Practices for Product Managers",
    excerpt: "Essential agile methodologies and practices for modern product management.",
    date: "2024-03-05",
    category: "Methodology",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  }
];

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <header className="text-center mb-16 animate-fade-in">
          <h1 className="font-serif text-4xl font-semibold tracking-tight mb-4">
            Product Management Insights
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Exploring the intersection of strategy, technology, and user experience through the lens of product management.
          </p>
        </header>

        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {FEATURED_POSTS.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Index;
