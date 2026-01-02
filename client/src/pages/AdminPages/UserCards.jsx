import React from "react";

function UserCards() {
  // Hardcoded employee data for demo
  const employees = [
    {
      id: 1,
      name: "John Doe",
      jobRole: "Software Engineer",
      department: "Engineering",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Jane Smith",
      jobRole: "HR Manager",
      department: "HR",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Alice Johnson",
      jobRole: "Finance Analyst",
      department: "Finance",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Bob Williams",
      jobRole: "Marketing Lead",
      department: "Marketing",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <section className="p-8 bg-black">
      <h2 className="text-[3vw] text-white font-wix2 mb-6">Our Team</h2>

      {/* The Grid Container */}
      <div className="flex flex-wrap gap-6">
        {employees.map((person) => (
          <div
            key={person.id}
            className="bg-[#1a1a1a] p-4 rounded-2xl flex flex-col items-center text-white min-w-[200px]"
          >
            <img
              src={person.image}
              alt={person.name}
              className="w-24 h-24 rounded-full mb-4 object-cover"
            />
            <h3 className="text-lg font-bold">{person.name}</h3>
            <p className="text-sm">{person.jobRole}</p>
            <p className="text-xs text-gray-400">{person.department}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UserCards;
