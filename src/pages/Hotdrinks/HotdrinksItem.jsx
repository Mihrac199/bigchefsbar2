export default function HotdrinksItem({ hotdrink }) {

     const { image, name, glassName, ingredients } = hotdrink;

     return (

          <div className="flex flex-col gap-5 rounded-2xl shadow-2xl p-2 mb-10">

               <img
                    className="w-72 rounded-full"
                    src={image}
                    alt="name" />

               <div>
                    <p>{name}</p>
                    <p>{glassName}</p>
                    <p>{ingredients}</p>
               </div>

          </div>

     )

}