import React, { useState, useMemo } from 'react';
import { REVIEWS_DATA, REVIEW_CATEGORIES, ReviewItem } from '../data/reviewsData';
import { Star, Search, ShieldCheck, CheckCircle2, MessageSquarePlus, ThumbsUp, HeartHandshake } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showAddReviewModal, setShowAddReviewModal] = useState<boolean>(false);
  const [reviewsList, setReviewsList] = useState<ReviewItem[]>(REVIEWS_DATA);

  // New review form state
  const [newReview, setNewReview] = useState({
    name: '',
    neighborhood: '',
    rating: 5,
    title: '',
    text: '',
    serviceCategory: 'ac-replacement' as ReviewItem['serviceCategory'],
  });
  const [reviewSubmittedSuccess, setReviewSubmittedSuccess] = useState(false);

  // Filter reviews
  const filteredReviews = useMemo(() => {
    return reviewsList.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.serviceCategory === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.text.toLowerCase().includes(q) ||
        item.name.toLowerCase().includes(q) ||
        item.neighborhood.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [reviewsList, selectedCategory, searchQuery]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.text) return;

    const created: ReviewItem = {
      id: `rev-user-${Date.now()}`,
      name: newReview.name,
      neighborhood: newReview.neighborhood || 'Dallas, TX',
      date: 'Just now',
      rating: newReview.rating,
      serviceCategory: newReview.serviceCategory,
      title: newReview.title || 'Exceptional HVAC Service',
      text: newReview.text,
      verifiedCustomer: true,
      yearsWithSuburban: 'New Verified Review',
    };

    setReviewsList([created, ...reviewsList]);
    setReviewSubmittedSuccess(true);
    setTimeout(() => {
      setReviewSubmittedSuccess(false);
      setShowAddReviewModal(false);
      setNewReview({
        name: '',
        neighborhood: '',
        rating: 5,
        title: '',
        text: '',
        serviceCategory: 'ac-replacement',
      });
    }, 1800);
  };

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header with Aggregated Score */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-600 mb-1">
              <span>Verified Dallas Homeowners & Businesses</span>
              <span>·</span>
              <span>BBB A+ Rating</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              What Our Customers Say
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base max-w-2xl leading-relaxed">
              Real feedback from North Texas families and business owners. Many have trusted our team for decades — praising our honest diagnostics, custom ductwork, and responsive 24/7 service.
            </p>
          </div>

          {/* Social Proof Score Block */}
          <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs shrink-0">
            <div className="text-center px-2">
              <span className="text-3xl font-extrabold text-slate-900 font-display">4.9</span>
              <div className="flex text-amber-400 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-[11px] text-slate-500 font-medium mt-1 block">180+ Dallas Reviews</span>
            </div>
            <div className="h-12 w-px bg-slate-200" />
            <div className="text-xs space-y-1">
              <div className="flex items-center gap-1.5 text-slate-700 font-semibold">
                <HeartHandshake className="w-4 h-4 text-sky-600" />
                <span>Serving Families Since 1967</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-700 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Carrier® Factory Authorized</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Bar & Search Box */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 mb-8 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search reviews by keyword, neighborhood..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-hidden focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-slate-50/50"
              />
            </div>

            {/* Write a Review Button */}
            <button
              onClick={() => setShowAddReviewModal(true)}
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-sky-700 bg-sky-50 border border-sky-200 rounded-lg hover:bg-sky-100 transition-colors cursor-pointer ml-auto w-full md:w-auto justify-center"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>Leave a Customer Review</span>
            </button>
          </div>

          {/* Interactive Category Segmented Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100">
            {REVIEW_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Reviews Grid */}
        {filteredReviews.length === 0 ? (
          <div className="bg-white p-12 text-center rounded-2xl border border-slate-200">
            <p className="text-sm text-slate-600">No reviews found matching &ldquo;{searchQuery}&rdquo;.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-3 text-xs font-semibold text-sky-600 hover:underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-white rounded-xl p-6 border border-slate-200/90 shadow-xs hover:border-slate-300 hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Star Rating & Unboxed Metadata */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] text-slate-400">{rev.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-bold text-slate-900 leading-snug mb-2 font-display">
                    &ldquo;{rev.title}&rdquo;
                  </h3>

                  {/* Body Text */}
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {rev.text}
                  </p>
                </div>

                {/* Author & Trust Footnote - Zero-Pill Unboxed Text */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">{rev.name}</span>
                      <span className="text-[11px] text-slate-500">{rev.neighborhood}</span>
                    </div>
                    {rev.verifiedCustomer && (
                      <div className="flex items-center gap-1 text-[11px] font-medium text-emerald-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Verified</span>
                      </div>
                    )}
                  </div>

                  {rev.yearsWithSuburban && (
                    <div className="mt-2 text-[10px] text-sky-700 font-medium">
                      {rev.yearsWithSuburban}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Local Trust Bar */}
        <div className="mt-12 bg-white rounded-xl p-6 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-3">
            <ThumbsUp className="w-5 h-5 text-sky-600 shrink-0" />
            <div>
              <span className="font-bold text-slate-900 block">58+ Years of Customer Satisfaction in Dallas</span>
              <span>BBB Accredited with an A+ Rating · State License #TACLA17853E</span>
            </div>
          </div>
          <a
            href="tel:2143811127"
            className="px-4 py-2 font-bold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap"
          >
            Call Us: (214) 381-1127
          </a>
        </div>

      </div>

      {/* Leave a Review Modal */}
      {showAddReviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200">
            <div className="flex items-start justify-between pb-3 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">Customer Feedback</span>
                <h3 className="text-xl font-bold text-slate-900 font-display">Share Your Experience</h3>
              </div>
              <button
                onClick={() => setShowAddReviewModal(false)}
                className="text-slate-400 hover:text-slate-600 text-lg font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            {reviewSubmittedSuccess ? (
              <div className="py-12 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-base font-bold text-slate-900">Thank You for Your Review!</h4>
                <p className="text-xs text-slate-600">
                  Your feedback has been submitted and posted to our community review wall.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 mt-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John & Linda S."
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-sky-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Neighborhood / City</label>
                    <input
                      type="text"
                      placeholder="e.g. Lakewood, Dallas"
                      value={newReview.neighborhood}
                      onChange={(e) => setNewReview({ ...newReview, neighborhood: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-sky-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Star Rating</label>
                    <select
                      value={newReview.rating}
                      onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-sky-500"
                    >
                      <option value={5}>5 Stars (Excellent)</option>
                      <option value={4}>4 Stars (Very Good)</option>
                      <option value={3}>3 Stars (Average)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Service Type</label>
                  <select
                    value={newReview.serviceCategory}
                    onChange={(e) =>
                      setNewReview({
                        ...newReview,
                        serviceCategory: e.target.value as ReviewItem['serviceCategory'],
                      })
                    }
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-sky-500"
                  >
                    <option value="ac-replacement">Air Conditioning / Carrier Install</option>
                    <option value="heating">Heating Repair / Heat Pump</option>
                    <option value="ductwork">Custom Ductwork / Sheet Metal</option>
                    <option value="emergency">24/7 Emergency Service</option>
                    <option value="maintenance">Maintenance Agreement</option>
                    <option value="commercial">Commercial HVAC</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Headline</label>
                  <input
                    type="text"
                    placeholder="e.g. Fast response, courteous tech, fair pricing"
                    value={newReview.title}
                    onChange={(e) => setNewReview({ ...newReview, title: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Review Comments *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about the technician, repair, or installation..."
                    value={newReview.text}
                    onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-sky-500"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setShowAddReviewModal(false)}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 text-xs font-bold text-white bg-sky-600 rounded-lg hover:bg-sky-700 transition-colors cursor-pointer"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
