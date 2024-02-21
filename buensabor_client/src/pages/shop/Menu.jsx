import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards";
import { FaFilter } from "react-icons/fa";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); // Número de items a mostrar por pagina

  useEffect(() => {
    // Fetch data from the backend
    const fetchData = async () => {
      try {
        const response = await fetch("/menu.json");
        const data = await response.json();
        setMenu(data);
        setFilteredItems(data); // Initially, display all items
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filterItems = (category) => {
    const filtered =
      category === "all"
        ? menu
        : menu.filter((item) => item.category === category);

    setFilteredItems(filtered);
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const showAll = () => {
    setFilteredItems(menu);
    setSelectedCategory("all");
    setCurrentPage(1);
  };

  const handleSortChange = (option) => {
    setSortOption(option);

    // Logic for sorting based on the selected option
    let sortedItems = [...filteredItems];

    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        // Do nothing for the "default" case
        break;
    }

    setFilteredItems(sortedItems);
    setCurrentPage(1);
  };

  //   console.log(filteredItems);
  // logica de paginación
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {/* menu banner */}
      <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 bg-white">
        <div className="py-48 flex flex-col items-center justify-center">
          {/* contenido */}
          <div className=" text-center px-4 space-y-7">
            <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug text-black">
              Con amor hacia la <span className="text-green">Comida</span>
            </h2>
            <p className="text-[#4A4A4A] text-xl md:w-4/5 mx-auto">
              Ven con tu familia y siente la alegría de una comida deliciosa
              como Pizzas, Empanadas, Hamburguesas, Lomos y más por un excelente
              precio.
            </p>
            <button
              className="bg-green font-semibold btn text-white px-8 py-3 rounded-full"
              style={{ border: "none" }}
            >
              Ordenar Ahora
            </button>
          </div>
        </div>
      </div>

      {/* menu shop  */}
      <div className="max-w-screen-2xl container mx-auto x1:px-24 px-4">
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
          {/* categoria botones */}
          <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4  flex-wrap text-black">
            <button
              onClick={showAll}
              className={selectedCategory === "all" ? "active" : ""}
            >
              <span
                className={selectedCategory === "all" ? "selectedOption" : ""}
              >
                Menu
              </span>
            </button>
            <button
              onClick={() => filterItems("Empanadas")}
              className={selectedCategory === "Empanadas" ? "active" : ""}
            >
              <span
                className={
                  selectedCategory === "Empanadas" ? "selectedOption" : ""
                }
              >
                Empanadas
              </span>
            </button>
            <button
              onClick={() => filterItems("pizza")}
              className={selectedCategory === "pizza" ? "active" : ""}
            >
              <span
                className={selectedCategory === "pizza" ? "selectedOption" : ""}
              >
                Pizza
              </span>
            </button>
            <button
              onClick={() => filterItems("Lomos")}
              className={selectedCategory === "Lomos" ? "active" : ""}
            >
              <span
                className={selectedCategory === "Lomos" ? "selectedOption" : ""}
              >
                Lomos
              </span>
            </button>
            <button
              onClick={() => filterItems("hamburguesas")}
              className={selectedCategory === "hamburguesas" ? "active" : ""}
            >
              <span
                className={
                  selectedCategory === "hamburguesas" ? "selectedOption" : ""
                }
              >
                Hamburguesas
              </span>
            </button>
            <button
              onClick={() => filterItems("bebidas")}
              className={selectedCategory === "bebidas" ? "active" : ""}
            >
              <span
                className={
                  selectedCategory === "bebidas" ? "selectedOption" : ""
                }
              >
                Bebidas
              </span>
            </button>
          </div>

          {/* opciones filtro*/}
          <div className="flex justify-end mb-4 rounded-sm">
            <div className="bg-black p-2">
              <FaFilter className="text-white h-4 w-4" />
            </div>
            <select
              id="sort"
              onChange={(e) => handleSortChange(e.target.value)}
              value={sortOption}
              className="bg-black text-white px-2 py-1 rounded-sm"
            >
              <option value="default"> Por Defecto</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">Menor a Mayor $</option>
              <option value="high-to-low">Mayor a Menor $</option>
            </select>
          </div>
        </div>

        {/* Productos*/}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 ">
          {currentItems.map((item) => (
            <Cards key={item._id} item={item} />
          ))}
        </div>
      </div>

      {/* Paginación */}
      <div className="flex justify-center my-8 text-black">
        {Array.from({
          length: Math.ceil(filteredItems.length / itemsPerPage),
        }).map((_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`mx-1 px-3 py-1 rounded-full ${
              currentPage === index + 1 ? "bg-green text-white" : "bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Menu;
