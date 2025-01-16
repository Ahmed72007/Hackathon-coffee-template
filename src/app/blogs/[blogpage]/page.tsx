"use client";
import { useParams } from "next/navigation";
import { blogData } from "../../Components/BlogCardList";

const IndividualBlogPage = () => {
  const params = useParams();
  console.log("Params:", params); // Debug `params`

  // Use the correct key based on your log
  const slug = params.blogpage;
  console.log("Raw Slug from URL:", slug);

  // Ensure slug is properly formatted
  const formattedSlug = Array.isArray(slug) ? slug[0] : slug;
  console.log("Formatted Slug from URL:", formattedSlug);

  console.log("Generated Slugs from blogData:");
  blogData.forEach((blog) =>
    console.log(blog.title.toLowerCase().replace(/\s+/g, "-"))
  );

  const blog = blogData.find(
    (item) =>
      item.title.toLowerCase().replace(/\s+/g, "-") === formattedSlug
  );
  console.log("Matched Blog:", blog);

  if (!blog) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Blog Not Found
        </h1>
        <p className="text-gray-600 mt-4">
          Sorry, the blog you are looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 capitalize">
        {blog.title}
      </h1>
      <div className="flex items-center space-x-4 text-gray-600 mt-2">
        <p>{blog.date}</p>
        <p>{blog.comments}</p>
      </div>
      <div className="mt-6">
        <img className="w-full rounded-md" src={blog.image} alt={blog.title} />
      </div>
      <p className="text-gray-600 mt-6">{blog.description}</p>
      <p className="text-gray-600 mt-6">
        More detailed content about the blog can go here. Add images, additional
        text, or other sections to enrich the blog.
      </p>
    </div>
  );
};

export default IndividualBlogPage;
