"use client"
import WallPage from "../_components/Wall";
import Sidebar from "../_components/Sidebar";
import { TiArrowLeftOutline } from "react-icons/ti";
import { TiArrowRightOutline } from "react-icons/ti";
import { useRef, useState } from "react";

export default function HomeContainer() {
  const [walls, setWalls] = useState([]);
  const [history, setHistory] = useState([]);
  const [count, setCount] = useState(0);
  const nextId = useRef(1);

  const addWall = () => {
    if (walls.length > 0) return;
    setWalls([
      ...walls,
      { id: nextId.current++, x: 20, y: 50, width: 130, height: 110 },
    ]);
    setHistory([...history, walls]);
    setCount(count + 1);
  };

  const resizeWall = (id, deltaX, deltaY) => {
    setHistory([...history, walls]);
    setWalls(
      walls.map((wall) => {
        if (wall.id === id) {
          return {
            ...wall,
            width: wall.width + deltaX,
            height: wall.height + deltaY,
          };
        }
        return wall;
      })
    );
  };

  const startResize = (id, e) => {
    e.preventDefault();
    const origX = e.clientX;
    const origY = e.clientY;

    const handleMouseMove = (e) => {
      const newWidth =
        walls.find((wall) => wall.id === id)?.width + (e.clientX - origX);
      const newHeight =
        walls.find((wall) => wall.id === id)?.height + (e.clientY - origY);
      resizeWall(
        id,
        newWidth - walls.find((wall) => wall.id === id)?.width,
        newHeight - walls.find((wall) => wall.id === id)?.height
      );
    };

    const stopResize = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", stopResize);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", stopResize);
  };
  const undo = () => {
    if (history.length > 0) {
      const previousWalls = history.pop();
      setWalls(previousWalls);
      setHistory([...history]); // Update history state
    }
  };
  return (
    <main>
     
      <div className="grid h-screen grid-rows-auto grid-cols-[auto_1fr]">
        <Sidebar addWall={addWall}/>
        <div className="primary-50 overflow-y-auto">
          <div className="flex flex-col">
            <div className=" bg-[#F5F5F5] border-y border-gray-600">
              <div className="container flex gap-1">
                <TiArrowLeftOutline className="w-12 h-12 cursor-pointer hover:text-[#84B469] transition-colors" onClick={undo}/>
                <TiArrowRightOutline className="w-12 h-12 cursor-pointer" />
              </div>
            </div>

            <WallPage walls={walls} startResize={startResize} />
          </div>
        </div>
      </div>
    </main>
  );
}
