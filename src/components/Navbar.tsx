interface Props {
    persone?: string
    indentity_code?: number;
}

function Navbar ({ indentity_code, persone }: Props) {
  return (
    <div className="">
      <nav className="flex justify-between my-4 mx-12 items-center">
        <h1 className="text-4xl text-black-600">
          Wonderland elections
        </h1>
        <h1 className="text-xl text-black-600">
          {persone ? <div>{persone} {indentity_code} </div> : null} 
        </h1>
      </nav>
    </div>
  );
};

export default Navbar;

