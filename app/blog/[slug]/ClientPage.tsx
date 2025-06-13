"use client"

import BlogPost from "@/pages/blog-post"


export default function ClientPage({ slug }: { slug: string }) {
  // You can use params.slug to fetch the specific blog post data
  return <BlogPost slug={slug} />
}
