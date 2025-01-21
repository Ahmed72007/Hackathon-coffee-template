import React from "react";
import BlogCard from "./BlogCard";

// Exporting blogData for use in other components
export const blogData = [
  {
    image: "/blog1,png.jpeg",
    date: "02 Jan 2022",
    comments: "Comments (03)",
    title: "Chocolate Truffle Cake With Honey Flavor",
    description:
      "Lorem ipsum dolor sit amet, consectetur elit. Non mi sed etiam a id at ultricies neque.",
  },
  {
    image: "/blog2.png",
    date: "05 Feb 2022",
    comments: "Comments (05)",
    title: "Delicious Strawberry Shortcake",
    description:
      "This is a perfect summer dessert with a balance of sweetness and tanginess.",
  },
  {
    image: "/blog3.png",
    date: "15 Mar 2022",
    comments: "Comments (10)",
    title: "Vanilla Bean Ice Cream with Caramel Sauce",
    description:
      "A simple yet elegant dessert that will satisfy all your sweet cravings.",
  },
  {
    image: "/blog4.png",
    date: "20 Apr 2022",
    comments: "Comments (07)",
    title: "Fresh Blueberry Muffins",
    description:
      "Perfectly moist muffins filled with fresh blueberries. A great way to start your day!",
  },
  {
    image: "/blog1,png.jpeg",
    date: "10 May 2022",
    comments: "Comments (04)",
    title: "Tropical Fruit Salad with Coconut Dressing",
    description:
      "An exotic mix of tropical fruits with a refreshing coconut dressing.",
  },
  {
    image: "/blog2.png",
    date: "25 Jun 2022",
    comments: "Comments (12)",
    title: "Chocolate Lava Cake",
    description:
      "A rich, gooey chocolate dessert thats perfect for chocoholics.",
  },
];console.log("Blog Data:", blogData); // Log the full blog data array


// Component for displaying the blog cards
const BlogCardList: React.FC = () => {
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 px-8">
      {blogData.map((blog, index) => {
        console.log("Rendering BlogCard for:", blog.title)
        return(
        <BlogCard
          key={index}
          image={blog.image}
          date={blog.date}
          comments={blog.comments}
          title={blog.title}
          description={blog.description}
        />
      )})}
    </div>
  );
};

export default BlogCardList;