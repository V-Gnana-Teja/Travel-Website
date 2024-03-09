import React from "react";
import { RiCustomerServiceFill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            dolores eius tempore, magnam illo nulla. Consequatur amet iste
            cumque inventore nemo recusandae laborum nisi! Similique cupiditate
            dolor sapiente nam fuga! Laudantium repudiandae debitis dolorum
            molestias inventore fugit rerum necessitatibus ut. Minus nihil,
            tenetur iste quas delectus, excepturi et blanditiis nemo perferendis
            architecto possimus sunt voluptas voluptatibus recusandae alias?
            Nisi et cumque vero alias! Itaque iure eum facilis ratione alias
            laboriosam nemo in consequatur qui cumque. Velit mollitia tempora
            asperiores nostrum eum amet hic, ad modi quibusdam aliquid
            aspernatur!{" "}
          </p>
        </div>

        <div className='grid sm:grid-cols-2 gap-8 py-4'>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <RiCustomerServiceFill size={50} />
            </button>
            <div>
                <h3 className='py-2'>LEADING SERVICE</h3>
                <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
                <h3 className='py-2'>LEADING SERVICE</h3>
                <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
            </div>
          </div>
        </div>
      </div>

    <div>
      <div className="border text-center">
        <p className="pt-2"> Get An Additional 10% Off</p>
        <p className="py-4">12 HOURS LEFT</p>
        <p className="bg-gray-800 text-gray-200 py-2"> BOOK NOW AND SAVE</p>
      </div>

      <form className="w-full ">
        <div className="flex flex-col my-2">
          <label> Destination</label>
          <select className="border rounded-md p-2">
            <option>Grand Antigua</option>
            <option>Key West</option>
            <option>Maldieves</option>
            <option>Cozumel</option>
          </select>
        </div>

        <div className="flex flex-col my-4">
          <label> Check-In</label>
          <input className="border rounded-md p-2" type="date" />
        </div>
        
        <div className="flex flex-col my-2">
          <label> Check-Out</label>
          <input className="border rounded-md p-2" type="date" />
        </div>
        
        <div>
          <button className="w-full my-4">Rates & Availabilities</button>
        </div>
      </form>

    </div>
    </div>
  );
};

export default Search;
