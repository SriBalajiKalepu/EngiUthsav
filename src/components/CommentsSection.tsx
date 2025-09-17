import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { MessageSquare, Star, Send, User } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface Comment {
  id: string;
  name: string;
  department: string;
  comment: string;
  rating: number;
  created_at: string;
}

export const CommentsSection = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [newComment, setNewComment] = useState({
    name: "",
    department: "",
    comment: "",
    rating: 5
  });

  const departments = ["CSE", "IT", "MCA", "AI&ML", "AI&DS"];

  const loadComments = async () => {
    try {
      if (!supabase) {
        const localComments = localStorage.getItem('engiuthsav_comments');
        if (localComments) setComments(JSON.parse(localComments));
        return;
      }

      const { data, error } = await supabase
        .from('engiu_comments')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error loading comments:', error);
        // Fallback to local storage if Supabase fails
        const localComments = localStorage.getItem('engiuthsav_comments');
        if (localComments) {
          setComments(JSON.parse(localComments));
        }
      } else {
        setComments(data || []);
      }
    } catch (err) {
      console.error('Error:', err);
      // Fallback to local storage
      const localComments = localStorage.getItem('engiuthsav_comments');
      if (localComments) {
        setComments(JSON.parse(localComments));
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadComments();
    
    // Set up real-time subscription only if Supabase is configured
    let channel: any | undefined;
    if (supabase) {
      channel = supabase
        .channel('comments_changes')
        .on(
          'postgres_changes', 
          { event: '*', schema: 'public', table: 'engiu_comments' },
          () => {
            loadComments();
          }
        )
        .subscribe();
    }

    return () => {
      if (supabase && channel) {
        supabase.removeChannel(channel);
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newComment.name.trim() || !newComment.department || !newComment.comment.trim()) {
      toast.error("Please fill in all required fields!");
      return;
    }

    const commentData = {
      name: newComment.name.trim(),
      department: newComment.department,
      comment: newComment.comment.trim(),
      rating: newComment.rating
    };

    // If Supabase not configured, save locally
    if (!supabase) {
      const localComment = {
        id: Date.now().toString(),
        ...commentData,
        created_at: new Date().toISOString()
      };
      const existingComments = JSON.parse(localStorage.getItem('engiuthsav_comments') || '[]');
      const updatedComments = [localComment, ...existingComments];
      localStorage.setItem('engiuthsav_comments', JSON.stringify(updatedComments));
      setComments(updatedComments);
      setNewComment({ name: "", department: "", comment: "", rating: 5 });
      toast.success("Comment saved locally! 🎉");
      return;
    }

    try {
      const { error } = await supabase.from('engiu_comments').insert([commentData]);

      if (error) throw error;

      setNewComment({ name: "", department: "", comment: "", rating: 5 });
      toast.success("Thank you for your comment! Your excitement is contagious! 🎉");
      loadComments();
    } catch (err) {
      console.error('Error saving comment:', err);
      // Fallback to local storage
      const localComment = {
        id: Date.now().toString(),
        ...commentData,
        created_at: new Date().toISOString()
      };
      const existingComments = JSON.parse(localStorage.getItem('engiuthsav_comments') || '[]');
      const updatedComments = [localComment, ...existingComments];
      localStorage.setItem('engiuthsav_comments', JSON.stringify(updatedComments));
      setComments(updatedComments);
      setNewComment({ name: "", department: "", comment: "", rating: 5 });
      toast.success("Comment saved locally! 🎉");
    }
  };

  const renderStars = (rating: number) => (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= rating ? "text-secondary fill-secondary" : "text-muted-foreground"
          }`}
        />
      ))}
    </div>
  );

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return "Just now";
    if (diffInMinutes < 60) return `${diffInMinutes} minutes ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)} hours ago`;
    return `${Math.floor(diffInMinutes / 1440)} days ago`;
  };

  // Split comments into two arrays for scrolling animations
  const leftScrollComments = comments.filter((_, index) => index % 2 === 0);
  const rightScrollComments = comments.filter((_, index) => index % 2 === 1);

  return (
    <section id="comments" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-5" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-orbitron font-black mb-6 text-glow">
            Student <span className="text-secondary">Comments</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Share your excitement and thoughts about EngiUthsav 2025! Let's build the hype together.
          </p>
          
          <div className="flex items-center justify-center mt-8">
            <MessageSquare className="w-8 h-8 text-primary animate-pulse mr-3" />
            <div className="w-24 h-1 bg-gradient-hero rounded-full" />
          </div>
        </div>

        {/* Comment Form */}
        <Card className="mb-12 bg-gradient-card border-primary/20 shadow-card-tech animate-scale-in">
          <CardHeader>
            <h3 className="text-2xl font-orbitron font-bold text-accent flex items-center">
              <Send className="w-6 h-6 mr-3 text-primary" />
              Share Your Thoughts
            </h3>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-accent mb-2">Name *</label>
                  <Input
                    value={newComment.name}
                    onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
                    placeholder="Your full name"
                    className="bg-background/50 border-primary/30 focus:border-primary"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-accent mb-2">Department *</label>
                  <select
                    value={newComment.department}
                    onChange={(e) => setNewComment({ ...newComment, department: e.target.value })}
                    className="w-full px-3 py-2 bg-background/50 border border-primary/30 rounded-md focus:border-primary focus:outline-none text-foreground"
                  >
                    <option value="">Select Department</option>
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-accent mb-2">Your Rating</label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setNewComment({ ...newComment, rating: star })}
                      className="focus:outline-none"
                    >
                      <Star
                        className={`w-6 h-6 transition-colors duration-200 ${
                          star <= newComment.rating 
                            ? "text-secondary fill-secondary hover:scale-110" 
                            : "text-muted-foreground hover:text-secondary"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-accent mb-2">Comment *</label>
                <Textarea
                  value={newComment.comment}
                  onChange={(e) => setNewComment({ ...newComment, comment: e.target.value })}
                  placeholder="Share your excitement about EngiUthsav 2025..."
                  className="bg-background/50 border-primary/30 focus:border-primary min-h-[120px]"
                  maxLength={500}
                />
                <p className="text-xs text-muted-foreground mt-1">
                  {newComment.comment.length}/500 characters
                </p>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-hero hover:shadow-pulse-glow font-semibold text-lg py-3 hover-scale"
              >
                <Send className="w-5 h-5 mr-2" />
                Post Comment
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Scrolling Comments Display */}
        {!loading && comments.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-orbitron font-bold text-center text-glow mb-8">
              What Students Are Saying
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Scrolling Column */}
              <div className="space-y-4 animate-scroll-up">
                {leftScrollComments.map((comment, index) => (
                  <Card
                    key={comment.id}
                    className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover-glow"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center">
                            <User className="w-5 h-5 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-grow">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <h4 className="text-sm font-semibold text-accent">{comment.name}</h4>
                              <p className="text-xs text-muted-foreground">{comment.department}</p>
                            </div>
                            <div className="text-right">
                              {renderStars(comment.rating)}
                              <p className="text-xs text-muted-foreground mt-1">
                                {formatTimeAgo(comment.created_at)}
                              </p>
                            </div>
                          </div>
                          
                          <p className="text-sm text-muted-foreground leading-relaxed">{comment.comment}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Right Scrolling Column */}
              <div className="space-y-4 animate-scroll-down">
                {rightScrollComments.map((comment, index) => (
                  <Card
                    key={comment.id}
                    className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover-glow"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center">
                            <User className="w-5 h-5 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-grow">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <h4 className="text-sm font-semibold text-accent">{comment.name}</h4>
                              <p className="text-xs text-muted-foreground">{comment.department}</p>
                            </div>
                            <div className="text-right">
                              {renderStars(comment.rating)}
                              <p className="text-xs text-muted-foreground mt-1">
                                {formatTimeAgo(comment.created_at)}
                              </p>
                            </div>
                          </div>
                          
                          <p className="text-sm text-muted-foreground leading-relaxed">{comment.comment}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Engagement Stats */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="bg-gradient-card border border-primary/20 rounded-2xl p-8 shadow-card-tech">
            <h3 className="text-2xl font-orbitron font-bold mb-4 text-glow">
              Join the Conversation!
            </h3>
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{comments.length}</div>
                <div className="text-sm text-muted-foreground">Comments</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">
                  {comments.length > 0 
                    ? (comments.reduce((sum, c) => sum + c.rating, 0) / comments.length).toFixed(1)
                    : "5.0"
                  }
                </div>
                <div className="text-sm text-muted-foreground">Avg Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">500+</div>
                <div className="text-sm text-muted-foreground">Expected</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};