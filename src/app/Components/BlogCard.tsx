import { Calendar1, MessagesSquare, ChevronRight } from "lucide-react";
import Link from "next/link";

interface BlogCardProps {
  image: string;
  date: string;
  comments: string;
  title: string;
  description: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  date,
  comments,
  title,
  description,
}) => {
  const blogSlug = title.toLowerCase().replace(/\s+/g, "-");
  console.log("Generated Blog Slug:", blogSlug);


  return (
    <div className="w-[300px] h-auto bg-white rounded-lg shadow-md overflow-hidden">
      {/* Image Section */}
      <div className="w-full h-[200px] bg-gray-200">
        <img
          className="w-full h-full object-cover rounded-t-lg"
          src={image}
          alt="Blog Image"
        />
      </div>

      {/* Meta Info Section */}
      <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-500">
        <div className="flex items-center space-x-1">
          <Calendar1 className="w-4 h-4 text-yellow-500" />
          <p>{date}</p>
        </div>
        <div className="flex items-center space-x-1">
          <MessagesSquare className="w-4 h-4 text-yellow-500" />
          <p>{comments}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-4 py-2">
        <h6 className="text-lg font-bold text-gray-800 mb-2">{title}</h6>
        <p className="text-sm text-gray-600">{description}</p>
      </div>

      {/* Footer Section */}
      <div className="flex items-center px-4 py-2">
        <Link href={`/blogs/${blogSlug}`}>
          <p className="text-sm font-medium cursor-pointer hover:underline">
            Read more
          </p>
        </Link>
        <ChevronRight className="w-5 h-5 text-yellow-500" />
      </div>
    </div>
  );
};

export default BlogCard;
