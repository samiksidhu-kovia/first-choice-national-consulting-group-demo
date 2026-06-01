import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { format } from "date-fns";
import { Plus, Pencil, Trash2, Search, LogOut, Eye, EyeOff } from "lucide-react";
import ReactQuill from "react-quill";

const categories = ["Human Resources", "Leadership", "Business Consulting", "DEI", "Organizational Culture", "Process Improvement"];
const statuses = ["Draft", "Published"];

const emptyPost = {
  title: "", slug: "", category: "Human Resources", author: "First Choice National Consulting Group",
  publish_date: "", excerpt: "", featured_image_url: "", seo_title: "", meta_description: "",
  body: "", status: "Draft",
};

export default function BlogAdmin() {
  const [editingPost, setEditingPost] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: posts = [], isLoading } = useQuery({
    queryKey: ["adminBlogPosts"],
    queryFn: () => base44.entities.BlogPost.list("-updated_date"),
  });

  const createMutation = useMutation({
    mutationFn: (data) => base44.entities.BlogPost.create(data),
    onSuccess: () => { queryClient.invalidateQueries({ queryKey: ["adminBlogPosts"] }); closeDialog(); toast({ title: "Post created" }); },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => base44.entities.BlogPost.update(id, data),
    onSuccess: () => { queryClient.invalidateQueries({ queryKey: ["adminBlogPosts"] }); closeDialog(); toast({ title: "Post updated" }); },
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => base44.entities.BlogPost.delete(id),
    onSuccess: () => { queryClient.invalidateQueries({ queryKey: ["adminBlogPosts"] }); toast({ title: "Post deleted" }); },
  });

  const closeDialog = () => { setDialogOpen(false); setEditingPost(null); };

  const openNew = () => { setEditingPost({ ...emptyPost }); setDialogOpen(true); };

  const openEdit = (post) => { setEditingPost({ ...post }); setDialogOpen(true); };

  const handleSave = () => {
    if (!editingPost.title || !editingPost.slug) { toast({ title: "Title and slug are required", variant: "destructive" }); return; }
    if (editingPost.id) {
      const { id, created_date, updated_date, created_by, ...data } = editingPost;
      updateMutation.mutate({ id, data });
    } else {
      createMutation.mutate(editingPost);
    }
  };

  const handleDelete = (post) => {
    if (confirm(`Delete "${post.title}"?`)) deleteMutation.mutate(post.id);
  };

  const toggleStatus = (post) => {
    const newStatus = post.status === "Published" ? "Draft" : "Published";
    updateMutation.mutate({ id: post.id, data: { status: newStatus } });
  };

  const generateSlug = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  const filtered = posts.filter(p => {
    const matchSearch = !search || p.title?.toLowerCase().includes(search.toLowerCase());
    const matchCat = filterCategory === "All" || p.category === filterCategory;
    const matchStatus = filterStatus === "All" || p.status === filterStatus;
    return matchSearch && matchCat && matchStatus;
  });

  const handleLogout = () => { base44.auth.logout("/"); };

  return (
    <div className="min-h-screen bg-warm-white">
      {/* Header */}
      <div className="border-b border-warm-border bg-white sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="font-heading text-xl font-semibold text-slate">Blog Admin</h1>
          <div className="flex items-center gap-3">
            <Button onClick={openNew} className="bg-sage hover:bg-sage/90 text-white rounded-lg text-sm gap-2">
              <Plus className="w-4 h-4" /> New Post
            </Button>
            <Button onClick={handleLogout} variant="outline" className="border-warm-border rounded-lg text-sm gap-2">
              <LogOut className="w-4 h-4" /> Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-muted" />
            <Input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search posts..." className="pl-9 border-warm-border rounded-lg bg-white" />
          </div>
          <Select value={filterCategory} onValueChange={setFilterCategory}>
            <SelectTrigger className="w-[180px] border-warm-border rounded-lg bg-white"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Categories</SelectItem>
              {categories.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-[140px] border-warm-border rounded-lg bg-white"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Status</SelectItem>
              {statuses.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        {/* Posts table */}
        {isLoading ? (
          <div className="text-center py-16"><div className="w-8 h-8 border-4 border-sage-light border-t-sage rounded-full animate-spin mx-auto" /></div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-16 text-slate-muted">No posts found. Create your first post to get started.</div>
        ) : (
          <div className="border border-warm-border rounded-lg overflow-hidden bg-white">
            <table className="w-full">
              <thead>
                <tr className="border-b border-warm-border bg-warm-offwhite">
                  <th className="text-left px-4 py-3 text-xs font-semibold text-slate-muted uppercase tracking-wider">Title</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-slate-muted uppercase tracking-wider hidden md:table-cell">Category</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-slate-muted uppercase tracking-wider hidden md:table-cell">Date</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-slate-muted uppercase tracking-wider">Status</th>
                  <th className="text-right px-4 py-3 text-xs font-semibold text-slate-muted uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(post => (
                  <tr key={post.id} className="border-b border-warm-border last:border-b-0 hover:bg-warm-offwhite/50 transition-colors">
                    <td className="px-4 py-3">
                      <p className="font-medium text-slate text-[15px]">{post.title}</p>
                      <p className="text-xs text-slate-muted mt-0.5">/{post.slug}</p>
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      <span className="text-sm text-slate-secondary">{post.category}</span>
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      <span className="text-sm text-slate-muted">{post.publish_date ? format(new Date(post.publish_date), "MMM d, yyyy") : "No date"}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium ${post.status === "Published" ? "bg-sage-pale text-sage" : "bg-warm-offwhite text-slate-muted"}`}>
                        {post.status === "Published" ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
                        {post.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex justify-end gap-1">
                        <Button size="sm" variant="ghost" onClick={() => toggleStatus(post)} className="h-8 w-8 p-0 text-slate-muted hover:text-sage">
                          {post.status === "Published" ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </Button>
                        <Button size="sm" variant="ghost" onClick={() => openEdit(post)} className="h-8 w-8 p-0 text-slate-muted hover:text-sage">
                          <Pencil className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" onClick={() => handleDelete(post)} className="h-8 w-8 p-0 text-slate-muted hover:text-destructive">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Edit Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl">{editingPost?.id ? "Edit Post" : "New Post"}</DialogTitle>
          </DialogHeader>
          {editingPost && (
            <div className="space-y-5 mt-4">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Label className="text-sm mb-2 block">Title</Label>
                  <Input value={editingPost.title} onChange={e => {
                    const title = e.target.value;
                    setEditingPost({ ...editingPost, title, slug: editingPost.id ? editingPost.slug : generateSlug(title) });
                  }} className="border-warm-border rounded-lg" />
                </div>
                <div>
                  <Label className="text-sm mb-2 block">Slug</Label>
                  <Input value={editingPost.slug} onChange={e => setEditingPost({ ...editingPost, slug: e.target.value })} className="border-warm-border rounded-lg" />
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-5">
                <div>
                  <Label className="text-sm mb-2 block">Category</Label>
                  <Select value={editingPost.category} onValueChange={v => setEditingPost({ ...editingPost, category: v })}>
                    <SelectTrigger className="border-warm-border rounded-lg"><SelectValue /></SelectTrigger>
                    <SelectContent>{categories.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-sm mb-2 block">Status</Label>
                  <Select value={editingPost.status} onValueChange={v => setEditingPost({ ...editingPost, status: v })}>
                    <SelectTrigger className="border-warm-border rounded-lg"><SelectValue /></SelectTrigger>
                    <SelectContent>{statuses.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-sm mb-2 block">Publish Date</Label>
                  <Input type="date" value={editingPost.publish_date} onChange={e => setEditingPost({ ...editingPost, publish_date: e.target.value })} className="border-warm-border rounded-lg" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Label className="text-sm mb-2 block">Author</Label>
                  <Input value={editingPost.author} onChange={e => setEditingPost({ ...editingPost, author: e.target.value })} className="border-warm-border rounded-lg" />
                </div>
                <div>
                  <Label className="text-sm mb-2 block">Featured Image URL</Label>
                  <Input value={editingPost.featured_image_url} onChange={e => setEditingPost({ ...editingPost, featured_image_url: e.target.value })} placeholder="https://..." className="border-warm-border rounded-lg" />
                </div>
              </div>
              <div>
                <Label className="text-sm mb-2 block">Excerpt</Label>
                <Textarea rows={2} value={editingPost.excerpt} onChange={e => setEditingPost({ ...editingPost, excerpt: e.target.value })} className="border-warm-border rounded-lg" />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Label className="text-sm mb-2 block">SEO Title</Label>
                  <Input value={editingPost.seo_title} onChange={e => setEditingPost({ ...editingPost, seo_title: e.target.value })} className="border-warm-border rounded-lg" />
                </div>
                <div>
                  <Label className="text-sm mb-2 block">Meta Description</Label>
                  <Input value={editingPost.meta_description} onChange={e => setEditingPost({ ...editingPost, meta_description: e.target.value })} className="border-warm-border rounded-lg" />
                </div>
              </div>
              <div>
                <Label className="text-sm mb-2 block">Body Content</Label>
                <ReactQuill value={editingPost.body} onChange={v => setEditingPost({ ...editingPost, body: v })} className="bg-white" />
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <Button variant="outline" onClick={closeDialog} className="border-warm-border rounded-lg">Cancel</Button>
                <Button onClick={handleSave} className="bg-sage hover:bg-sage/90 text-white rounded-lg">{editingPost.id ? "Save Changes" : "Create Post"}</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}