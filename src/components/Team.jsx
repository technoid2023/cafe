const people = [
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export default function Team() {
  return (
    // <div className="bg-white py-24 sm:py-32">
    //   <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
    //     <div className="max-w-2xl">
    //       <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
    //         Meet our leadership
    //       </h2>
    //       <p className="mt-6 text-lg leading-8 text-gray-600">
    //         Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae
    //         elementum enim vitae ullamcorper suspendisse.
    //       </p>
    //     </div>
    //     <ul
    //       // role="list"
    //       className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
    //     >
    //       {people.map((person) => (
    //         <li key={person.name}>
    //           <div className="flex items-center gap-x-6">
    //             <img
    //               className="h-16 w-16 rounded-full"
    //               src={person.imageUrl}
    //               alt=""
    //             />
    //             <div>
    //               <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
    //                 {person.name}
    //               </h3>
    //               <p className="text-sm font-semibold leading-6 text-indigo-600">
    //                 {person.role}
    //               </p>
    //             </div>
    //           </div>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </div>
    <div className="flex flex-wrap justify-center items-center gap-6 p-10">
      {people.map(({ name, role, imageUrl }) => (
        <div className="overflow-hidden rounded-lg shadow transition hover:shadow-lg w-72 flex flex-col justify-center items-center">
          <img
            alt="Office"
            src={imageUrl}
            className="h-56 object-cover rounded-full"
          />
          <div className="bg-zinc-200 p-4 sm:p-6">
            <h1 className="block text-3xl text-gray-500">{name}</h1>
            <div>
              <h3 className="mt-0.5 text-lg text-gray-900">{role}</h3>
            </div>
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores, possimus pariatur animi temporibus nesciunt
              praesentium dolore sed nulla ipsum eveniet corporis quidem,
              mollitia itaque minus soluta, voluptates neque explicabo tempora
              nisi culpa eius atque dignissimos. Molestias explicabo corporis
              voluptatem?
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
