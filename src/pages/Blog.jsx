import React, { useState } from 'react';
import { Search, Calendar, User, ArrowLeft, ArrowRight, HelpCircle, BookOpen } from 'lucide-react';
import { blogs } from '../data';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedArticleId, setSelectedArticleId] = useState(null);

  const categories = ["all", ...new Set(blogs.map(b => b.category))];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          blog.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const activeArticle = blogs.find(b => b.id === selectedArticleId);

  // Detail Article View
  if (activeArticle) {
    return (
      <div className="container section">
        <button 
          className="btn btn-outline" 
          onClick={() => setSelectedArticleId(null)}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '32px' }}
        >
          <ArrowLeft size={16} /> Back to Blog List
        </button>

        <article className="card" style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
          <img 
            src={activeArticle.image} 
            alt={activeArticle.title} 
            style={{ width: '100%', height: '360px', objectFit: 'cover', borderRadius: 'var(--radius-md)', marginBottom: '24px' }}
          />

          <div style={{ display: 'flex', gap: '16px', fontSize: '0.85rem', color: 'var(--text-light)', marginBottom: '16px', flexWrap: 'wrap' }}>
            <span className="badge badge-primary">{activeArticle.category}</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <User size={14} /> By {activeArticle.author}
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <Calendar size={14} /> {activeArticle.date}
            </span>
          </div>

          <h1 style={{ fontSize: '2.25rem', marginBottom: '24px', lineHeight: '1.3' }}>{activeArticle.title}</h1>

          <div 
            style={{ fontSize: '1.05rem', color: 'var(--text)', lineHeight: '1.8', whiteSpace: 'pre-wrap', marginBottom: '40px' }}
          >
            {activeArticle.content}
          </div>

          {/* Article Specific FAQs */}
          {activeArticle.faqs && (
            <div style={{ marginBottom: '40px', padding: '24px', backgroundColor: '#f8fafc', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <HelpCircle size={18} style={{ color: 'var(--primary)' }} /> Frequently Asked Questions
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {activeArticle.faqs.map((faq, idx) => (
                  <div key={idx}>
                    <h4 style={{ fontSize: '0.95rem', color: 'var(--text-dark)', marginBottom: '4px' }}>{faq.q}</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* References */}
          {activeArticle.references && (
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '24px' }}>
              <h4 style={{ fontSize: '0.95rem', color: 'var(--text-dark)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <BookOpen size={16} style={{ color: 'var(--primary)' }} /> Medical References
              </h4>
              <ul style={{ listStyle: 'inside decimal', fontSize: '0.8rem', color: 'var(--text-light)', paddingLeft: '4px' }}>
                {activeArticle.references.map((ref, idx) => (
                  <li key={idx} style={{ marginBottom: '4px' }}>{ref}</li>
                ))}
              </ul>
            </div>
          )}
        </article>
      </div>
    );
  }

  // Grid/List View
  return (
    <div className="container section">
      <div className="text-center max-w-3xl">
        <h1 className="section-title">Health Education Blog</h1>
        <p className="section-subtitle">Read scientific, doctor-reviewed articles regarding nutrition, vaccinations, and chronic disease controls.</p>
      </div>

      {/* Filters & Search */}
      <div className="card" style={{ marginBottom: '40px', display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ flex: 1, minWidth: '240px', position: 'relative' }}>
          <Search size={18} style={{ position: 'absolute', left: '12px', top: '15px', color: 'var(--text-light)' }} />
          <input
            type="text"
            placeholder="Search articles by title or keyword..."
            className="form-control"
            style={{ paddingLeft: '40px' }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`btn ${selectedCategory === cat ? 'btn-primary' : 'btn-outline'}`}
              style={{ padding: '8px 16px', fontSize: '0.85rem', textTransform: 'capitalize' }}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat === "all" ? "All Categories" : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Article Grid */}
      <div className="grid-3">
        {filteredBlogs.map((blog) => (
          <div key={blog.id} className="card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <img 
              src={blog.image} 
              alt={blog.title} 
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', gap: '8px', fontSize: '0.75rem', color: 'var(--text-light)', marginBottom: '12px' }}>
                <span className="badge badge-primary">{blog.category}</span>
                <span>By {blog.author}</span>
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', lineHeight: '1.3' }}>{blog.title}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginBottom: '20px' }}>{blog.summary}</p>
              
              <button 
                className="btn btn-outline" 
                style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center', width: '100%' }}
                onClick={() => setSelectedArticleId(blog.id)}
              >
                Read Article <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
