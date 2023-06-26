import React, { useState } from "react";

const Pruebas = () => {
  const recentBlogs = [
    {
      id: 1,
      imageUrl: "https://placehold.co/600x400",
      title: "Título del Blog 1",
      description: "Descripción del Blog 1",
    },
    {
      id: 2,
      imageUrl: "https://placehold.co/600x400",
      title: "Título del Blog 2",
      description: "Descripción del Blog 2",
    },
    // Agrega más datos de ejemplo aquí si es necesario
  ];

  return (
    <div className="flex">
      <div className="w-3/4 p-4">
        {/* Feed de publicaciones */}
        <div className="bg-white dark:bg-[#1E1E1E] p-4 rounded-lg shadow dark:text-white">
          <h1 className="text-2xl font-bold mb-4">Feed de publicaciones</h1>
          {/* Aquí irían las publicaciones */}
          <div className="flex flex-col gap-4">
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
        </div>
      </div>
      <div className="w-1/3 p-4">
        {/* Barra lateral */}
        <div className="flex flex-col">
          {/* Listado para seguir personas */}
          {/* Aquí iría el listado de personas para seguir */}
          <FollowList />
          {/* Mostrar blogs recientes */}

          {/* Aquí iría el contenido de blogs recientes */}
          <BlogList recentBlogs={recentBlogs} />
        </div>
      </div>
    </div>
  );
};

const PostCard = () => {
  return (
    <div className="max-w-md bg-white dark:bg-[#2C2C2C] p-4 rounded-lg shadow dark:text-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-red-500 rounded-full -mr-2"></div>
          <div className="w-8 h-8 bg-green-500 rounded-full mr-2"></div>
          <div>
            <h3 className="text-sm font-bold">Nombre de Usuario</h3>
            <p className="text-xs text-gray-600 dark:text-gray-400">Descripción del usuario</p>
          </div>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>
      </div>
      {/* Imagen */}
      <img
        src="https://placehold.co/600x400"
        alt="Post Image"
        className="w-full mb-4"
      />
      {/* Acciones */}
      <div className="flex justify-between">
        <div className="flex">
          <div className="flex items-center mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-1 text-red-500 dark:text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
            <p className="text-sm">25</p>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-1 text-gray-500 dark:text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 19l-2 2-3.5-3.5m0 0L5 8l9-9 7 7-9 9zm0 0v-8"
              />
            </svg>
            <p className="text-sm">10</p>
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            5 comentarios
          </p>
        </div>
      </div>
    </div>
  );
};

const FollowList = () => {
  return (
    <div className="bg-white dark:bg-[#1E1E1E] p-4 mb-4 rounded-lg shadow dark:text-white">
      <h2 className="text-lg font-bold mb-2">Seguir personas</h2>
      {/* Listado de personas para seguir */}
      <div className="dark:bg-[#2C2C2C] p-2 rounded flex flex-col w-full gap-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-red-500 rounded-full mr-2"></div>
            <p className="text-sm">Usuario 1</p>
          </div>
          <button className="bg-white dark:bg-gray-700 text-black dark:text-white py-2 px-4 border border-black transition-all shadow-button">
            Follow
          </button>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-red-500 rounded-full mr-2"></div>
            <p className="text-sm">Usuario 2</p>
          </div>
          <button className="bg-white dark:bg-gray-700 text-black dark:text-white py-2 px-4 border border-black transition-all shadow-button">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};

const Blog = ({ imageUrl, title, description }) => {
  return (
    <div className="bg-white dark:bg-[#2C2C2C] p-4 rounded-lg shadow mb-4">
      <div className="grid grid-cols-2 gap-4">
        <img src={imageUrl} alt="Blog" className="w-full h-auto rounded-md" />
        <div className="flex flex-col justify-center">
          <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const BlogList = ({ recentBlogs }) => {
  return (
    <div className="bg-white dark:bg-[#1E1E1E] p-4 rounded-lg shadow">
      <h2 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
        Blogs recientes
      </h2>
      {/* Renderizar los componentes Blog */}
      {recentBlogs.map((blog) => (
        <Blog
          key={blog.id}
          imageUrl={blog.imageUrl}
          title={blog.title}
          description={blog.description}
        />
      ))}
    </div>
  );
};

export default Pruebas;
