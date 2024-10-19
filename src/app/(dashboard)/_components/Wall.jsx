"use client";

const WallPage = ({ walls, startResize }) => {
  return (
    <div className="container">
      <div className="grid">
        {walls.map((wall) => (
          <div
            key={wall.id}
            className="absolute border border-black flex justify-center items-center"
            style={{
              left: `${wall.x}px`,
              top: `${wall.y}px`,
              width: `${wall.width}px`,
              height: `${wall.height}px`,
            }}
          >
             <div className="text center">Wall</div>
            <div
              className=" right-[-15px] top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-e-resize dot"
              onMouseDown={(e) => startResize(wall.id, e)}
            />

            <div
              className="-left-[7.5px] -top-[7.5px] cursor-nwse-resize  dot"
              onMouseDown={(e) => startResize(wall.id, e)}
            />
            <div
              className="right-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 top-[-1.5px] cursor-n-resize dot"
              onMouseDown={(e) => startResize(wall.id, e)}
            />
            <div
              className="-right-[7.5px] -top-[7.5px] cursor-nesw-resize dot"
              onMouseDown={(e) => startResize(wall.id, e)}
            />
            <div
              className=" left-[-1px] top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-e-resize dot"
              onMouseDown={(e) => startResize(wall.id, e)}
            />
            <div
              className="-left-[7.5px] -bottom-[7.5px] cursor-nesw-resize dot"
              onMouseDown={(e) => startResize(wall.id, e)}
            />
            <div
              className="right-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bottom-[-15px] cursor-n-resize dot"
              onMouseDown={(e) => startResize(wall.id, e)}
            />
            <div
              className="-right-[7.5px] -bottom-[7.5px] cursor-nwse-resize dot"
              onMouseDown={(e) => startResize(wall.id, e)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WallPage;
