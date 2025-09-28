import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Clock, User, ArrowLeft, Share2, Heart, Bookmark, ChefHat, Timer, Users, Utensils } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();

  // Mock blog post data - in real app, this would be fetched based on ID
  const post = {
    id: "1",
    title: "Traditional Kingfish Curry Recipe from Rameshwaram",
    content: `
      This authentic Tamil Nadu kingfish curry recipe has been treasured in our family for generations. 
      Using premium dried kingfish from the sacred waters of Rameshwaram, this dish brings together 
      the perfect blend of spices and traditional cooking methods.

      ## Ingredients Needed

      ### For the Fish:
      - 500g Premium Dried Kingfish (soaked for 20 minutes)
      - 1 tsp Turmeric powder
      - 2 tsp Red chili powder
      - Salt to taste

      ### For the Curry:
      - 2 large Onions (finely chopped)
      - 4-5 Tomatoes (chopped)
      - 10-12 Curry leaves
      - 2 tbsp Coconut oil
      - 1 cup Thick coconut milk
      - 2 tbsp Tamarind paste
      - 2 Green chilies (slit)

      ### Spice Paste:
      - 6-8 Dried red chilies
      - 1 tbsp Coriander seeds
      - 1 tsp Cumin seeds
      - 4-5 Garlic cloves
      - 1 inch Ginger piece
      - 2 tbsp Fresh coconut (grated)

      ## Step-by-Step Preparation

      ### Preparing the Fish:
      1. **Soak the dried kingfish** in warm water for 15-20 minutes until it becomes soft.
      2. **Clean thoroughly** and cut into medium-sized pieces.
      3. **Marinate** with turmeric, chili powder, and salt. Set aside for 15 minutes.
      4. **Shallow fry** the fish pieces until golden brown. Keep aside.

      ### Making the Spice Paste:
      1. **Dry roast** the dried chilies, coriander seeds, and cumin seeds until aromatic.
      2. **Grind together** with garlic, ginger, and fresh coconut to form a smooth paste.
      3. Add a little water if needed while grinding.

      ### Cooking the Curry:
      1. **Heat coconut oil** in a heavy-bottomed pan or clay pot.
      2. **Add curry leaves** and let them splutter.
      3. **Sauté onions** until golden brown and translucent.
      4. **Add the spice paste** and cook for 3-4 minutes until the raw smell disappears.
      5. **Add tomatoes** and cook until they become mushy.
      6. **Pour in coconut milk** and bring to a gentle boil.
      7. **Add tamarind paste** and green chilies. Season with salt.
      8. **Gently add** the fried fish pieces to the curry.
      9. **Simmer for 10-12 minutes** on low heat, allowing the flavors to blend.
      10. **Garnish** with fresh curry leaves and serve hot.

      ## Pro Tips for Perfect Results

      - **Use clay pot cooking** for authentic flavor if available
      - **Don't over-mix** the fish once added to prevent breaking
      - **Adjust spice levels** according to your preference
      - **Fresh coconut milk** gives the best taste and consistency
      - **Let it rest** for 5 minutes before serving for flavors to settle

      ## Serving Suggestions

      This traditional kingfish curry pairs beautifully with:
      - **Steamed white rice** (most traditional)
      - **Coconut rice** for extra richness  
      - **Appam** or **Idiyappam** for a Kerala touch
      - **Rasam** and **pickle** as accompaniments

      ## Nutritional Benefits

      Our premium dried kingfish is rich in:
      - **High-quality protein** for muscle building
      - **Omega-3 fatty acids** for heart health
      - **Essential minerals** like calcium and phosphorus
      - **Vitamin D** for bone health

      ## Storage & Reheating

      - Store leftover curry in the refrigerator for up to 3 days
      - Reheat gently on low flame to preserve the delicate fish texture
      - Add a splash of coconut milk if the curry thickens too much

      This recipe serves 4-6 people and takes about 45 minutes to prepare. 
      The result is a rich, aromatic curry that brings the authentic taste of 
      Rameshwaram's coastal heritage to your dining table.
    `,
    category: "Recipes",
    readTime: "8 min read",
    author: "Chef Meera",
    date: "December 15, 2024",
    image: "/api/placeholder/800/400",
    tags: ["Traditional", "Tamil Nadu", "Kingfish", "Curry", "Rameshwaram"],
    difficulty: "Medium",
    cookingTime: "45 minutes",
    servings: "4-6 people"
  };

  const relatedPosts = [
    {
      id: "2",
      title: "Sardine Fish Fry Recipe",
      excerpt: "Crispy and delicious sardine fry with traditional spices.",
      readTime: "5 min read"
    },
    {
      id: "3", 
      title: "Health Benefits of Dried Fish",
      excerpt: "Discover the nutritional powerhouse of dried fish.",
      readTime: "6 min read"
    },
    {
      id: "4",
      title: "Pomfret Sambar Recipe",
      excerpt: "Tangy and flavorful pomfret sambar preparation.",
      readTime: "10 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 mb-8 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
          <span className="text-muted-foreground">/</span>
          <Link to="/blog" className="text-muted-foreground hover:text-primary">Blog</Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground">Recipe</span>
        </div>

        {/* Back Button */}
        <Link to="/blog">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Button>
        </Link>

        {/* Article Header */}
        <div className="space-y-6 mb-12">
          <div className="space-y-4">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              {post.category}
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-muted-foreground">
              Learn the authentic method to prepare this traditional Tamil Nadu delicacy 
              using premium dried kingfish from Rameshwaram waters.
            </p>
          </div>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
            <span>{post.date}</span>
          </div>

          {/* Social Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Heart className="h-4 w-4 mr-2" />
              Like
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button variant="outline" size="sm">
              <Bookmark className="h-4 w-4 mr-2" />
              Save
            </Button>
          </div>
        </div>

        {/* Recipe Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-3">
                <Timer className="h-6 w-6 text-primary" />
              </div>
              <div className="font-semibold">Cooking Time</div>
              <div className="text-sm text-muted-foreground">{post.cookingTime}</div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="p-3 rounded-full bg-accent/10 w-fit mx-auto mb-3">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <div className="font-semibold">Servings</div>
              <div className="text-sm text-muted-foreground">{post.servings}</div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="p-3 rounded-full bg-gold/10 w-fit mx-auto mb-3">
                <ChefHat className="h-6 w-6 text-gold" />
              </div>
              <div className="font-semibold">Difficulty</div>
              <div className="text-sm text-muted-foreground">{post.difficulty}</div>
            </CardContent>
          </Card>
        </div>

        {/* Featured Image */}
        <div className="mb-12">
          <div className="w-full h-64 md:h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
            <div className="text-center space-y-4">
              <ChefHat className="h-16 w-16 text-primary mx-auto" />
              <p className="text-muted-foreground">Traditional Kingfish Curry</p>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="grid lg:grid-cols-4 gap-12">
          <article className="lg:col-span-3">
            <div className="prose prose-lg max-w-none">
              <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {post.content.split('\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return <h2 key={index} className="text-2xl font-bold text-foreground mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
                  } else if (paragraph.startsWith('### ')) {
                    return <h3 key={index} className="text-xl font-semibold text-foreground mt-6 mb-3">{paragraph.replace('### ', '')}</h3>;
                  } else if (paragraph.startsWith('- ')) {
                    return <li key={index} className="ml-4 mb-2">{paragraph.replace('- ', '• ')}</li>;
                  } else if (paragraph.match(/^\d+\./)) {
                    return <li key={index} className="ml-4 mb-2 list-decimal">{paragraph}</li>;
                  } else if (paragraph.trim()) {
                    return <p key={index} className="mb-4">{paragraph}</p>;
                  }
                  return null;
                })}
              </div>
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t">
              <h4 className="font-semibold mb-4">Tags:</h4>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <Card className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10">
              <CardContent className="p-8 text-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Ready to Try This Recipe?</h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Get our premium dried kingfish delivered fresh to your doorstep. 
                    Perfect for this traditional recipe and many more!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/product/1">
                      <Button variant="hero" size="lg">
                        <Utensils className="h-5 w-5 mr-2" />
                        Buy Premium Kingfish
                      </Button>
                    </Link>
                    <Link to="/#products">
                      <Button variant="outline" size="lg">
                        View All Products
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Related Posts */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Related Recipes</h3>
                <div className="space-y-4">
                  {relatedPosts.map((relatedPost) => (
                    <div key={relatedPost.id} className="space-y-2">
                      <Link to={`/blog/${relatedPost.id}`}>
                        <h4 className="font-medium hover:text-primary transition-colors text-sm">
                          {relatedPost.title}
                        </h4>
                      </Link>
                      <p className="text-xs text-muted-foreground">{relatedPost.excerpt}</p>
                      <div className="text-xs text-muted-foreground flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {relatedPost.readTime}
                      </div>
                      {relatedPost.id !== relatedPosts[relatedPosts.length - 1].id && (
                        <Separator className="mt-4" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold mb-3">Get More Recipes</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Subscribe for weekly traditional recipes and cooking tips.
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Enter email"
                    className="w-full px-3 py-2 text-sm rounded border border-input bg-background"
                  />
                  <Button variant="hero" className="w-full" size="sm">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;